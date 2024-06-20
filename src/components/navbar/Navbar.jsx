import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import LoginBtn from './LoginBtn';

const Navbar = () => {
    return (
        <div className="flex justify-between items-center w-screen pl-1 md:pr-10 pr-4 bg-[#FFEAE3]">
            <div>
                <h1 className="logoName"> Mus!ngs </h1>
            </div>
            <div>
                <ul className="flex gap-6 items-center justify-center text-sm">
                    {/* <ThemeToggle /> */}
                    <Link href="/" className='md:flex hidden font-semibold hover:text-amber-700 focus:text-amber-700 text-[16px]'> 
                        <li> Homepage </li> </Link>
                    <Link href="/blog" className='md:flex hidden font-semibold hover:text-amber-700 text-[16px] '>
                        <li> Blog </li> </Link>
                    <Link href='/about' className='md:flex hidden font-semibold hover:text-amber-700 focus:text-amber-700 text-[16px]'> 
                        <li> About </li> </Link>
                    <LoginBtn />
                </ul>
            </div>
        </div>    
    );
}

export default Navbar;