"use client"
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

const Login = () =>{
    const {data, status} = useSession();
    const router = useRouter();

    if(status === "loading"){
        return(
            <div className="mt-10 ml-2"> LOADING... </div>
        );
    }

    if(status === "authenticated"){
        router.push("/")
    }

    return(
        <div className=" w-screen md:mt-8 mt-24 pb-44 text-center">            
            <Image src="/bg-login.png" alt="background-img" width={1000} height={1000}
                className="h-screen w-screen absolute top-[-2px]"/>
            <div className="absolute flex flex-col lg:w-[30%] w-[60%] rounded-md bg-[#0d1729] bg-opacity-40 
                 text-white lg:px-4 lg:py-16 py-8 gap-5 text-[10px] sm:text-xs font-semibold
                 lg:ml-[35%] ml-[20%] items-center">

                <div className="text-xl md:mb-2 mb-4 font-bold"> LogIn to Musings </div>

                <div className="flex justify-center items-center gap-1 bg-[#ff5555] p-3 lg:w-[65%] w-[90%] rounded-md 
                        cursor-pointer md:text-base text-sm"
                    onClick={() => signIn("google")}>
                    <AiFillGoogleCircle className="text-xl" />
                    Continue with google
                </div>

                <div className="flex justify-center items-center gap-2 bg-black p-3 lg:w-[65%] w-[90%] rounded-md 
                        cursor-pointer  md:text-base text-sm"
                    onClick={() => signIn("github")}>
                    <FaGithub className="text-xl"/>
                    Continue with github 
                </div>
            </div>
        </div>
    );
}

export default Login;