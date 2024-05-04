import Link from "next/link";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareGithub } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div className=" flex pb-[70px] justify-center mt-20 w-screen text-gray-600 md:flex-row flex-col md:gap-0 gap-4">
            <div className="flex-1 text-center flex flex-col items-center">
                <h1 className="text-xs md:text-lg font-bold"> Mu$!ng$ </h1>
                <p className="md:w-[400px] md:text-xs text-[8px] md:my-2 my-1 w-[200px] md:pl-24"> Lorem ipsum doloripsum amet dolor dolor amet dolor c sit quaerat nemo earum voluptates</p>

                <div className="md:flex gap-2 hidden ">
                    <Link href="https://linkedin.com">  <IoLogoLinkedin/></Link>
                    <Link href="https://github.com"> <FaSquareGithub/> </Link>
                    <Link href="https://instagram.com"> <FaInstagramSquare/> </Link>
                    <Link href="https://facebook.com"> <FaFacebookSquare/> </Link>
                </div>
            </div>

            <div className="flex flex-col gap-4 md:gap-12 flex-1 " >
                <div className="flex gap-12 md:gap-12 justify-center ">
                <div className="flex flex-col md:text-[10px] text-[8px] gap-[2px] md:gap-[6px]">
                    <p className="font-semibold md:text-xs text-[10px]">Links</p>
                    <Link href="/"> Homepage</Link>
                    <Link href="/"> Blog </Link>
                    <Link href="/"> Contact </Link>
                    <Link href="/"> About </Link>   
                </div>

                <div className="flex flex-col md:text-[10px] text-[8px] gap-[2px] md:gap-[6px]">
                    <p className="font-semibold md:text-xs text-[10px]">Tags </p>
                    <Link href="/"> Style </Link>
                    <Link href="/"> Coding </Link>
                    <Link href="/"> Fashion </Link>
                    <Link href="/"> Travel </Link>   
                </div>

                <div className="flex flex-col md:text-[10px] text-[8px] gap-[2px] md:gap-[6px]">
                    <p className="font-semibold text-[10px] ">Social</p>
                    <Link href="/"> Linkedin </Link>
                    <Link href="/"> Github </Link>
                    <Link href="/"> Instagram </Link>
                    <Link href="/"> Facebook </Link>  
                </div>
                </div>

                <div className="flex gap-1 md:hidden justify-center">
                    <Link href="https://linkedin.com">  <IoLogoLinkedin/></Link>
                    <Link href="https://github.com"> <FaSquareGithub/> </Link>
                    <Link href="https://instagram.com"> <FaInstagramSquare/> </Link>
                    <Link href="https://facebook.com"> <FaFacebookSquare/> </Link>
                </div>

            </div>
        </div>     
    );
}

export default Footer;