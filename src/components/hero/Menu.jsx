import Link from "next/link";
import MenuItems from "./MenuItems";
import Image from "next/image";
import { useCategoryItems } from "../hooks/useCategoryItems";

const Menu = async({isAdd }) =>{
    const categories = await useCategoryItems();
  
    const linkColors = ['bg-[#57c4ff31]' , 'bg-[#da85c731]', 'bg-[#7fb88133]' ,  'bg-[#ff795736]' , 'bg-[#ffb04f45] ' , 'bg-[#5e4fff31]']

    return(
        <div className="w-fit md:inline-block hidden"> 
            <h3 className="text-gray-500 text-xs "> What's hot! </h3>
            <h1 className="font-semibold text-base pb-2"> Most popular </h1>
            <MenuItems withImg={true}/>

            <h3 className="text-gray-500 text-xs pt-8"> Discover by topics </h3>
            <h1 className="font-semibold text-base pb-3"> Categories </h1>

            <div className="flex flex-wrap text-xs w-72 gap-3">
              {categories && categories?.map((item, idx) => 
                (<div key={item.id}> <Link href={isAdd ? `/blog?cat=${item.title}` : `cat=${item.title}`} 
                        className={`${linkColors[idx]} py-2 w-[70px] rounded-lg flex gap-1 justify-center`}>
                    <Image src={item.img} width={15} height={15} className="rounded-[50%]" priority={true} alt="categories-img"></Image>
                    <h2> {item.title}</h2>
                </Link> </div>)
              )}
            </div>
                
            <h3 className="text-gray-500 text-xs pt-8"> Chosen by the editor </h3>
            <h1 className="font-semibold text-base pb-3"> Editors Pick </h1>
            <MenuItems withImg={false}/>
        </div>
    );
}

export default Menu;