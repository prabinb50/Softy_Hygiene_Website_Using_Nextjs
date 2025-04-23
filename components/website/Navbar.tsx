"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to check if the route is active
    const isActive = (path: string): boolean => {
        return pathname === path;
    };

    // Toggle menu function
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="flex items-center justify-between px-4 bg-gradient-to-r from-purple-700 to-pink-600 sticky top-0 z-50 shadow-md">
            {/* Logo - visible on all screen sizes */}
            <Link href={"/"} >
                <Image src="/logo_1.png" alt="Logo" width={50} height={60} className='py-1' />
            </Link>

            {/* Desktop navigation components */}
            <DesktopNav isActive={isActive} />

            {/* Mobile navigation components */}
            <MobileNav
                isMenuOpen={isMenuOpen}
                toggleMenu={toggleMenu}
                isActive={isActive}
            />
        </div>
    )
}