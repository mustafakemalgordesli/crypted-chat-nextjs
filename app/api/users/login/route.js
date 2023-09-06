import prisma from "@/lib/prisma"
import { NextResponse } from "next/server";
import httpStatus from "http-status";
import bcrypt from "bcrypt";
import next from "@/scripts/next"
import { generateAccessToken, generateRefreshToken } from "@/scripts/utils/helper"
import { z } from "zod";

export async function POST(req) {
    let body;

    try {
        body = await req.json()

        let user;

        if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(body.username)) {
            user = await prisma.user.findFirst({
                where: {
                    email: body.username,
                }
            })
        } else if (/^(?=.{3,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/.test(body.username)) {
            user = await prisma.user.findFirst({
                where: {
                    username: body.username,
                }
            })
        }

        if (!user)
            return res.status(httpStatus.OK).json({
                success: false,
                message: "User not found",
            });


        const match = await bcrypt.compare(body.password, user.password)

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

            return NextResponse.json({
                success: true,
                data: user,
                // expiresIn,
                token: {
                    accessToken,
                    refreshToken
                },
            }, { status: 200 });
        }

        return next({
            error: err,
            statusCode: httpStatus.BAD_REQUEST,
            message: "Password is wrond",
        })

    } catch (error) {
        const { name, message } = error
        return NextResponse.json({
            success: false, error: {
                name, message
            }
        }, { status: 500 })
    }
}