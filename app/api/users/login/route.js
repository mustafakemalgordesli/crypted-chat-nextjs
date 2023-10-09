import prisma from "@/lib/prisma"
import { NextResponse } from "next/server";
import httpStatus from "http-status";
import bcrypt from "bcrypt";
import next from "@/lib/next"
import { generateAccessToken, generateRefreshToken } from "@/lib/utils/helper"
import { z } from "zod";

const loginSchema = z.object({
    username: z.string(),
    password: z.string().min(6)
})

export async function POST(req) {
    let body;

    try {
        body = await req.json()

        let user;

        const isValidData = loginSchema.parse(body)

        if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(isValidData.username)) {
            user = await prisma.user.findFirst({
                where: {
                    email: isValidData.username,
                    isStatus: true,
                },
                select: {
                    username: true,
                    email: true,
                    id: true,
                    photoUrl: true,
                    password: true
                }
            })
        } else if (/^(?=.{3,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/.test(isValidData.username)) {
            user = await prisma.user.findFirst({
                where: {
                    username: isValidData.username,
                    isStatus: true
                },
                select: {
                    username: true,
                    email: true,
                    id: true,
                    photoUrl: true,
                    password: true
                }
            })
        }

        if (!user)
            return NextResponse.json({
                success: false,
                message: "User not found",
            }, { status: httpStatus.BAD_REQUEST });


        const match = await bcrypt.compare(isValidData.password, user.password)

        if (match) {
            user.password = undefined;

            const accessToken = generateAccessToken({
                user: {
                    id: user.id,
                    username: user.username,
                    email: user.email
                },
            })

            const refreshToken = generateRefreshToken({
                user: {
                    id: user.id,
                    username: user.username,
                    email: user.email
                },
            })

            // let expiresIn = Date.now() + 1000 * 60 * 60 * 24 * 7 * 4;

            const response = NextResponse.json({
                success: true,
                data: user,
                // expiresIn,
                token: {
                    accessToken,
                    refreshToken
                },
            }, { status: 200 });

            const expTime = 30 * 24 * 60 * 60 * 1000

            response.cookies.set({
                name: "accessToken",
                value: accessToken,
                path: "/",
                expires: Date.now() + expTime
            });

            response.cookies.set({
                name: "refreshToken",
                value: refreshToken,
                path: "/",
                expires: Date.now() + expTime
            })


            return response
        }

        return next({
            statusCode: httpStatus.BAD_REQUEST,
            message: "Password is wrong",
        })

    } catch (error) {
        return next({
            error
        })
    }
}