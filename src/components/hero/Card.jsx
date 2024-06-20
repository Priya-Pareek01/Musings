import Image from "next/image";
import Link from "next/link";
import htmlTruncate from 'html-truncate';

const truncateHtmlContent = (html, maxLength) => {
    return htmlTruncate(html, maxLength, { ellipsis: '...' });
};

const Card = ({item}) =>{
    const truncatedDesc = truncateHtmlContent(item?.desc || '', 100);
    return(
        <Link href={`/posts/${item.slug}`} 
            className="border-[1px] border-slate-300 bg-white md:w-[330px] w-[310px] md:mx-0 mx-3 md:h-fit text-center">
        <div className= 'flex flex-col relative mb-10 justify-center gap-1 md:gap-4'>
            {item?.img? (<div> 
                <Image src={item?.img} alt="posts" width={330} height={330} priority={true}/>  
            </div>) : null}
            
            <div className= 'w-[300px] text-xs flex flex-col mx-1 hover:text-green-900 md:px-4'>
                <p className="text-[10px] text-gray-600 mt-2 mb-3"> 2024/02/15 
                <span className="text-red-600 capitalize text-[12px]"> - {item.catSlug}  </span> </p>
                
                <h1 className='font-semibold text-[10px] md:text-lg leading-3 md:leading-6 md:mb-4'>
                    {item.title}
                </h1>

                <div dangerouslySetInnerHTML={{ __html: truncatedDesc }} className='mb-3 md:inline-block text-xs ' />

                <button className="border-b-[1px] border-amber-700 md:text-xs text-[8px] w-[70px] text-amber-700">
                     Read more..
                </button>
            </div>
        </div>
        </Link>
    );
}

export default Card;