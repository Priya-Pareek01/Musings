"use client"

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import useSWR from "swr";

const fetcher = async(url) =>{
    const res = await fetch(url);
    const data = res.json();
    if(!res.ok) {
        const error = new Error(data.message);
        throw error;
    }
    return data;
}

const Comments = ({postSlug}) =>{
    const {status} = useSession();
    const [desc, setDesc] = useState("");
    const [textareaValue, setTextareaValue] = useState("");

    const {data, mutate, isLoading}  = useSWR(`http://localhost:3000/api/comments?postSlug=${postSlug}`,
        fetcher
    )
   
    const handleChange = (e) => {
        const value = e.target.value;
        setTextareaValue(value);
        setDesc(value);
    };

    const HandleSubmit = async() =>{
        await fetch("/api/comments", {
            method: "POST",
            body: JSON.stringify({desc, postSlug}),
        });
        setTextareaValue("");
        mutate(); 
    }

    return(
        
        <div className="flex flex-col md:ml-[225px] gap-2 pt-8 ml-8 ">
            <div> <h1 className="text-lg font-semibold pl-1 pb-4"> Comments </h1> </div>

            {status=== "authenticated"? (<div  className="flex gap-2 ">
                <textarea className="w-[70%] h-12 bg-gray-200 pt-3 pl-4 focus:outline-none placeholder-gray-500 text-gray-600" 
                    placeholder="Write a comment..." 
                    value={textareaValue}
                    onChange={handleChange}/> 

                <button className="bg-green-600 text-white p-2" onClick={HandleSubmit}> Send </button>
            </div>) : (<Link href="/login"> Login to write a comment </Link>)
            }

            {isLoading? "LOADING..." : (data?.map((item) => 
                <div key={item._id} >
                    <div className="flex flex-col gap-2 pt-8">
                        <div className="flex items-center gap-2">
                            {item.user.image && <Image src={item.user.image} height={500} width={500} alt="profile" className="w-7 h-7 rounded-[50%]"/>}
                            <div>
                            <p className="text-xs pb-1"> {item.user.name} </p>
                            <p className="text-[8px]">{item.createdAt.substring(0, 10)}</p>
                            </div>
                        </div>
                        <p className="md:w-[75%] w-[95%] text-xs"> 
                            {item.desc} 
                        </p>
                    </div>
                </div> 
            ))}

        </div>
    )
}

export default Comments;