import prisma from "@/lib/prisma"
import { NextResponse } from "next/server";
import httpStatus from "http-status";
import next from "@/lib/next"
import sendMail from "@/lib/utils/sendMail";
import { z } from "zod";

const validateSchema = z.object({
    email: z.string()
        .min(1, { message: "This field has to be filled." })
        .email("This is not a valid email.")
})

function createResetToken() {
    return Math.floor(
        Math.pow(10, 6 - 1) +
        Math.random() * (Math.pow(10, 6) - Math.pow(10, 6 - 1) - 1)).toString()
}

export async function POST(req) {
    try {
        const body = await req.json()

        const isValidData = validateSchema.parse(body)

        const now = new Date();

        const user = await prisma.user.findFirst({
            where: { email: isValidData.email, isStatus: true }
        });

        if (!user)
            return next({ message: "User with given email doesn't exist" });

        let resetToken = await prisma.resetToken.findUnique({ where: { userId: user.id } });

        if (!resetToken) {
            resetToken = await prisma.resetToken.create({
                data: {
                    userId: user.id,
                    token: createResetToken(),
                    createdAt: now
                }
            });
        } else {
            const timeDiff = Math.abs(
                new Date().getTime() - resetToken.createdAt.getTime()
            );
            const diffMin = Math.ceil(timeDiff / (1000 * 60));

            if (diffMin >= 5) {
                resetToken = await prisma.resetToken.update({
                    where: {
                        id: resetToken.id
                    },
                    data: {
                        token: createResetToken(),
                        createdAt: now
                    }
                })

            }
        }

        const result = await sendMail(
            user.email,
            "Password Reset Token",
            null,
            `<p>Token: ${resetToken.token}</p>`
        );

        if (!result) return next({ statusCode: httpStatus.BAD_REQUEST })

        return NextResponse.json({
            success: true,
        }, { status: httpStatus.OK });

    } catch (error) {
        const { name, message } = error
        return NextResponse.json({
            success: false, error: {
                name, message
            }
        }, { status: 500 })
    }
}