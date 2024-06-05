import { BASE_API_URL } from "@/utils/constants";

export const useCategoryItems = async() =>{
    if(!BASE_API_URL) return null;
    const res = await fetch(`${BASE_API_URL}/api/categories`, 
        {cache:"no-store"});
    if(!res.ok){
        console.error("failed");
    }
    return res.json();
}