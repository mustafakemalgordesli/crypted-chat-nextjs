import prisma from "@/lib/prisma"
import httpStatus from "http-status";
import next from "@/lib/next"
import useMiddleware from "@/lib/middlewares/useMiddleware";
import authenticate from "@/lib/middlewares/authenticate";
import { NextResponse } from "next/server";

async function handler(req) {
    const user = await prisma.user.findFirst({
        where: { id: req?.user?.id, isStatus: true }, select: {
            id: true,
            email: true,
            role: true,
            username: true
        }
    })

    if (!user)
        return next({
            statusCode: httpStatus.NOT_FOUND,
            message: "User not found",
        });

    return NextResponse.json({
        success: true,
        data: user,
    }, { status: httpStatus.OK });
}

export const GET = async (req) => useMiddleware(req, authenticate, handler)

