"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatedText, AnimatedCard, AnimatedFade } from '@/components/website/AnimationComponents';

export default function Footer() {
    // Current year for copyright
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full relative">
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: 'linear-gradient(135deg, #6b21a8 0%, #db2777 50%, #f59e0b 100%)',
                    opacity: 0.95
                }}
            />

            {/* Curved overlay shape - adds visual interest to the top of the footer */}
            <div className="absolute top-0 left-0 right-0 h-20 sm:h-30 md:h-40 z-10">
                <svg
                    viewBox="0 0 1440 200"
                    className="w-full h-full"
                    style={{ fill: 'rgba(255,255,255,0.05)' }}
                >
                    <path d="M0,128L1440,32L1440,0L0,0Z"></path>
                </svg>
            </div>

            {/* Subtle particle overlays for the background - adds texture */}
            <div
                className="absolute inset-0 z-5"
                style={{
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}
            />

            {/* Main content container  */}
            <div className="relative z-20 w-[95%] sm:w-[90%] md:w-11/12 mx-auto py-8 sm:py-12 md:py-15">
                {/* Logo section  */}
                <AnimatedFade>
                    <div className="flex justify-center mb-8 sm:mb-12 md:mb-16">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-purple-800 flex items-center justify-center p-1">
                            <div className="w-full h-full rounded-full bg-purple-800 flex items-center justify-center">
                                <Image
                                    src="/logo_1.png"
                                    alt="Softy Logo"
                                    width={80}
                                    height={80}
                                    className="w-[60%] h-[60%] sm:w-[70%] sm:h-[70%] md:w-[80%] md:h-[80%] object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </AnimatedFade>

                {/* Footer content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-white">
                    {/* Column 1 - Company Description */}
                    <AnimatedCard delay={0.1}>
                        <div className="text-center sm:text-left">
                            <h3 className="text-sm sm:text-base font-semibold mb-4 px-4 sm:px-0">
                                Your Trusted Partner in Personal Hygiene. You deserve a hygiene partner that works as hard as you do. Softy—quality you can trust, affordability you deserve.
                            </h3>

                            {/* Social Media Icons  */}
                            <div className="flex justify-center sm:justify-start space-x-2 sm:space-x-4 mt-6 sm:mt-8">
                                {/* Facebook */}
                                <Link href="#" className="bg-white rounded-full p-1.5 sm:p-2 hover:opacity-80 transition-opacity">
                                    <Image src="/facebook.png" alt="Facebook" width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover" />
                                </Link>

                                {/* Messenger */}
                                <Link href="#" className="bg-white rounded-full p-1.5 sm:p-2 hover:opacity-80 transition-opacity">
                                    <Image src="/messenger.png" alt="Messenger" width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover" />
                                </Link>

                                {/* Instagram */}
                                <Link href="#" className="bg-white rounded-full p-1.5 sm:p-2 hover:opacity-80 transition-opacity">
                                    <Image src="/instagram.jpg" alt="Instagram" width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover" />
                                </Link>

                                {/* WhatsApp */}
                                <Link href="#" className="bg-white rounded-full p-1.5 sm:p-2 hover:opacity-80 transition-opacity">
                                    <Image src="/whatsapp.png" alt="WhatsApp" width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover" />
                                </Link>

                                {/* Google */}
                                <Link href="#" className="bg-white rounded-full p-1.5 sm:p-2 hover:opacity-80 transition-opacity">
                                    <Image src="/google.jpeg" alt="Google" width={24} height={24} className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover" />
                                </Link>
                            </div>
                        </div>
                    </AnimatedCard>

                    {/* Column 2 - Quick Links */}
                    <AnimatedCard delay={0.2}>
                        <div className="text-center sm:text-left">
                            <h3 className="text-lg sm:text-xl font-medium mb-4 sm:mb-6">Quick Links</h3>
                            <ul className="space-y-3 sm:space-y-4">
                                {/* Home Link */}
                                <li>
                                    <Link href="/" className="flex items-center justify-center sm:justify-start hover:underline">
                                        Home
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </Link>
                                </li>

                                {/* Categories Link */}
                                <li>
                                    <Link href="/categories" className="flex items-center justify-center sm:justify-start hover:underline">
                                        Categories
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </Link>
                                </li>

                                {/* Products Link */}
                                <li>
                                    <Link href="/products" className="flex items-center justify-center sm:justify-start hover:underline">
                                        Products
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </AnimatedCard>

                    {/* Column 3 - Company Links */}
                    <AnimatedCard delay={0.3}>
                        <div className="text-center sm:text-left">
                            <h3 className="text-lg sm:text-xl font-medium mb-4 sm:mb-6">Company</h3>
                            <ul className="space-y-3 sm:space-y-4">
                                {/* About Link */}
                                <li>
                                    <Link href="/about" className="flex items-center justify-center sm:justify-start hover:underline">
                                        About
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </Link>
                                </li>

                                {/* Contact Link */}
                                <li>
                                    <Link href="/contact" className="flex items-center justify-center sm:justify-start hover:underline">
                                        Contact
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </Link>
                                </li>

                                {/* Dealer Locator Link */}
                                <li>
                                    <Link href="/dealer-locator" className="flex items-center justify-center sm:justify-start hover:underline">
                                        Dealer Locator
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </AnimatedCard>

                    {/* Column 4 - Extended Company description */}
                    <AnimatedCard delay={0.4}>
                        <div className="text-white text-center sm:text-left">
                            <p className="text-sm sm:text-base font-semibold leading-relaxed px-4 sm:px-0">
                                &quot;As action speaks louder than words.&quot; We SOFTY HYGIENE PVT.LTD. is one of the largest private level manufacturing company of disposable wet wipes, Baby wipes, Baby Diaper, Sanitary Napkins and Tissue paper. We ensure feminine care and baby care for their safety and comfort. So, we specially manufacture our product in women and Baby base.
                            </p>
                        </div>
                    </AnimatedCard>
                </div>

                {/* Bottom copyright section*/}
                <AnimatedText delay={0.5}>
                    <div className="mt-10 sm:mt-12 md:mt-16 pt-4 sm:pt-6 border-t border-white/20 text-white flex flex-col md:flex-row justify-between items-center">
                        <div className="text-sm sm:text-base text-center md:text-left">
                            <p>© {currentYear} Softy Hygienic. All rights reserved.</p>
                        </div>
                        <div className="mt-3 md:mt-0 flex items-center space-x-1 sm:space-x-2 text-sm sm:text-base text-center">
                            <p>Designed and Developed by</p>
                            <Link href="https://github.com/prabinb50?tab=repositories" className="underline hover:text-pink-200 transition-colors">Prabin Joshi</Link>
                        </div>
                    </div>
                </AnimatedText>
            </div>
        </footer>
    );
}