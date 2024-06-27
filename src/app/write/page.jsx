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
import Modals from "@/components/Modals";
import { BASE_API_URL } from "@/utils/constants";
import uploadImage from "@/utils/uploadImage";

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
    const [catValue, SetCatValue] = useState("");
    const [categories, setCategories] = useState(null);

    const [isDialogboxOpen, setIsDialogboxOpen] = useState(false);
    const [dialogBoxValue, setDialogBoxValue] = useState(null);
    const [imgUploadTxt, setImgUploadTxt] = useState(null);

    const GetCategoryItems = async() =>{
        const res = await fetch(`${BASE_API_URL}/api/categories`, 
            {cache:"no-store"});
        if(!res.ok){
            console.error("failed");
        }
        return res.json();
    }

    useEffect(() => {
        const Get = async() =>{
            const cat = await GetCategoryItems();
            setCategories(cat);
        }
        Get();
    }, []);

        
    // useEffect(() =>{
    //     const Upload = () => { 
    //         const name = new Date().getTime() + file.name;
    //         const storageRef = ref(storage, name);
        
    //         const uploadTask = uploadBytesResumable(storageRef, file);
        
    //         uploadTask.on('state_changed', 
    //         (snapshot) => {
    //             const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //             switch (snapshot.state) {
    //                 case 'paused':
    //                     console.log('Upload is paused');
    //                  break;
    //                 case 'running':
    //                     console.log('Upload is running');
    //                 break;
    //             }
    //         }, 
    //         (error) => {
    //             console.error('Upload error:', error);
    //         }, 
    //             () => {
    //                 getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
    //                     setImgUploadTxt("Image uploaded successfully!");
    //                     setIsDialogboxOpen(true);
    //                     setMedia(downloadURL);
    //             });
    //         }
    //         );
    //     };

    //     if (file) Upload();

    // }, [file, storage])


    useEffect(() => {
        if (file) {
          uploadImage(
            file,
            (progress) => setUploadProgress(progress),
            (error) => console.error('Upload error:', error),
            (downloadURL) => {
              setMedia(downloadURL);
              setIsDialogboxOpen(true);
              setDialogBoxValue('Image uploaded successfully!');
            }
          );
        }
      }, [file]);
    

    const handleSubmit= async() =>{
        const res = await fetch("/api/posts", {
            method: "POST",
            body: JSON.stringify({
                desc: value,
                img: media,
                title: titleValue,
                catSlug: catValue.trim(),
                slug: `${titleValue.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}`, 
            })
        });

        setIsDialogboxOpen(true);
        
        if(res.ok){
            setDialogBoxValue("Successfully Published!");
            router.refresh();
            router.push("/")
        }else{
            setDialogBoxValue("Sorry! Something went wrong.. ");
        }
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
        <div className="flex flex-col  pt-10 md:ml-[220px] relative  ">

            <select className="outline-none text-[#9c9c99] ml-4 md:p-2 p-1 w-fit rounded-md bg-[#da85c731] capitalize"
                    onChange={(e) => SetCatValue(e.target.value)}>
                    <option  defaultValue={"-Select category-"} disabled selected hidden>
                        -Select category-
                    </option>
                {categories && categories.map((item) => (
                    <option key={item?.id} value={item?.slug} > {item.slug} </option>
                ))}
            </select>

            <input type="text"  placeholder="Title" onChange={(e) =>{
                    e.preventDefault;
                    setTitleValue(e.target.value);
                    }} value={titleValue}
                className="p-[25px] md:text-4xl text-2xl bg-transparent 
                 outline-none"/> 

            <div className="writePageItems">
                <button onClick={() => setOpen(!open)}>
                    <IoIosAddCircleOutline className="h-8 w-8 text-[#b3b3b1]"/>
                </button>

                {open && 
                <div className="flex gap-2 ">
                    <input type="file" id="image" 
                        onChange={(e) => setFile(e.target.files[0])} 
                        className="hidden" />

                    <button className="border rounded-[50%] p-[6px]  border-[#1a8917]"> 
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
            <div className="pl-10 md:ml-0">
                <ReactQuill theme="bubble" value={value} onChange={setValue} placeholder="Tell your story.."/>
            </div>
            
                <button className="bg-[#1a8917] rounded-lg p-2 text-xs text-white absolute top-12 right-3 "
                    onClick={handleSubmit}> 
                    Publish 
                </button>

                <div className="md:inline-block hidden">
                <Modals isDialogboxOpen= {isDialogboxOpen} onRequestClose={() => (setIsDialogboxOpen(false),
                                                                                setDialogBoxValue(" "))} 
                                                                                showCloseBtn={true}>
                    <h1 className="py-1 text-green-800 font-semibold text-base">
                        {dialogBoxValue? dialogBoxValue : imgUploadTxt }
                    </h1>
                </Modals>
                </div>

        </div>
    );
}

export default Write;
