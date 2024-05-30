import Image from "next/image";
import Link from "next/link";
import htmlTruncate from 'html-truncate';

const truncateHtmlContent = (html, maxLength) => {
    return htmlTruncate(html, maxLength, { ellipsis: '...' });
};

const Card = ({id, item}) =>{
    const truncatedDesc = truncateHtmlContent(item?.desc || '', 100);
    return(
        <Link href={`/posts/${item.slug}`} >
        <div className= 'flex relative md:flex-row flex-col mb-10 items-center justify-center gap-1 md:gap-6' key={id} >
            <div> 
                <Image src={item?.img} alt="posts" width={300} height={300} priority={true}/>  
            </div>
            
            <div className= 'md:w-60 w-52 text-xs flex flex-col '>
                <p className="text-[10px] text-gray-600 mt-2 md:mb-3"> 2024/02/15 
                <span className="text-red-600 capitalize text-[12px]"> - {item.catSlug}  </span> </p>
                
                <h1 className='font-semibold text-[10px] md:text-[15px] leading-3 md:leading-5 md:mb-1'>
                    {item.title}
                </h1>

                <div dangerouslySetInnerHTML={{ __html: truncatedDesc }} className='mb-3 md:inline-block text-xs' />

                <button className="border-b-[1px] pb-[2px] border-gray-400 md:text-xs text-[8px] w-[70px]">
                     Read more..
                </button>
            </div>
        </div>
        </Link>
    );
}

export default Card;