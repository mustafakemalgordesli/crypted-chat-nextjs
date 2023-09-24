import { z } from "zod"
import prisma from "@/lib/prisma"
import { NextResponse } from "next/server";
import httpStatus from "http-status";
import next from "@/lib/next"
import useMiddleware from "@/middlewares/useMiddleware";
import authenticate from "@/middlewares/authenticate";
import supabase from "@/lib/supabase";

const createSchema = z.object({
    message: z.string().min(1),
    chatId: z.number().min(0)
})

const getAllSchema = z.object({
    chatId: z.number().min(0)
})

async function postHandler(req) {
    const body = await req.json()
    const isValidData = createSchema.parse(body)

    const [user, chat] = await Promise.all([prisma.user.findFirst({
        where: {
            id: req?.user?.id,
            isStatus: true
        }
    }), prisma.chat.findUnique({
        where: {
            id: isValidData.chatId
        }
    })])

    if (!user) return next({
        statusCode: httpStatus.BAD_REQUEST
    })

    if (!chat) return next({
        statusCode: httpStatus.BAD_REQUEST
    })

    if (chat.userOneUsername !== user.username && chat.userTwoUsername !== user.username) return next({
        statusCode: httpStatus.BAD_REQUEST
    })

    const chatItem = await prisma.chatItem.create({
        data: {
            username: user?.username,
            chatId: chat?.id,
            message: isValidData.message,
            createdAt: new Date()
        }
    })

    const sentUsername = chatItem?.username === chat?.userTwoUsername ? chat?.userOneUsername : chat?.userTwoUsername

    const roomChat = supabase.channel("public:messages")

    roomChat.subscribe((status) => {
        // Wait for successful connection
        if (status !== 'SUBSCRIBED') {
            return null
        }

        console.log(sentUsername)

        // Send a message once the client is subscribed
        roomChat.send({
            type: 'broadcast',
            event: sentUsername,
            payload: chatItem
        })
    })

    return NextResponse.json({
        data: {
            chatItem,
            sentUsername
        },
        success: true
    })
}

export const POST = async (req) => await useMiddleware(req, authenticate, postHandler)
