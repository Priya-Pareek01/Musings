import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async(req) =>{
    const {searchParams} = new URL(req.url);
    const page = searchParams.get("page")
    const post_per_page = 2;

    const query = {
        take: post_per_page,
        skip: post_per_page * (page-1),
    };

    try{
        const [posts, count] = await prisma.$transaction([
            prisma.post.findMany(query),
            prisma.post.count(),
        ]);
        return new NextResponse(JSON.stringify({posts, count}));

    }catch(error) {
        console.log(error);
        return new NextResponse(JSON.stringify({message: "can't fetch posts"}))
    }
}