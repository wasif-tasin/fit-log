import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../assets/logo.png'
import ActiveLinks from './activelinks';

const navbar = () => {

    const links = <>
        <li><ActiveLinks href='/Workouts'>Workouts</ActiveLinks></li>
        <li><ActiveLinks href='/MyPlans'>My Plans</ActiveLinks></li>
       
    </>

    return (
        <div className="navbar bg-black shadow-sm p-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link href='/'>
                <div className='flex gap-2 font-bold'>
                    <Image src={Logo} alt='Logo'></Image>
                    FITLOG
                </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end flex gap-4">
                <Link href={"/MyPlans"}>Plans</Link>
                <span>0</span>
                <Link href={"/MyPlans"}>Saved</Link>
                <span>0</span>
            </div>
        </div>
    );
};

export default navbar;