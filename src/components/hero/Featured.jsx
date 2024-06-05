import Image from 'next/image';
import { usePosts } from '../hooks/usePosts';
import htmlTruncate from 'html-truncate';
import Link from 'next/link';

const truncateHtmlContent = (html, maxLength) => {
    return htmlTruncate(html, maxLength, { ellipsis: '...' });
};

const Featured = async() =>{
    const result = await usePosts(1, "culture");

    if(result) {
    const {posts} = await usePosts(1, "culture");
    }
     
    return(
        <div className='flex flex-col items-center w-screen m-auto'>
            <div> 
                <h1 className="font-bold pt-12 text-4xl leading-[44px] md:inline-block hidden"> Hey, Priya here! 
                    <span className="font-normal px-auto md:text-3xl text-sm"> Discover my stories and unique <br/> ideas or start writing your own today. </span> 
                </h1>

                {/* for mobile devices */}
                <h1 className="font-bold pt-14 text-2xl leading-5 md:hidden text-center px-6"> Hey, Priya here! 
                    <span className="font-normal text-lg"> Discover  my stories and unique ideas or start writing your own today. </span> 
                </h1>
            </div>

            {posts &&  posts.filter(item => item.title.toLowerCase().includes("Indian Culture and Tradition".toLowerCase())).map((item) =>(
                <div className='flex md:my-8 my-4 relative md:flex-row flex-col items-center gap-6' key={item.id} >
                    <div className='md:w-96 w-52'> 
                        <Image src={item?.img} alt='image' width={500} height={500} priority={true}/>  
                    </div>

                    <div className= 'my-auto w-80 text-xs flex-1 text-center'>
                        <p className='font-semibold text-base md:text-xl mb-4'> {item.title} </p>
                        <div dangerouslySetInnerHTML={{ __html: truncateHtmlContent(item?.desc || '', 200)}} 
                            className='mb-5 md:inline-block text-xs mx-5  ' />
                        <Link href={`posts/${item.slug}`} className="bg-gray-400 rounded-[8%] p-[6px] "> Read more..</Link>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Featured;