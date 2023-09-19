import prisma from "@/lib/prisma"
import { NextResponse } from "next/server";
import httpStatus from "http-status";
import bcrypt from "bcrypt";
import next from "@/lib/next"
import { generateAccessToken, generateRefreshToken } from "@/lib/utils/helper"
import { z } from "zod";

const createSchema = z.object({
    username: z.string().regex(new RegExp(/^(?=.{3,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/)),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
    email: z.string()
        .min(1, { message: "This field has to be filled." })
        .email("This is not a valid email.")
}).superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
        ctx.addIssue({
            code: "custom",
            message: "The passwords did not match"
        });
    }
});

export async function POST(req) {
    let body;

    try {
        body = await req.json()

        const isValidData = createSchema.parse(body)

        const user = await prisma.user.findFirst({
            where: {
                OR: [
                    { email: isValidData.email },
                    { username: isValidData.username }
                ]
            }
        })

        if (user) {
            if (user?.email === isValidData.email) {
                return next({
                    statusCode: httpStatus.CONFLICT,
                    message: "Mail exists",
                },);
            } else {
                return next({
                    statusCode: httpStatus.CONFLICT,
                    message: "Username exists",
                });
            }
        }

        const hash = await bcrypt.hash(isValidData.password, 10);

        const savedUser = await prisma.user.create({
            data: {
                email: body.email,
                username: body.username,
                password: hash,
            }, select: {
                username: true,
                email: true,
                id: true
            }
        });

        if (savedUser) {
            const accessToken = generateAccessToken({
                user: savedUser
            })

            const refreshToken = generateRefreshToken({
                user: savedUser
            })

            // let expiresIn = Date.now() + 1000 * 60 * 60 * 24 * 7 * 4;

            const response = NextResponse.json({
                data: savedUser,
                success: true,
                message: "User created",
                token: {
                    accessToken,
                    refreshToken
                },
                // expiresIn,
            }, { status: httpStatus.CREATED });

            response.cookies.set({
                name: "accessToken",
                value: accessToken,
                path: "/",
            });

            response.cookies.set({
                name: "refreshToken",
                value: refreshToken,
                path: "/",
            });

            return response
        }

        return next({
            statusCode: httpStatus.BAD_REQUEST,
            message: "User not created",
        })

    } catch (error) {
        return next({
            error
        })
    }
}