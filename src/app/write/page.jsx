"use client"
import { useEffect, useState } from "react";
import "react-quill/dist/quill.bubble.css";
import dynamic from "next/dynamic";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FiUpload } from "react-icons/fi";
import { FaImages } from "react-icons/fa";
import { MdVideoLibrary } from "react-icons/md";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from "@/utils/firebase";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const Write = () =>{
    const {status} = useSession();
    const router = useRouter();
    const [open, setOpen] = useState(false);

    const [value, setValue] = useState("");
    const [titleValue, setTitleValue] = useState("");
    const [file , setFile] = useState("");
    const [media, setMedia] = useState("");
    const storage = getStorage(app);

    useEffect(() =>{
        const Upload = () => { 
            const name = new Date().getTime() + file.name;
            const storageRef = ref(storage, name);
        
            const uploadTask = uploadBytesResumable(storageRef, file);
        
            uploadTask.on('state_changed', 
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                     break;
                    case 'running':
                        console.log('Upload is running');
                    break;
                }
            }, 
            (error) => {
                console.error('Upload error:', error);
            }, 
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        console.log('File available at', downloadURL);
                        setMedia(downloadURL);
                });
            }
            );
        };

        if (file) Upload();

    }, [file])

    const slugify = (str) =>
        str
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/[\s_-]+/g, "-")
            .replace(/^-+|-+$/g, "");

    const handleSubmit= async() =>{
        const res = await fetch("/api/posts", {
            method: "POST",
            body: JSON.stringify({
                desc: value,
                img: media,
                slug: slugify(titleValue),
                title: titleValue,
                catSlug: "coding",
            })
        });
    }

    if(status === "loading"){
        return(
            <div> LOADING... </div>
        );
    }

    if(status === "unauthenticated"){
        router.push("/login");
    }

    return(
        <div className="flex flex-col  pt-10 md:ml-[220px] relative h-[100vh]">
            <input type="text"  placeholder="Title" onChange={(e) => setTitleValue(e.target.value)} value={titleValue}
                className="p-[25px] text-4xl bg-transparent 
                 outline-none"/> 

            <div className="writePageItems">
                <button onClick={() => setOpen(!open)}>
                    <IoIosAddCircleOutline className="h-8 w-8 text-[#b3b3b1]"/>
                </button>

                {open && <div className="flex gap-2">
                    <input type="file" id="image" 
                        onChange={(e) => setFile(e.target.files[0])} 
                        className="hidden" />

                    <button className="border rounded-[50%] p-[6px] border-[#1a8917]"> 
                        <label htmlFor="image">
                            <FaImages className="h-4 w-4 text-[#b3b3b1]"/>
                        </label>
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
            
                <button className="bg-[#1a8917] rounded-lg p-2 text-xs text-white absolute top-12 right-3 md:right-[-150px]"
                    onClick={handleSubmit}> 
                    Publish 
                </button>
        </div>
    );
}

export default Write;