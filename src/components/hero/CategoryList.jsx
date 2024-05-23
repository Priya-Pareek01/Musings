import Link from "next/link";
import Image from "next/image";

    const GetData = async() => {
        const res = await fetch("http://localhost:3000/api/categories", 
            {cache:"no-store"});
        if(!res.ok){
            throw new error("failed");
        }
    return res.json();
    }

const CategoryList = async() => {  

    const linkColors = ['bg-[#da85c731]', 'bg-[#57c4ff31]', 'bg-[#7fb88133]', 'bg-[#ff795736]', 'bg-[#ffb04f45]', 'bg-[#5e4fff31]'];
    const data = await GetData();
    return(
        <div className='flex flex-col items-center w-screen m-auto mb-16'>
            <h1 className="font-bold text-center my-7 text-base md:text-xl"> Popular Catagories </h1>
            <div className="flex gap-6 justify-center flex-wrap md:flex-nowrap text-base md:text-xs font-semibold md:mx-0 mx-14" >

                {data && Array.isArray(data) && data.map((item, index) => (
                    <Link href={`/blog?cat=${item.title}`} key={item.id}
                        className={`${linkColors[index]} p-4 px-6 rounded-lg flex gap-2 justify-center w-[100%] sm:w-[15%]`}>
                        <Image src={`${item.img}`} width={20} height={20} className="rounded-[50%]"></Image>
                        <h2 className="capitalize font-semibold text-xs"> {item.title} </h2>
                    </Link>
                ))}

            </div>
        </div>
    );
}

export default CategoryList;
