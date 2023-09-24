import { z } from "zod"
import prisma from "@/lib/prisma"
import { NextResponse } from "next/server";
import httpStatus from "http-status";
import useMiddleware from "@/middlewares/useMiddleware";
import authenticate from "@/middlewares/authenticate";

const updateSchema = z.object({
    username: z.string().regex(new RegExp(/^(?=.{3,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/)),
})

async function patchHandler(req) {
    const body = await req.json()

    const isValidData = updateSchema.parse(body)

    const updateUser = await prisma.user.update({
        where: {
            id: req?.user?.id
        },
        data: {
            username: isValidData.username
        },
        select: {
            username: true,
            email: true,
            id: true,
            photoUrl: true
        }
    })

    return NextResponse.json({ success: true, user: updateUser })
}

export const PATCH = async (req) => await useMiddleware(req, authenticate, patchHandler)