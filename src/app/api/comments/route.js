import prisma from "@/utils/connect";
import { NextResponse } from "next/server"
import { getAuthSession } from "../auth/[...nextauth]/route";

export const GET = async (req) =>{
    const {searchParams} = new URL(req.url);
    const postSlug = searchParams.get("postSlug");

    try{
        const comments = await prisma.comment.findMany({
            where: {
                ...(postSlug && {postSlug}),
            },
            include: {user: true},
        })
        return new NextResponse(JSON.stringify(comments));
    }catch(err) {
        return new NextResponse({message: err})
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
        const comments = await prisma.comment.create({
            data: {...body, userEmail: session.user.email},
        })
        return new NextResponse(JSON.stringify(comments));
    }catch(err) {
        return NextResponse.json({mssage: err.message});
    }
}