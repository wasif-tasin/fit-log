"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react';

interface IActiveLinksProps {
    href: string;
    children: ReactNode;
}

const ActiveLinks = ({ href, children }: IActiveLinksProps) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={`px-6 py-2 rounded-4xl ${isActive
                    ? "bg-[#1a2312FF] text-[#c2f800]"
                    : "text-white"
                }`}
        >
            {children}
        </Link>
    );
};

export default ActiveLinks;