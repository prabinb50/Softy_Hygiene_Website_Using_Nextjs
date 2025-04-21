"use client"

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const pathname = usePathname();

    // Function to check if the route is active
    const isActive = (path: string): boolean => {
        return pathname === path;
    };

    return (
        <div className="flex items-center justify-between px-4 bg-gradient-to-r from-purple-700 to-pink-600 sticky top-0 z-50 shadow-md">
            {/* first child - logo */}
            <Image src="/logo_1.png" alt="Logo" width={50} height={60} className='py-1' />

            {/* second child - certification logo */}
            <Image src="/logo_2.png" alt="Logo" width={60} height={60} />

            {/* third child - navigation links */}
            <div className="flex space-x-8">
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

            {/* fourth child - social icons */}
            <div className="flex items-center space-x-3">
                <Link href="#" className="bg-white rounded-full p-1">
                    <Image src="/facebook.png" alt="Facebook" width={24} height={24} className="rounded-full object-cover" />
                </Link>
                <Link href="#" className="bg-white rounded-full p-1">
                    <Image src="/messenger.png" alt="Messenger" width={24} height={24} className="rounded-full object-cover" />
                </Link>
                <Link href="#" className="bg-white rounded-full p-1">
                    <Image src="/instagram.jpg" alt="Instagram" width={24} height={24} className="rounded-full object-cover" />
                </Link>
                <Link href="#" className="bg-white rounded-full p-1">
                    <Image src="/whatsapp.png" alt="WhatsApp" width={24} height={24} className="rounded-full object-cover" />
                </Link>
                <Link href="#" className="bg-white rounded-full p-1">
                    <Image src="/google.jpeg" alt="Google" width={24} height={24} className="rounded-full object-cover" />
                </Link>
            </div>
        </div>
    )
}