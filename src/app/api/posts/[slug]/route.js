import prisma from "@/utils/connect";
import { NextResponse } from "next/server";
import { getAuthSession } from "../../auth/[...nextauth]/route";

export const GET = async(req, {params}) =>{
    const {slug} =  params;
    try{
        const post = await prisma.post.update({
            where: {slug},
            data: {views: {increment: 1}},
            include: {user: true},
        });

        return new NextResponse(JSON.stringify(post));

    } catch(error){
        return new NextResponse(JSON.stringify({message: "can't fetch post"}));
    }
}

export const DELETE = async (req, { params }) => {
    const { slug } = params;
    const session = await getAuthSession();
  
    if (!slug) {
      return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
    }
  
    try {
      const post = await prisma.post.findUnique({
        where: { slug },
        include: { user: true },
      });
  
      if (!post) {
        return NextResponse.json({ message: "Post not found" }, { status: 404 });
      }
  
      if (post.user.name !== session.user.name) {
        return NextResponse.json({ message: "You are not authorized to delete this post" }, { status: 403 });
      }
  
      const res = await prisma.post.delete({
        where: { slug },
      });
  
      return NextResponse.json(res);
    } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  };
  


export const PUT = async (req, { params }) => {
    const session = await getAuthSession();
    const { slug } = params;

    if (!slug) {
        return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
    }

    const { title, desc, img } = await req.json();

    try {
        if(!session.user){
            return NextResponse.json({ error: 'Unauthorized' }, { status: 400 });
        }
    
        const post = await prisma.post.findUnique({
            where: { slug },
            include: { user: true },
        });

        if (!post) {
            return NextResponse.json({ error: 'Post not found' }, { status: 404 });
        }

        if (session.user.name !== post.user.name) {
            return NextResponse.json({ error: "You can't edit this post" }, { status: 403 });
        }
        
        const updatedPost = await prisma.post.update({
            where: { slug },
            data: { title, desc, img },
        });

        return NextResponse.json(updatedPost, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
};
