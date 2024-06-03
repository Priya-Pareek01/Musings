"use client"

import { ThemeContext } from "@/context/ThemeContext";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useContext, useState } from "react";

const LoginBtn = () =>{
    const {status} = useSession();
    const [open, setOpen] = useState(false);
    const {theme} = useContext(ThemeContext);

    return(
        
        <>
            {status==="unauthenticated" ? (
                    <Link href="/login"  className= "md:inline-block hidden">  Login </Link>
            ) : ( 
                <>
                <Link href="/write" className= "md:inline-block hidden"> Write </Link> 
                <Link href="/login" className= "md:inline-block hidden"
                    onClick={signOut}> LogOut</Link>
                </>
            )}

            {/* for mobile devices */}
            <div className=" md:hidden w-5 h-4 flex flex-col justify-between cursor-pointer " 
                    onClick={() => setOpen(!open)}>
                <div className={`w-[100%] h-[2px]
                    ${theme === "light" ? "bg-black" : (theme === "dark" ? "bg-white" : "bg-black")} `}> </div>
                <div className={`w-[100%] h-[2px]
                    ${theme === "light" ? "bg-black" : (theme === "dark" ? "bg-white" : "bg-black")} `}> </div>
                <div className={`w-[100%] h-[2px]
                    ${theme === "light" ? "bg-black" : (theme === "dark" ? "bg-white" : "bg-black")} `}> </div>
            </div>

            {open && 
                <div className= {`absolute w-screen h-[100%] flex gap-6 flex-col top-[80px] z-10
                    ${theme==="light"? 'bg-white text-[#050d1c]' : (theme ==="dark"? 'bg-[#050d1c] text-white': 'bg-white text-[#050d1c]')} left-0  items-center pt-20 text-2xl `}> 
                    <Link href="/" onClick={() => setOpen(false)}> <li> Homepage </li> </Link>
                    <Link href='/blog' onClick={() => setOpen(false)}> <li> Blog </li> </Link>
                    <Link href='/about' onClick={() => setOpen(false)}> <li> About </li> </Link>

                    {status==="unauthenticated" ? (
                    <Link href="/login" onClick={() => setOpen(false)}> Login </Link>
                    ) : (
                    <>
                    <Link href="/write" onClick={() => setOpen(false)}> Write </Link>
                    <Link href="/" onClick={signOut}> LogOut</Link>
                    </>
                    )}
                </div>
            }
        </>
    )
}

export default LoginBtn;