import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, MessageCircle, Instagram, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
    // Current year for copyright
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full relative">
            {/* Gradient background with purple to pink to orange */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: 'linear-gradient(135deg, #6b21a8 0%, #db2777 50%, #f59e0b 100%)',
                    opacity: 0.95
                }}
            />

            {/* Curved overlay shape */}
            <div className="absolute top-0 left-0 right-0 h-40 z-10">
                <svg
                    viewBox="0 0 1440 200"
                    className="w-full"
                    style={{ fill: 'rgba(255,255,255,0.05)' }}
                >
                    <path d="M0,128L1440,32L1440,0L0,0Z"></path>
                </svg>
            </div>

            {/* Subtle particle overlays for the background */}
            <div
                className="absolute inset-0 z-5"
                style={{
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}
            />

            {/* Main content container */}
            <div className="relative z-20 w-11/12 mx-auto py-15">
                {/* Logo section */}
                <div className="flex justify-center mb-16">
                    <div className="w-28 h-28 rounded-full bg-purple-800 flex items-center justify-center p-1">
                        <div className="w-full h-full rounded-full bg-purple-800 flex items-center justify-center">
                            <Image
                                src="/logo_1.png"
                                alt="Softy Logo"
                                width={80}
                                height={80}
                            />
                        </div>
                    </div>
                </div>

                {/* Footer content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5 text-white">
                    {/* Column 1 - Company Description */}
                    <div className="text-center ">
                        <h3 className="text-base font-semibold  mb-4">
                            Your Trusted Partner in Personal Hygiene. You deserve a hygiene partner that works as hard as you do. Softy—quality you can trust, affordability you deserve.
                        </h3>

                        {/* Social Media Icons */}
                        <div className="flex justify-center md:justify-start space-x-4 mt-8">
                            <Link href="#" className="bg-white rounded-full p-2 hover:opacity-80 transition-opacity">
                                <Facebook size={24} className="text-blue-600" />
                            </Link>
                            <Link href="#" className="bg-white rounded-full p-2 hover:opacity-80 transition-opacity">
                                <MessageCircle size={24} className="text-blue-500" />
                            </Link>
                            <Link href="#" className="bg-white rounded-full p-2 hover:opacity-80 transition-opacity">
                                <Instagram size={24} className="text-pink-600" />
                            </Link>
                            <Link href="#" className="bg-white rounded-full p-2 hover:opacity-80 transition-opacity">
                                <FaWhatsapp size={24} className="text-green-500" />
                            </Link>
                            <Link href="#" className="bg-white rounded-full p-2 hover:opacity-80 transition-opacity">
                                <Phone size={24} className="text-yellow-500" />
                            </Link>
                        </div>
                    </div>

                    {/* Column 2 - Quick Links */}
                    <div className="text-center">
                        <h3 className="text-xl font-medium mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="#" className="flex  items-center justify-center hover:underline">
                                    Home
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="flex  items-center justify-center hover:underline">
                                    Categories
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="flex  items-center justify-center hover:underline">
                                    Products
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3 - Company Links */}
                    <div className="text-center">
                        <h3 className="text-xl font-medium mb-6">Company</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="#" className="flex  items-center justify-center hover:underline">
                                    About
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="flex  items-center justify-center hover:underline">
                                    Contact
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="flex  items-center justify-center hover:underline">
                                    Dealer Locator
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3 - Company description section */}
                    <div className=" text-white">
                        <p className="text-base font-semibold  leading-relaxed">
                            "As action speaks louder than words."We SOFTY HYGIENE PVT.LTD. is one of the largest private level manufacturing company of disposable wet wipes, Baby wipes ,Baby Diaper, Sanitary Napkins and Tissue paper. We ensure feminine care and baby care for their safety and comfort. So, we specially manufacture our product in women and Baby base.
                        </p>
                    </div>
                </div>

                {/* Bottom copyright section */}
                <div className="mt-16 pt-6 border-t border-white/20 text-white/70 flex flex-col md:flex-row justify-between items-center">
                    <div>
                        <p>© {currentYear} softy hygienic. All rights reserved.</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <p>Designed and Developed by Zylux IT Solution</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}