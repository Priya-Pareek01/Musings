"use client"

import Image from "next/image";
import React, { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () =>{
    const {theme, toggle} = useContext(ThemeContext);
    console.log(theme);
    
    return(
        <>
            <div className={`bg-black flex justify-center items-center rounded-xl relative p-1 gap-3 cursor-pointer
                    ${theme==="dark"? 'bg-white ' : 'bg-black'}`}
                    onClick={toggle}> 
                <Image src="/sun.png" height={15} width={15} alt="sun-img" ></Image>
                <div className={`rounded-[50%]  w-4 h-4 absolute  ${!theme && 'left-[30px] bg-white'} top-[3px] 
                ${theme==="light"? 'bg-white right-1' : 'bg-black left-1'}`}></div>
                <Image src="/moon.png" height={15} width={15} alt="moon-img" className="rounded-[50%]"></Image>
            </div>
        </>
    )
}

export default ThemeToggle;