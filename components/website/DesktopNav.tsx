import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SocialIcons from './SocialIcons';

// Props interface for the DesktopNav component
interface DesktopNavProps {
    isActive: (path: string) => boolean;
}

export default function DesktopNav({ isActive }: DesktopNavProps) {
    return (
        <>
            {/* Certification logo - only visible on desktop */}
            <div className="hidden md:block">
                <Image src="/logo_2.png" alt="Logo" width={60} height={60} />
            </div>

            {/* Navigation links - only visible on desktop */}
            <div className="hidden lg:flex space-x-4 lg:space-x-8">
                <Link href="/" className={`text-white font-medium hover:border-b-2 hover:border-white hover:translate-x-2 duration-200 ${isActive('/') ? 'border-b-2 border-white' : ''}`}>
                    Home
                </Link>
                <Link href="/categories" className={`text-white font-medium hover:border-b-2 hover:border-white hover:translate-x-2 duration-200 ${isActive('/categories') ? 'border-b-2 border-white' : ''}`}>
                    Categories
                </Link>
                <Link href="/products" className={`text-white font-medium hover:border-b-2 hover:border-white hover:translate-x-2 duration-200 ${isActive('/products') ? 'border-b-2 border-white' : ''}`}>
                    Products
                </Link>
                <Link href="/dealer-locator" className={`text-white font-medium hover:border-b-2 hover:border-white hover:translate-x-2 duration-200 ${isActive('/dealer-locator') ? 'border-b-2 border-white' : ''}`}>
                    Dealer Locator
                </Link>
                <Link href="/about" className={`text-white font-medium hover:border-b-2 hover:border-white hover:translate-x-2 duration-200 ${isActive('/about') ? 'border-b-2 border-white' : ''}`}>
                    About
                </Link>
                <Link href="/contact" className={`text-white font-medium hover:border-b-2 hover:border-white hover:translate-x-2 duration-200 ${isActive('/contact') ? 'border-b-2 border-white' : ''}`}>
                    Contact
                </Link>
            </div>

            {/* Social icons - only visible on desktop */}
            <div className="hidden lg:block">
                <SocialIcons />
            </div>
        </>
    );
}