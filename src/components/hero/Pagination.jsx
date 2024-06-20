"use client"

import { useRouter } from "next/navigation";

const Pagination = ({page, hasPrev, hasNext}) =>{
    const router = useRouter();
    
    return(
        <div className="flex mt-10 justify-between md:mx-24 mx-6 text-xs text-white">
            <button className="bg-red-600 py-2 px-4 disabled:bg-red-800 disabled:cursor-not-allowed"
                disabled = {!hasPrev}
                onClick={()=> router.push(`?page=${page-1}`)}> Previous </button>

            <button className="bg-red-600 py-2 px-6 disabled:bg-red-800 disabled:cursor-not-allowed"
                disabled = {!hasNext}
                onClick={()=> router.push(`?page=${page+1}`)}> Next </button>
        </div>
    );
}

export default Pagination;