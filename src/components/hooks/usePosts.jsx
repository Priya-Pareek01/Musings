import { BASE_API_URL } from "@/utils/constants";

export const usePosts = async(page, cat) =>{
    if(!BASE_API_URL) return null;
    const res = await fetch(`${BASE_API_URL}/api/posts?page=${page}&cat=${cat || ""}`,
    {cache:"no-store"});
        if(!res.ok){
            console.error ("failed");
        }
    return res.json();
}