import { NextResponse } from "next/server";
import httpStatus from "http-status";

export default function next(err) {
    const statusCode = err?.statusCode || httpStatus.INTERNAL_SERVER_ERROR;
    const message = err?.message || "Internal Server Error";
    return NextResponse.json({
        success: false,
        message: message,
    }, { status: statusCode })
}