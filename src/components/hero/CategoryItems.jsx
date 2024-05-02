import Image from "next/image";
import Fashion from "@/components/thumbnails/fashion.png"
import Coding from "@/components/thumbnails/coding.png"
import Style from "@/components/thumbnails/style.png"
import Food from "@/components/thumbnails/food.png"
import Travel from "@/components/thumbnails/travel.png"
import Culture from "@/components/thumbnails/culture.png"
import Link from "next/link";

const CategoryItems = () =>{
    return(
            <>
                
                <Link href="/" className="bg-[#57c4ff31]  p-4 px-6 rounded-lg flex gap-2 justify-center w-[100%] sm:w-[15%] ">
                    <Image src={Fashion} width={20} height={20} className="rounded-[50%]"></Image>
                    <h2> Fashion </h2>
                </Link>
                
                <Link href="/" className="bg-[#da85c731] py-4 px-6  rounded-lg flex gap-2 justify-center w-[100%] sm:w-[15%] ">
                    <Image src={Coding} width={20} height={20} className="rounded-[50%]"></Image>
                    <h2> Coding </h2>
                </Link>

                <Link href="/" className="bg-[#7fb88133] py-4 px-6 rounded-lg flex gap-2 justify-center w-[100%] sm:w-[15%]">
                    <Image src={Style} width={20} height={20} className="rounded-[50%]"></Image>
                    <h2> Style </h2>
                </Link>

                <Link href="/" className="bg-[#ff795736] py-4 px-6 rounded-lg flex gap-2 justify-center w-[100%] sm:w-[15%]">
                    <Image src={Food} width={20} height={20} className="rounded-[50%]"></Image>
                    <h2> Food </h2>
                </Link>

                <Link href="/" className="bg-[#ffb04f45] py-4 px-6 rounded-lg flex gap-2 justify-center w-[100%] sm:w-[15%]">
                    <Image src={Travel} width={20} height={20} className="rounded-[50%] "></Image>
                    <h2> Travel </h2>
                </Link>

                <Link href="/" className="bg-[#5e4fff31] py-4 px-6 rounded-lg flex gap-2 justify-center w-[100%] sm:w-[15%]">
                    <Image src={Culture} width={20} height={20} className="rounded-[50%]"></Image>
                    <h2> Culture </h2>
                </Link>
            </>
    );
}

export default CategoryItems;