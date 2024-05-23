import Pagination from "./Pagination";
import Card from "./Card";

const getData = async(page, cat) =>{
    const res = await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,
    {cache:"no-store"});
        if(!res.ok){
            throw new error ("failed");
        }
    return res.json();
}

const CardList = async({page, cat}) =>{
    const {posts, count} = await getData(page, cat);

    const post_per_page = 2;
    const hasprev = post_per_page * (page-1) > 0;
    const hasNext = post_per_page * (page-1) + post_per_page < count;

    return(
        <div className="w-fit md:pl-[220px] md:pr-6 md:m-0 m-auto"> 
            <h1 className="md:text-xl text-base font-bold "> Recent Posts </h1>
            {posts && Array.isArray(posts) && posts.map((item) => (
                <Card key={item._id} item={item} />
            ))}
            <Pagination page={page} hasPrev={hasprev} hasNext={hasNext}/>
        </div>
    );
}

export default CardList;