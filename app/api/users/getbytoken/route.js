import prisma from "@/lib/prisma"
import { NextResponse } from "next/server";
import httpStatus from "http-status";
import next from "@/scripts/next"

export async function GET(req) {
    try {
        const token = req.headers.get("authorization")

        return NextResponse.json({
            success: true,
            // data: user,
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