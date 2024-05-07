"use client"
import { useContext, useState } from "react";
import "react-quill/dist/quill.bubble.css";
import dynamic from "next/dynamic";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FiUpload } from "react-icons/fi";
import { FaImages } from "react-icons/fa";
import { MdVideoLibrary } from "react-icons/md";
import { ThemeContext } from "@/context/ThemeContext";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const Write = () =>{
    const {status} = useSession();
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    const [titleValue, setTitleValue] = useState("");
    const{theme} = useContext(ThemeContext);

    if(status === "loading"){
        return(
            <div> LOADING... </div>
        );
    }

    if(status === "unauthenticated"){
        console.log(status);
        router.push("/login");
    }


    return(
        <div className="flex flex-col  pt-10 md:ml-[220px] relative h-[100vh]">
            <input type="text"  placeholder="Title" onChange={() => setTitleValue()} value={titleValue}
                className="p-[25px] placeholder:text-4xl bg-transparent 
                 outline-none"/> 

            <div className="writePageItems">
                <button onClick={() => setOpen(!open)}>
                    <IoIosAddCircleOutline className="h-8 w-8 text-[#b3b3b1]"/>
                </button>

                {open && <div className="flex gap-2">
                    <button className="border rounded-[50%] p-[6px] border-[#1a8917]"> 
                        <FaImages className="h-4 w-4 text-[#b3b3b1]"/>
                    </button>

                    <button className="border rounded-[50%] p-[6px] border-[#1a8917]"> 
                        <FiUpload className="h-4 w-4 text-[#b3b3b1]"/>
                    </button>

                    <button className="border rounded-[50%] p-[6px] border-[#1a8917]"> 
                        <MdVideoLibrary className="h-4 w-4 text-[#b3b3b1]"/>
                    </button>
                </div>}

            </div>
            <div>
                <ReactQuill theme="bubble" value={value} onChange={setValue} placeholder="Tell your story.."/>
            </div>
            
                <button className="bg-[#1a8917] rounded-lg p-2 text-xs text-white absolute top-12 right-3 md:right-[-150px]"> 
                    Publish 
                </button>
        </div>
    );
}

export default Write;