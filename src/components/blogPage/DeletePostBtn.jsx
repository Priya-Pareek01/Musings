"use client"

import { RiDeleteBin5Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Modals from "@/components/Modals"; 

const deleteData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    method: "DELETE",
  });

  console.log(res);
  if (!res.ok) {
    console.error("Failed to delete post");
    throw new Error("Failed to delete post");
  }
  return res.json();
};

const ActionButtons = ({ slug }) => {
  const router = useRouter();
  const [isDltConfirm, setIsDltConfirm] = useState(false); 
  const [isDialogboxOpen, setIsDialogboxOpen] = useState(false);

  const handleDelete = () => {
    try {
      setIsDialogboxOpen(true); 
    } catch (error) {
      console.error(error);
    }
  };

  const confirmDelete = async () => {
    try {
        if(isDltConfirm){
        const res = await deleteData(slug);
        if (res.ok) {
          const data = await res.json();
          console.log("Post deleted, navigating to home", data);
          router.push('/');
        } else {
          console.error("Failed to delete post", res.statusText);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex gap-2 justify-center items-center ml-[700px] text-xl mt-10 mb-[-40px] text-gray-500 cursor-pointer">
      <button onClick={() => handleDelete()}>
        <RiDeleteBin5Line />
      </button>
      <button onClick={() => router.push(`/posts/edit/${slug}`)}>
        <FaEdit />
      </button>

      <Modals isDialogboxOpen={isDialogboxOpen} onRequestClose={() => setIsDialogboxOpen(false)} showCloseBtn={false}>
        <div>
          <h1 className="py-1 text-green-800 font-semibold text-base">Are you sure?</h1>

          <div className="flex gap-2 text-[10px] pt-1">
            <button  className='bg-green-800 text-white rounded-md py-1 px-4'
              onClick={async() => { setIsDltConfirm(true); await confirmDelete(); }}>Yes</button> 
            <button className='bg-red-600 text-white rounded-md py-1 px-4' 
              onClick={() => setIsDialogboxOpen(false)}>No</button> 
          </div>

        </div>
      </Modals>
    </div>
  );
};

export default ActionButtons;
