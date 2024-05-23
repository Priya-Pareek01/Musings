import prisma from "@/utils/connect";
import { NextResponse } from "next/server";
import { getAuthSession } from "../auth/[...nextauth]/route";

export const GET = async(req) =>{
    const {searchParams} = new URL(req.url);
    const page = searchParams.get("page")
    const cat = searchParams.get("cat")
    const post_per_page = 2;

    const query = {
        take: post_per_page,
        skip: post_per_page * (page-1),
        where: {
            ...(cat && {catSlug: cat}),
        },
    };

    try{
        const [posts, count] = await prisma.$transaction([
            prisma.post.findMany(query),
            prisma.post.count({where:query.where}),
        ]);
        return new NextResponse(JSON.stringify({posts, count}));

    }catch(error) {
        return new NextResponse(JSON.stringify({message: "can't fetch posts"}))
    }
}

export const POST = async (req) =>{
    const session = await getAuthSession();

    if(!session) {
        return new NextResponse(
            JSON.stringify({message: "User is not authenticated!"})
        )
    }

    try{
        const body =  await req.json();
        const post = await prisma.post.create({
            data: {...body, userEmail: session.user.email},
        })
        return new NextResponse(JSON.stringify(post));
    }catch(err) {
        return NextResponse.json({mssage: err.message});
    }
}