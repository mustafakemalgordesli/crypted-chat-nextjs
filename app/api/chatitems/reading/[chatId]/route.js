import prisma from "@/lib/prisma"
import { NextResponse } from "next/server";
import httpStatus from "http-status";
import next from "@/lib/next";
import useMiddleware from "@/middlewares/useMiddleware";
import authenticate from "@/middlewares/authenticate";

async function handler(req) {
    const chatId = Number(req?.params?.chatId)

    await prisma.chatItem.updateMany({
        where: {
            chatId: chatId,
            NOT: {
                username: req?.user?.username
            }
        },
        data: {
            isRead: true
        }
    })

    return NextResponse.json({ success: true })
}

export const PUT = async (req, { params }) => {
    req.params = params
    return await useMiddleware(req, authenticate, handler)
}