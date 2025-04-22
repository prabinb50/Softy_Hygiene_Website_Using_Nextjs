"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

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
            {/* first child - logo */}
            <Image src="/logo_1.png" alt="Logo" width={50} height={60} className='py-1' />

            {/* second child - certification logo */}
            <div className="hidden md:block">
                <Image src="/logo_2.png" alt="Logo" width={60} height={60} />
            </div>

            {/* Hamburger menu icon for mobile */}
            <div className="lg:hidden">
                <button onClick={toggleMenu} className="text-white p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
            </div>

            {/* third child - navigation links (desktop) */}
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

            {/* fourth child - social icons (desktop) */}
            <div className="hidden lg:flex items-center space-x-3">
                <Link href="https://www.facebook.com/softyhygiene.np" className="bg-white rounded-full p-1">
                    <Image src="/facebook.png" alt="Facebook" width={24} height={24} className="rounded-full object-cover" />
                </Link>
                <Link href="https://www.facebook.com/softyhygiene.np" className="bg-white rounded-full p-1">
                    <Image src="/messenger.png" alt="Messenger" width={24} height={24} className="rounded-full object-cover" />
                </Link>
                <Link href="https://www.instagram.com/softy_hygiene/" className="bg-white rounded-full p-1">
                    <Image src="/instagram.jpg" alt="Instagram" width={24} height={24} className="rounded-full object-cover" />
                </Link>
                <Link href="https://api.whatsapp.com/send?phone=%2B9779851073552&context=ARBWBVhZV2RY_YxdeetUKWZjFwrCFZ1dOOi0-rbnrJTgKcGBjPaEy25TpnbsJZI93S8Qg5H0n-7AJxZhS-h1Zf8lbaF6IijOyVydBC8tPUVl4JknHyJ8phWWYFx4C3DpwFnDDgJM7uc2Im99a_fHj8q4PQ&source=FB_Page&app=facebook&entry_point=page_cta" className="bg-white rounded-full p-1">
                    <Image src="/whatsapp.png" alt="WhatsApp" width={24} height={24} className="rounded-full object-cover" />
                </Link>
                <Link href="https://www.google.com/maps/place/Maitighar,+Kathmandu+44600/@27.6924773,85.3199905,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb19b1ce7d8c61:0x58bb28c5ee006d86!8m2!3d27.6919767!4d85.3229913!16s%2Fg%2F11b6b4bbpy?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D" className="bg-white rounded-full p-1">
                    <Image src="/google.jpeg" alt="Google" width={24} height={24} className="rounded-full object-cover" />
                </Link>
            </div>

            {/* Mobile menu - only shows when menu is open */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-gradient-to-r from-purple-700 to-pink-600 md:hidden flex flex-col w-full shadow-lg">
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
                    <div className="flex justify-center p-4 space-x-4">
                        <Link href="https://www.facebook.com/softyhygiene.np" className="bg-white rounded-full p-1">
                            <Image src="/facebook.png" alt="Facebook" width={24} height={24} className="rounded-full object-cover" />
                        </Link>
                        <Link href="https://www.facebook.com/softyhygiene.np" className="bg-white rounded-full p-1">
                            <Image src="/messenger.png" alt="Messenger" width={24} height={24} className="rounded-full object-cover" />
                        </Link>
                        <Link href="https://www.instagram.com/softy_hygiene/" className="bg-white rounded-full p-1">
                            <Image src="/instagram.jpg" alt="Instagram" width={24} height={24} className="rounded-full object-cover" />
                        </Link>
                        <Link href="https://api.whatsapp.com/send?phone=%2B9779851073552&context=ARBWBVhZV2RY_YxdeetUKWZjFwrCFZ1dOOi0-rbnrJTgKcGBjPaEy25TpnbsJZI93S8Qg5H0n-7AJxZhS-h1Zf8lbaF6IijOyVydBC8tPUVl4JknHyJ8phWWYFx4C3DpwFnDDgJM7uc2Im99a_fHj8q4PQ&source=FB_Page&app=facebook&entry_point=page_cta" className="bg-white rounded-full p-1">
                            <Image src="/whatsapp.png" alt="WhatsApp" width={24} height={24} className="rounded-full object-cover" />
                        </Link>
                        <Link href="https://www.google.com/maps/place/Maitighar,+Kathmandu+44600/@27.6924773,85.3199905,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb19b1ce7d8c61:0x58bb28c5ee006d86!8m2!3d27.6919767!4d85.3229913!16s%2Fg%2F11b6b4bbpy?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D" className="bg-white rounded-full p-1">
                            <Image src="/google.jpeg" alt="Google" width={24} height={24} className="rounded-full object-cover" />
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}