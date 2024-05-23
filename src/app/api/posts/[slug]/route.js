import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async(req, {params}) =>{
    const {slug} =  params;
    try{
        const post = await prisma.post.findUnique({
            where: {slug},
            include: {user: true},
        });

        return new NextResponse(JSON.stringify(post));

    } catch(error){
        return new NextResponse(JSON.stringify({message: "can't fetch post"}));
    }
}