import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.png";
import ActiveLinks from "@/Components/shared/ActiveLinks";

const navbar = () => {
    const links = (
        <>
            <li>
                <ActiveLinks href="/">Workouts</ActiveLinks>
            </li>
            <li>
                <ActiveLinks href="/my-plans">My Plans</ActiveLinks>
            </li>
        </>
    );

    return (
        <div className="navbar bg-black/50 p-0 shadow-sm  border-b border-[#212224] sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost p-0 lg:hidden">
                        <svg
                            aria-label="Menu"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {" "}
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />{" "}
                        </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-black/70 rounded-box z-1 mt-3 w-52 shadow"
                    >
                        {links}
                    </ul>
                </div>
                <Link href="/">
                    <div className="flex gap-2 font-bold font-(family-name:--font-oswald)">
                        <Image src={Logo} alt="Logo" className=" hidden md:flex"></Image>
                        FITLOG
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal">{links}</ul>
            </div>
            <div className="navbar-end flex gap-4 pr-5 lg:pr-0">
                <Link href={"/my-plans"}>Plans</Link>
                <span>0</span>
                <Link href={"/my-plans"}>Saved</Link>
                <span>0</span>
            </div>
        </div>
    );
};

export default navbar;
