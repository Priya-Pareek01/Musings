import Image from "next/image";
import Travel from "@/components/thumbnails/travel.png"
import Link from "next/link";

const MenuItems = ({withImg}) =>{
    return(
        <div className="flex flex-col gap-2">
        <Link href="/">
        <div className="flex items-center gap-2">  
            {withImg && <div>  <Image src={Travel} alt="culture" width="auto" className="w-10 h-10 rounded-[50%]"/> </div> }
            <div className="text-xs w-52">
                <p className="bg-[#ff7887] rounded-xl py-[2px]] px-2 w-max text-[8px] my-1 text-white"> Travel </p>
                <p className="font-semibold text-xs"> Lorem ipsum dolor sit amet consectetur iusto ipsam dolorum.</p>
                <p className="text-[10px] text-gray-500"> John doe - 
                    <span> 15.02.2023</span>
                </p>
            </div>
        </div>
        </Link>

        <Link href="/">
        <div className="flex items-center gap-2">  
        {withImg && <div>  <Image src={Travel} alt="culture" width="auto" className="w-10 h-10 rounded-[50%]"/> </div> }
            <div className="text-xs w-52">
                <p className="bg-[#7fb881] rounded-xl py-[2px]] px-2 w-max text-[8px] my-1 text-white"> Travel </p>
                <p className="font-semibold text-xs"> Lorem ipsum dolor sit amet consectetur iusto ipsam dolorum.</p>
                <p className="text-[10px] text-gray-500"> John doe - 
                    <span> 15.02.2023</span>
                </p>
            </div>
        </div>
        </Link>

        <Link href="/">
        <div className="flex items-center gap-2">  
        {withImg && <div>  <Image src={Travel} alt="culture" width="auto" className="w-10 h-10 rounded-[50%]"/> </div> }
            <div className="text-xs w-52">
                <p className="bg-[#ff7857] rounded-xl py-[2px]] px-2 w-max text-[8px] my-1 text-white"> Travel </p>
                <p className="font-semibold text-xs"> Lorem ipsum dolor sit amet consectetur iusto ipsam dolorum.</p>
                <p className="text-[10px] text-gray-500"> John doe - 
                    <span> 15.02.2023</span>
                </p>
            </div>
        </div>
        </Link>


        <Link href="/">
        <div className="flex items-center gap-2">  
        {withImg && <div>  <Image src={Travel} alt="culture" width="auto" className="w-10 h-10 rounded-[50%]"/> </div> }
            <div className="text-xs w-52">
                <p className="bg-[#789cff] rounded-xl py-[2px]] px-2 w-max text-[8px] my-1 text-white"> Travel </p>
                <p className="font-semibold text-xs"> Lorem ipsum dolor sit amet consectetur iusto ipsam dolorum.</p>
                <p className="text-[10px] text-gray-500"> John doe - 
                    <span> 15.02.2023</span>
                </p>
            </div>
        </div>
        </Link>
        </div>

    );
}

export default MenuItems;