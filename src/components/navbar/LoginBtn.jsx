"use client"

import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";
import { useContext, useState } from "react";

const LoginBtn = () =>{
    const status = "NotAuthenticated";
    const [open, setOpen] = useState(false);
    const {theme, toggle} = useContext(ThemeContext);

    return(
        <>
            {status==="NotAuthenticated" ? (
                <Link href="/Login"  className= "md:inline-block hidden"> Login </Link>
            ) : ( 
                <>
                <Link href="/Write" className= "md:inline-block hidden"> Write </Link>
                <Link href="/Logout" className= "md:inline-block hidden"> LogOut</Link>
                </>
            )}

            {/* for mobile devices */}
            <div className=" md:hidden w-5 h-4 flex flex-col justify-between cursor-pointer" 
                    onClick={() => setOpen(!open)}>
                <div className={`w-[100%] h-[2px] 
                    ${theme==="light"? "bg-black" : "bg-white"} `}> </div>
                <div className={`w-[100%] h-[2px] 
                    ${theme==="light"? "bg-black" : "bg-white"} `}> </div>
                <div className={`w-[100%] h-[2px] 
                    ${theme==="light"? "bg-black" : "bg-white"} `}> </div>
            </div>

            {open && 
                <div className= {`absolute w-screen h-[100%] flex gap-6 flex-col top-[80px] z-10
                    ${theme==="light"? 'bg-white text-black' : 'bg-black text-white'} left-0  items-center pt-20 text-2xl `}> 
                    <Link href="/"> <li> Homepage </li> </Link>
                    <Link href='/'> <li> About </li> </Link>
                    <Link href='/'> <li> Contact </li> </Link>
                    {status==="NotAuthenticated" ? (
                    <Link href="/Login"> Login </Link>
                    ) : (
                    <>
                    <Link href="/Write"> Write </Link>
                    <Link href="/Logout"> LogOut</Link>
                    </>
                    )}
                </div>
            }
        </>
    )
}

export default LoginBtn;