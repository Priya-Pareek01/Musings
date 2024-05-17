import Image from "next/image";
import Link from "next/link";

const Card = () =>{
    return(
        <div className='flex my-6 md:my-8 relative md:flex-row flex-col items-center gap-1 md:gap-6' >
            <div className='md:w-64 w-52'> <Image src="/culture.png" alt="culture" width={300} height={300}/>  </div>
            <div className= 'md:w-60 w-52 text-xs'>
                <p className="text-[8px] text-gray-600 md:mt-[-14px] md:mb-4"> 15/01/2001 - 
                <span className="text-red-600"> CULTURE  </span> </p>
                <h1 className='font-semibold text-[10px] md:text-[15px] leading-3 md:leading-5 md:mb-2'>Lorem ipsum dolor sit Minima cupid  aperiam!</h1>
                <p className='mb-4 md:inline-block text-xs hidden'> Lorem ipsum odit molestiae alias blanditiis praesentium et a praesentium et a sapiente distinctio, debitis maxime. Incidunt doloribus maiores assumenda!</p>
                <Link href="/" className="border-b-[1px] pb-[2px] border-gray-500 md:text-xs text-[8px]"> Read more..</Link>
            </div>
        </div>
    );
}

export default Card;