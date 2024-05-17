import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import LoginBtn from './LoginBtn';

const Navbar = () => {
    return (
        <div className="flex justify-between items-center  w-screen pl-1 md:pr-10 pr-4">
            {/* <div className='md:w-[150px] w-[80px]'>
                <Image src="/logo.png" alt="Logo" objectFit="contain" height={100} width={150} className='pt-1'/>    
            </div>  */}
            <div>
                <h1 className="logoName"> Mu$!ng$ </h1>
            </div>
            <div>
                <ul className="flex gap-6 items-center justify-center text-sm">
                    <ThemeToggle />
                    <Link href="/" className='md:flex hidden'> <li> Homepage </li> </Link>
                    <Link href='/' className='md:flex hidden'> <li> About </li> </Link>
                    <Link href='/' className='md:flex hidden'> <li> Contact </li> </Link>
                    <LoginBtn />
                </ul>
            </div>
        </div>    
    );
}

export default Navbar;