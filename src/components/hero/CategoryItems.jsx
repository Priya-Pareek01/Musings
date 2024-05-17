import Image from "next/image";
import Link from "next/link";

const CategoryItems = () =>{
    return(
            <>    
                <Link href="/" className="bg-[#57c4ff31]  p-4 px-6 rounded-lg flex gap-2 justify-center w-[100%] sm:w-[15%] ">
                    <Image src="/fashion.png" width={20} height={20} className="rounded-[50%]"></Image>
                    <h2> Fashion </h2>
                </Link>
                
                <Link href="/" className="bg-[#da85c731] py-4 px-6  rounded-lg flex gap-2 justify-center w-[100%] sm:w-[15%] ">
                    <Image src="/coding.png" width={20} height={20} className="rounded-[50%]"></Image>
                    <h2> Coding </h2>
                </Link>

                <Link href="/" className="bg-[#7fb88133] py-4 px-6 rounded-lg flex gap-2 justify-center w-[100%] sm:w-[15%]">
                    <Image src="/style.png" width={20} height={20} className="rounded-[50%]"></Image>
                    <h2> Style </h2>
                </Link>

                <Link href="/" className="bg-[#ff795736] py-4 px-6 rounded-lg flex gap-2 justify-center w-[100%] sm:w-[15%]">
                    <Image src="/food.png" width={20} height={20} className="rounded-[50%]"></Image>
                    <h2> Food </h2>
                </Link>

                <Link href="/" className="bg-[#ffb04f45] py-4 px-6 rounded-lg flex gap-2 justify-center w-[100%] sm:w-[15%]">
                    <Image src="/travel.png" width={20} height={20} className="rounded-[50%] "></Image>
                    <h2> Travel </h2>
                </Link>

                <Link href="/" className="bg-[#5e4fff31] py-4 px-6 rounded-lg flex gap-2 justify-center w-[100%] sm:w-[15%]">
                    <Image src="/culture.png" width={20} height={20} className="rounded-[50%]"></Image>
                    <h2> Culture </h2>
                </Link>
            </>
    );
}

export default CategoryItems;