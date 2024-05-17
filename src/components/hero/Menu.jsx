import Link from "next/link";
import MenuItems from "./MenuItems";
import Image from "next/image";

const Menu = () =>{
    return(
        <div className="w-fit md:inline-block hidden"> 
            <h3 className="text-gray-500 text-xs "> What's hot! </h3>
            <h1 className="font-semibold text-base pb-2"> Most popular </h1>
            <MenuItems withImg={false}/>

            <h3 className="text-gray-500 text-[10px] pt-8"> Discover by topics </h3>
            <h1 className="font-semibold text-base pb-3"> Categories </h1>
            <div className="flex flex-wrap text-xs w-72 gap-3">
                <Link href="/" className="bg-[#57c4ff31] py-2 w-[70px] rounded-lg flex gap-1 justify-center  ">
                    <Image src="/fashion.png" width={15} height={15} className="rounded-[50%]"></Image>
                    <h2> Fashion </h2>
                </Link>
                
                <Link href="/" className="bg-[#da85c731] py-2 w-[70px]  rounded-lg flex gap-1 justify-center ">
                    <Image src="/coding.png" width={15} height={15} className="rounded-[50%]"></Image>
                    <h2> Coding </h2>
                </Link>

                <Link href="/" className="bg-[#7fb88133] py-2 w-[70px] rounded-lg flex gap-1 justify-center ">
                    <Image src="/style.png" width={15} height={15} className="rounded-[50%]"></Image>
                    <h2> Style </h2>
                </Link>

                <Link href="/" className="bg-[#ff795736] py-2 w-[70px] rounded-lg flex gap-1 justify-center ">
                    <Image src="/food.png" width={15} height={15} className="rounded-[50%]"></Image>
                    <h2> Food </h2>
                </Link>

                <Link href="/" className="bg-[#ffb04f45] py-2 w-[70px] rounded-lg flex gap-1 justify-center  ">
                    <Image src="/travel.png" width={15} height={15} className="rounded-[50%] "></Image>
                    <h2> Travel </h2>
                </Link>

                <Link href="/" className="bg-[#5e4fff31] py-2 w-[70px] rounded-lg flex gap-1 justify-center ">
                    <Image src="/culture.png" width={15} height={15} className="rounded-[50%]"></Image>
                    <h2> Culture </h2>
                </Link>

            </div>

            <h3 className="text-gray-500 text-xs pt-8"> Chosen by the editor </h3>
            <h1 className="font-semibold text-base pb-3"> Editors Pick </h1>
            <MenuItems withImg={true}/>
        </div>
    );
}

export default Menu;