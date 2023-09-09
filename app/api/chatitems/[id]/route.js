import { z } from "zod"
import prisma from "@/lib/prisma"
import { NextResponse } from "next/server";
import httpStatus from "http-status";
import next from "@/lib/next"
import useMiddleware from "@/middlewares/useMiddleware";
import authenticate from "@/middlewares/authenticate";

async function deleteHandler(req) {
    const id = Number(req?.params?.id)

    const deletedItem = await prisma.chatItem.delete({
        where: {
            id: id
        }
    })

    return NextResponse.json({
        success: true,
        data: deletedItem
    })
}

export const DELETE = async (req, { params }) => {
    req.params = params
    return await useMiddleware(req, deleteHandler)
}