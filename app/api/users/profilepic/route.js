import { z } from "zod"
import prisma from "@/lib/prisma"
import { NextResponse } from "next/server";
import httpStatus from "http-status";
import next from "@/lib/next"
import useMiddleware from "@/middlewares/useMiddleware";
import authenticate from "@/middlewares/authenticate";
// import supabase from "@/lib/supabase";
import { supabaseAuth as supabase } from "@/lib/supabase";
import { v4 as uuidv4, v6 as uuidv6 } from 'uuid';



async function postHandler(req) {

    const formData = await req.formData()

    const file = formData.get("image")

    if (!file) {
        return NextResponse.json({ success: false });
    }

    const fileName = uuidv4() + file.name

    const { data, error } = await supabase.storage
        .from("profilepictures")
        .upload(fileName, file);

    if (error) return NextResponse.json({ success: false, error })

    const updateUser = await prisma.user.update({
        where: {
            id: req?.user?.id
        },
        data: {
            photoUrl: fileName,
        }
    })

    return NextResponse.json({ success: true, user: updateUser })
}

export const POST = async (req) => await useMiddleware(req, authenticate, postHandler)