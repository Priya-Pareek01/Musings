import Pagination from "./Pagination";
import Image from "next/image";
import Link from "next/link";

const getData = async(page) =>{
    const res = await fetch(`http://localhost:3000/api/posts?page=${page}`,
    {cache:"no-store"});
        if(!res.ok){
            throw new error ("failed");
        }
    return res.json();
}

const CardList = async({page}) =>{
    const {posts, count} = await getData(page);

    const post_per_page = 2;
    const hasprev = post_per_page * (page-1) > 0;
    const hasNext = post_per_page * (page-1) + post_per_page < count;

    return(
        <div className="w-fit md:pl-[220px] md:pr-6 md:m-0 m-auto"> 
            <h1 className="md:text-xl text-base font-bold "> Recent Posts </h1>
            {posts && Array.isArray(posts) && posts.map((item) => (
                <div key={item.id}
                    className='flex my-6 md:my-8 relative md:flex-row flex-col items-center gap-1 md:gap-6' >
                <div className='md:w-64 w-52'> <Image src="/culture.png" alt="culture" width={300} height={300}/>  </div>

                <div className= 'md:w-60 w-52 text-xs'>
                    <p className="text-[8px] text-gray-600 md:mt-[-14px] md:mb-4"> {item.desc} 
                    <span className="text-red-600"> {item.slug}  </span> </p>
                    <h1 className='font-semibold text-[10px] md:text-[15px] leading-3 md:leading-5 md:mb-2'>Lorem ipsum dolor sit Minima cupid  aperiam!</h1>
                    <p className='mb-4 md:inline-block text-xs hidden'> Lorem ipsum odit molestiae alias blanditiis praesentium et a praesentium et a sapiente distinctio, debitis maxime. Incidunt doloribus maiores assumenda!</p>
                    <Link href="/" className="border-b-[1px] pb-[2px] border-gray-500 md:text-xs text-[8px]"> Read more..</Link>
                </div>

            </div>
            ))}
            <Pagination page={page} hasPrev={hasprev} hasNext={hasNext}/>
        </div>
    );
}

export default CardList;