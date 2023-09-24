import { z } from "zod"
import prisma from "@/lib/prisma"
import { NextResponse } from "next/server";
import httpStatus from "http-status";
import next from "@/lib/next"
import useMiddleware from "@/middlewares/useMiddleware";
import authenticate from "@/middlewares/authenticate";

async function deleteHandler(req) {
    const id = Number(req?.params?.id)

    console.log(id)

    const deletedItem = await prisma.chatItem.delete({
        where: {
            id: id
        }
    })

    return NextResponse.json({
        success: true,
        // data: deletedItem
    })
}

async function getHandler(req) {
    const chatId = Number(req?.params?.id)

    console.log(chatId)

    const user = req?.user;

    let chat = await prisma.chat.findFirst({
        where: {
            id: chatId
        }
    })

    if (!chat || (chat?.userOneUsername !== user.username && chat?.userTwoUsername !== user?.username)) {
        return next({
            statusCode: httpStatus.NOT_FOUND,
            message: "Chat not found",
        })
    }

    const chatItems = await prisma.chatItem.findMany({
        where: {
            chatId: chat?.id
        }
    })

    return NextResponse.json({
        data: chatItems,
        success: true
    })
}

export const DELETE = async (req, { params }) => {
    req.params = params
    return await useMiddleware(req, authenticate, deleteHandler)
}

export const GET = async (req, { params }) => {
    req.params = params
    return await useMiddleware(req, authenticate, getHandler)
}