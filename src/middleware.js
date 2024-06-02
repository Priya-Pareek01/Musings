import { NextResponse } from "next/server";

export async function middleware(req) {  
    const { nextUrl } = req;
    const pathname = nextUrl.pathname;

    if (!pathname) {
        return NextResponse.error(new Error("Request URL pathname is undefined"));
    }

    const authToken = req.cookies.get("next-auth.session-token")?.value;

    if (!authToken && pathname.startsWith('/posts/')) {
        return NextResponse.redirect(new URL("/login", req.url));
    }
   
    if (!authToken && pathname.startsWith('/blog')) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/posts/:slug*', '/login',  '/blog'],
};
