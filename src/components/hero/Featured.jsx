import Image from 'next/image';
import kerla from '@/components/thumbnails/kerlaImg.png'

const Featured = () =>{
    return(
        <div className='flex flex-col items-center w-screen m-auto'>
            <div> 
                <h1 className="font-bold pt-12 text-4xl leading-[44px] md:inline-block hidden"> Hey, Priya here! 
                    <span className="font-normal px-auto md:text-3xl text-sm"> Discover my stories and unique <br/> ideas.. </span> 
                </h1>

                {/* for mobile devices */}
                <h1 className="font-bold pt-14 text-2xl leading-5 md:hidden text-center"> Hey, Priya here! 
                    <span className="font-normal px-auto md:text-3xl text-lg"> Discover <br/> my stories and unique ideas.. </span> 
                </h1>
            </div>

            <div className='flex md:my-8 my-4 relative md:flex-row flex-col items-center gap-4' >
                <div className='md:w-96 w-52'> <Image src={kerla} alt="kerla" width={500}/>  </div>
                <div className= 'my-auto md:w-80 w-48 text-xs flex-1'>
                    <h1 className='font-semibold text-xs md:text-sm mb-4'>Lorem ipsum dolor sit Minima cupid architecto nisi aperiam!</h1>
                    <p className='mb-4 md:inline-block hidden'> Lorem ipsum odit molestiae alias blanditiis praesentium et a  dolor sit  quo, similique odit molestiae alias blanditiis praesentium et a sapiente distinctio, debitis maxime. Incidunt doloribus maiores assumenda!</p>
                    <buttom className='readMoreBtn'> Read more..</buttom>
                </div>
            </div>
        </div>
    )
}

export default Featured;