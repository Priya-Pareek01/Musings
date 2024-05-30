
export const useCategoryItems = async() =>{
    const res = await fetch("http://localhost:3000/api/categories", 
        {cache:"no-store"});
    if(!res.ok){
        console.error("failed");
    }
    return res.json();
}