export const usePosts = async(page, cat) =>{
    const res = await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,
    {cache:"no-store"});
        if(!res.ok){
            console.error ("failed");
        }
    return res.json();
}