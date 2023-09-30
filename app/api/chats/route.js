import { z } from "zod"
import prisma from "@/lib/prisma"
import { NextResponse } from "next/server";
import httpStatus from "http-status";
import next from "@/lib/next"
import useMiddleware from "@/lib/middlewares/useMiddleware";
import authenticate from "@/lib/middlewares/authenticate";

const createSchema = z.object({
    username: z.string().regex(new RegExp(/^(?=.{3,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/)),
})


async function postHandler(req) {
    let body;

    body = await req.json()

    const isValidData = createSchema.parse(body)

    const sentUsername = isValidData.username

    if (req.user?.username === sentUsername) return NextResponse.json({
        success: false
    }, { status: httpStatus.BAD_REQUEST })

    const [user, sentUser] = await Promise.all([prisma.user.findFirst({
        where: {
            id: req.user?.id,
            isStatus: true
        }
    }), prisma.user.findFirst({
        where: {
            username: sentUsername,
            isStatus: true
        }
    })])

    if (!user) return NextResponse.json({
        success: false
    }, { status: httpStatus.BAD_REQUEST })

    if (!sentUser) return NextResponse.json({
        success: false
    }, { status: httpStatus.BAD_REQUEST })

    let chat = await prisma.chat.findFirst({
        where: {
            OR: [
                {
                    userOneUsername: user?.username,
                    userTwoUsername: sentUser?.username
                },
                {
                    userOneUsername: sentUser?.username,
                    userTwoUsername: user?.username
                },
            ],

        }
    })

    if (!chat) {
        chat = await prisma.chat.create({
            data: {
                userOneUsername: user?.username,
                userTwoUsername: sentUser?.username
            }
        })
    }

    return NextResponse.json({
        success: true,
        data: chat
    }, { status: httpStatus.OK })
}

async function getHandler(req) {
    const user = await prisma.user.findFirst({
        where: {
            id: req.user?.id,
            isStatus: true
        }
    })

    if (!user) return next({
        statusCode: httpStatus.BAD_REQUEST
    })

    const [readChats, unreadChats] = await Promise.all([prisma.chat.findMany({
        where: {
            AND: [
                {
                    NOT: {
                        ChatItems: {
                            some: {
                                AND: [
                                    {
                                        NOT: {
                                            username: req?.user?.username,
                                        }
                                    }, {
                                        isRead: false,
                                    }
                                ]
                            },
                        },
                    }
                },
                {
                    OR: [
                        { userOneUsername: req?.user?.username },
                        { userTwoUsername: req?.user?.username }
                    ]
                }
            ]
        },
        include: {
            ChatItems: {
                orderBy: {
                    createdAt: 'asc',
                },
            }
        },
    }), prisma.chat.findMany({
        where: {
            AND: [
                {
                    ChatItems: {
                        some: {
                            AND: [
                                {
                                    NOT: {
                                        username: req?.user?.username,
                                    }
                                }, {
                                    isRead: false,
                                }
                            ]
                        },
                    },
                },
                {
                    OR: [
                        { userOneUsername: req?.user?.username },
                        { userTwoUsername: req?.user?.username }
                    ]
                }
            ]
        },
        include: {
            ChatItems: {
                orderBy: {
                    createdAt: 'asc',
                },
            },
        },
    })])

    return NextResponse.json({
        success: true,
        data: {
            unreadChats,
            readChats
        }
    }, { status: httpStatus.OK })
}

export const POST = async (req) => await useMiddleware(req, authenticate, postHandler)

export const GET = async (req) => await useMiddleware(req, authenticate, getHandler)