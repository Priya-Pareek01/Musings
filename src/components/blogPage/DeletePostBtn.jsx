"use client"

import { RiDeleteBin5Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { useRouter } from "next/navigation";

const deleteData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    router.refresh();
    console.error("Failed to delete post");
    throw new Error("Failed to delete post");
  }

  return res.json();
};

const ActionButtons = ({ slug }) => {
  const router = useRouter();
 
  const confirmDelete = async () => {
    try {
      await deleteData(slug);
      router.push('/');
    } catch (error) {
      console.error("Failed to delete post", error.message);
    }
  };

  return (
    <div className="flex gap-2 justify-center items-center md:ml-[700px] text-xl mt-10 ml-[200px] 
          md:mb-[-40px] text-gray-500 cursor-pointer">
      <button onClick={confirmDelete}>
        <RiDeleteBin5Line />
      </button>
      <button onClick={() => router.push(`/posts/edit/${slug}`)}>
        <FaEdit />
      </button>

    </div>
  );
};

export default ActionButtons;

