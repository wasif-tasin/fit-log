"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.png";
import ActiveLinks from "@/components/shared/ActiveLinks";
import { useContext } from "react";
import { FitLogsContext } from "@/context/FitLogsContext";

const Navbar = () => {
    const context = useContext(FitLogsContext);
    if (!context) {
        throw new Error("Navbar must be used inside FitLogsProvider");
    }
    const { todayPlan, saveForLater } = context;

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
                    <div tabIndex={0} role="button" className="btn btn-ghost pr-1 lg:hidden">
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
            <div className="navbar-end gap-3 md:gap-4 pr-5 lg:pr-0">
                <Link href={"/my-plans"} className="flex gap-2 md:gap-3.5">Plans
                    <span className="flex min-w-6 items-center justify-center rounded-full bg-[#c3f801] px-2 py-1 text-xs font-bold text-black">
                        {todayPlan.length}
                    </span>
                </Link>
                <Link href={"/my-plans"} className="flex gap-2 md:gap-3.5">Saved
                    <span className="flex min-w-6 items-center justify-center rounded-full bg-[#c3f801] px-2 py-1 text-xs font-bold text-black">
                        {saveForLater.length}
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
