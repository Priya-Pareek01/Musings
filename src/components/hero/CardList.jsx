import Pagination from "./Pagination";
import Card from "./Card";
import { usePosts } from "../hooks/usePosts";

const CardList = async({page, cat, isRecentPost}) =>{

    const result = await usePosts(page, cat);

    if(result===null || result === undefined){
        return null;
    } 
     
    const {posts, count} = result;

    const post_per_page = 6;
    const hasprev = post_per_page * (page-1) > 0;
    const hasNext = post_per_page * (page-1) + post_per_page < count;


    return(
        <div className="w-fit text-center sm:pl-16 md:pr-6 md:m-0 m-auto"> 
           
           {isRecentPost===true && <h1 className="text-3xl font-semibold mb-10"> Recent Posts </h1>}

           <div className="grid md:grid-cols-3 md:gap-[22px] gap-8">
           {posts && Array.isArray(posts) && posts.map((item) => (
               <Card key={item.id} item={item} />
           ))}
           
           </div>
           <Pagination page={page} hasPrev={hasprev} hasNext={hasNext}/>

        </div> 
    );
}

export default CardList;