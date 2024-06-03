"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from "@/utils/firebase";
import Modals from "@/components/Modals";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaImage } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import { MdVideoLibrary } from "react-icons/md";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const EditPost = ({ slug }) => {
    const { status } = useSession();
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    const [titleValue, setTitleValue] = useState("");
    const [file, setFile] = useState("");
    const [media, setMedia] = useState("");
    const storage = getStorage(app);
    const [isDialogboxOpen, setIsDialogboxOpen] = useState(false);
    const [dialogBoxValue, setDialogBoxValue] = useState(null);
    const [imgUploadTxt, setImgUploadTxt] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            const res = await fetch(`/api/posts/${slug}`);
            const data = await res.json();
            setTitleValue(data.title);
            setValue(data.desc);
            setMedia(data.img);
        };
        fetchPost();
    }, [slug]);

    useEffect(() => {
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
                        setImgUploadTxt("Image uploaded successfully!");
                        setIsDialogboxOpen(true);
                        setMedia(downloadURL);
                    });
                }
            );
        };

        if (file) Upload();

    }, [file, storage]);

    const handleSubmit = async () => {
        const res = await fetch(`/api/posts/${slug}`, {
            method: "PUT",
            body: JSON.stringify({
                desc: value,
                img: media,
                title: titleValue,
            })
        });

        setIsDialogboxOpen(true);

        if (res.ok) {
            setDialogBoxValue("Successfully Updated!");
            router.refresh();
            router.push(`/posts/${slug}`);
        } else {
            setDialogBoxValue("Sorry! Something went wrong.. ");
        }
    }

    if (status === "loading") {
        return (
            <div> LOADING... </div>
        );
    }

    if (status === "unauthenticated") {
        router.push("/login");
    }

    return (
        <div className="flex flex-col  pt-10 md:ml-[220px] relative  ">
            <input type="text" placeholder="Title" onChange={(e) => {
                e.preventDefault;
                setTitleValue(e.target.value);
            }} value={titleValue}
                className="p-[25px] text-4xl bg-transparent 
                 outline-none" />

            <div className="writePageItems">
                <button onClick={() => setOpen(!open)}>
                    <IoIosAddCircleOutline className="h-8 w-8 text-[#b3b3b1]" />
                </button>

                {open &&
                    <div className="flex gap-2 ">
                        <input type="file" id="image"
                            onChange={(e) => setFile(e.target.files[0])}
                            className="hidden" />

                        <button className="border rounded-[50%] p-[6px]  border-[#1a8917]">
                            <label htmlFor="image">
                                <FaImage className="h-4 w-4 text-[#b3b3b1]" />
                            </label>
                        </button>

                        <button className="border rounded-[50%] p-[6px] border-[#1a8917]">
                            <FiUpload className="h-4 w-4 text-[#b3b3b1]" />
                        </button>

                        <button className="border rounded-[50%] p-[6px] border-[#1a8917]">
                            <MdVideoLibrary className="h-4 w-4 text-[#b3b3b1]" />
                        </button>
                    </div>}
            </div>
            <div className="ml-10 md:ml-0">
                <ReactQuill theme="bubble" value={value} onChange={setValue} placeholder="Tell your story.." />
            </div>

            <button className="bg-[#1a8917] rounded-lg p-2 text-xs text-white absolute top-8 right-3 md:right-[-150px]"
                onClick={handleSubmit}>
                Update
            </button>

            <div className="md:inline-block hidden">
            <Modals isDialogboxOpen={isDialogboxOpen} onRequestClose={() => (setIsDialogboxOpen(false),
                setDialogBoxValue(" "))} showCloseBtn={true}>
                <h1 className="py-1 text-green-800 font-semibold text-base">
                    {dialogBoxValue ? dialogBoxValue : imgUploadTxt}
                </h1>
            </Modals>
            </div>
        </div>
    );
}

export default EditPost;
