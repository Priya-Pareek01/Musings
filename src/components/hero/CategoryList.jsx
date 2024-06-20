import Link from "next/link";
import Image from "next/image";
import { useCategoryItems } from "../hooks/useCategoryItems";

const CategoryList = async() => {  
   const data = await useCategoryItems();
    return(
        <div className='w-screen md:my-20 my-12'>
            <div className="grid md:grid-cols-3 md:gap-6 gap-8 md:mx-20" >
                {data && Array.isArray(data) && data.map((item, index) => (
                    <Link href={`/blog?cat=${item.title}`} key={item.id}
                        className={"relative flex justify-center"}>
                        <Image src={`${item.img}`} alt={item.title} width={310} height={310} priority={true} className="opacity-90"></Image>
                        <h2 className="capitalize font-semibold text-lg absolute bg-white
                             text-blue-600 md:py-2 py-4 px-10 md:top-[75px] top-14 hover:bg-blue-600
                            hover:text-white transition duration-400 ease-in-out"> {item.title} </h2>
                    </Link>
                ))}

            </div>
        </div>
    );
}

export default CategoryList;
