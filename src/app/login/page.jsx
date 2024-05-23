"use client"
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () =>{
    const {data, status} = useSession();
    const router = useRouter();

    if(status === "loading"){
        return(
            <div> LOADING... </div>
        );
    }

    if(status === "authenticated"){
        router.push("/")
    }

    return(
        <div className="w-screen mt-10 mb-8 text-center">
            <div className="flex flex-col mx-auto lg:w-[25%] w-[55%] rounded-md bg-[#0d1729] bg-opacity-50
                text-white lg:px-8 py-8 lg:py-16 gap-10 items-center text-[10px] sm:text-xs font-semibold">

                <div className="bg-[#ff5555] p-3 lg:w-[65%] w-[75%] rounded-md cursor-pointer"
                    onClick={() => signIn("google")}>
                    Sign in with google
                </div>

                <div className="bg-black p-3 lg:w-[65%] w-[75%] rounded-md cursor-pointer">
                     Sign in with github 
                </div>

                <div className="bg-[#6553f0] p-3 lg:w-[65%] w-[75%] rounded-md cursor-pointer">
                     Sign in with facebook 
                </div>
            </div>
        </div>
    );
}

export default Login;