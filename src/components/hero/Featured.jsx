import Image from 'next/image';

const Featured = async() =>{
    return(
        <div className='flex flex-col items-center w-screen m-auto pt-3 mb-10'>
                <div className='flex my-8 relative md:flex-row flex-col items-center gap-7 md:gap-20'>
                    <div className= 'my-auto w-80 text-xs flex-1 text-center'>
                        <h1 className='text-amber-700 font-semibold text-lg md:inline-block hidden'> WELCOME </h1>

                        <h1 className="font-bold pt-12 text-4xl leading-[44px] md:inline-block hidden"> Hey, Priya here! 
                            <span className="font-normal px-auto md:text-3xl text-sm"> Discover my stories and unique <br/> ideas or start writing your own today. </span> 
                        </h1>

                        {/* for mobile devices */}
                        <h1 className="font-bold  text-2xl leading-5 md:hidden inline-block text-center px-6"> Hey, Priya here! 
                            <span className="font-normal text-lg"> Discover my stories and unique ideas or start writing your own today. </span> 
                        </h1>
                    </div>

                    <div className='md:w-96 w-64'> 
                        <Image src="/cover.png" alt='image' width={500} height={500} priority={true}/>  
                    </div>
                </div>
        </div>
    )
}

export default Featured;