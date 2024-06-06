import Image from "next/image";
import Link from "next/link";
import { usePosts } from "../hooks/usePosts";

const linkColors = ['bg-pink-300', 'bg-green-300', 'bg-blue-300', 'bg-yellow-300'];

const MenuItems = async ({withImg}) =>{
    const result =  await usePosts(1);
    if(result===null || result === undefined){
        return null;
    }
        const {posts} = result;
    
    return(
        <div className="flex flex-col gap-1">
        
            {posts && posts.filter((item) => item.views > 2 ).map((item, idx) =>(  
                <Link href={`/posts/${item.slug}`}  key={item.id}>
                    <div className="flex items-center gap-2">  
                        {withImg && 
                        <div> <Image src={item?.img} alt="culture" width={100} height={100} priority={true}
                                    className="w-10 h-10 rounded-[50%]" /> 
                        </div> }
        
                        <div className="text-xs w-52">
                            <p className= {`${linkColors[idx]} rounded-xl py-[2px]] px-2 w-max text-[8px] my-2 text-black font-semibold`}> {item?.catSlug}</p>
                            <p className="font-semibold text-xs"> {item.title} </p>
                            <p className="text-[10px] text-gray-500"> {item?.user?.name} - 
                                <span> {item.createdAt.slice(0, 10)}</span>
                            </p>
                        </div>
                    </div>
                </Link>
            ))}

        </div>
    );
}

export default MenuItems;