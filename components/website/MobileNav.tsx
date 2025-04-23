import React from 'react';
import Link from 'next/link';
import SocialIcons from './SocialIcons';

// Props interface for the MobileNav component
interface MobileNavProps {
    isMenuOpen: boolean;
    toggleMenu: () => void;
    isActive: (path: string) => boolean;
}

export default function MobileNav({ isMenuOpen, toggleMenu, isActive }: MobileNavProps) {
    return (
        <>
            {/* Hamburger menu button - only visible on mobile/tablet */}
            <div className="lg:hidden">
                <button onClick={toggleMenu} className="text-white p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
            </div>

            {/* Mobile menu - only shows when menu is open */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-gradient-to-r from-purple-700 to-pink-600 lg:hidden flex flex-col w-full shadow-lg">
                    <Link href="/" className={`text-white font-medium p-4 border-b border-purple-500 hover:bg-purple-800 ${isActive('/') ? 'bg-purple-900' : ''}`} onClick={toggleMenu}>
                        Home
                    </Link>
                    <Link href="/categories" className={`text-white font-medium p-4 border-b border-purple-500 hover:bg-purple-800 ${isActive('/categories') ? 'bg-purple-900' : ''}`} onClick={toggleMenu}>
                        Categories
                    </Link>
                    <Link href="/products" className={`text-white font-medium p-4 border-b border-purple-500 hover:bg-purple-800 ${isActive('/products') ? 'bg-purple-900' : ''}`} onClick={toggleMenu}>
                        Products
                    </Link>
                    <Link href="/dealer-locator" className={`text-white font-medium p-4 border-b border-purple-500 hover:bg-purple-800 ${isActive('/dealer-locator') ? 'bg-purple-900' : ''}`} onClick={toggleMenu}>
                        Dealer Locator
                    </Link>
                    <Link href="/about" className={`text-white font-medium p-4 border-b border-purple-500 hover:bg-purple-800 ${isActive('/about') ? 'bg-purple-900' : ''}`} onClick={toggleMenu}>
                        About
                    </Link>
                    <Link href="/contact" className={`text-white font-medium p-4 border-b border-purple-500 hover:bg-purple-800 ${isActive('/contact') ? 'bg-purple-900' : ''}`} onClick={toggleMenu}>
                        Contact
                    </Link>

                    {/* Contact information in mobile menu */}
                    <div className="p-4 border-b border-purple-500 text-white text-center">
                        <div className="mb-1">softy.corporate@gmail.com</div>
                        <div className="mb-1">@ Softy.com.np | 2024</div>
                        <div>+01-5191390 | +01-5191390 |</div>
                    </div>

                    {/* Social icons in mobile menu */}
                    <SocialIcons className="justify-center p-4 space-x-4" />
                </div>
            )}
        </>
    );
}