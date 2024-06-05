import Pagination from "./Pagination";
import Card from "./Card";
import { usePosts } from "../hooks/usePosts";

const CardList = async({page, cat}) =>{

    const result = await usePosts(page, cat);

    if(!result) return null;
     
    const {posts, count} = await usePosts(page, cat);

    const post_per_page = 4;
    const hasprev = post_per_page * (page-1) > 0;
    const hasNext = post_per_page * (page-1) + post_per_page < count;

    return(
        <div className="w-fit lg:pl-[220px] sm:pl-16 md:pr-6 md:m-0 m-auto"> 
           
           <h1 className="md:text-xl text-base font-bold mb-7"> Recent Posts </h1>

           <div className="flex flex-col gap-0">
           {posts && Array.isArray(posts) && posts.map((item) => (
               <Card key={item.id} item={item} />
           ))}
           <Pagination page={page} hasPrev={hasprev} hasNext={hasNext}/>
           </div>

        </div> 
    );
}

export default CardList;