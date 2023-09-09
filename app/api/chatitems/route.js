import { z } from "zod"
import prisma from "@/lib/prisma"
import { NextResponse } from "next/server";
import httpStatus from "http-status";
import next from "@/lib/next"
import useMiddleware from "@/middlewares/useMiddleware";
import authenticate from "@/middlewares/authenticate";

const createSchema = z.object({
    message: z.string().min(1),
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

    return NextResponse.json({
        data: {
            chatItem,
            sentUsername
        },
        success: true
    })
}



export const POST = async (req) => await useMiddleware(req, authenticate, postHandler)