import prisma from "@/utils/connect";
import { NextResponse } from "next/server";
import { getAuthSession } from "../../auth/[...nextauth]/route";

export const GET = async(req, {params}) =>{
    const {slug} =  params;
    try{
        const post = await prisma.post.findUnique({
            where: {slug},
            include: {user: true},
        });

        return new NextResponse(JSON.stringify(post));

    } catch(error){
        console.log(error);
        return new NextResponse(JSON.stringify({message: "can't fetch post"}));
    }
}

export const DELETE = async(req, {params}) =>{
    const {slug} = params;
    const session = await getAuthSession();
    if (!slug) {
        return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
      }
    try{
        const post = await prisma.post.findUnique({
            where: {slug},
            include: {user: true},
        });
        if(post.user.name !== session.user.name){
            return new NextResponse(JSON.stringify({message: "You are not authorized to delete this post" }));
        }
        const res = await prisma.post.delete({
            where: {slug},
        });
        return new NextResponse(JSON.stringify(res));

    }catch(error){
        console.log(error);
        return new NextResponse(JSON.stringify(error));
    }

}

export const PUT = async (req, { params }) => {
    const session = await getAuthSession();
    const { slug } = params;

    if (!slug) {
        return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
    }

    const { title, desc, img } = await req.json();

    try {
        // Extract token from the request
        if(!session.user){
            return NextResponse.json({ error: 'Unauthorized' }, { status: 400 });
        }
    

        // Fetch the post from the database
        const post = await prisma.post.findUnique({
            where: { slug },
            include: { user: true },
        });

        if (!post) {
            return NextResponse.json({ error: 'Post not found' }, { status: 404 });
        }

        // Check if the authenticated user is the owner of the post
        if (session.user.name !== post.user.name) {
            return NextResponse.json({ error: "You can't edit this post" }, { status: 403 });
        }

        // Update the post
        const updatedPost = await prisma.post.update({
            where: { slug },
            data: { title, desc, img },
        });

        return NextResponse.json(updatedPost, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
};
