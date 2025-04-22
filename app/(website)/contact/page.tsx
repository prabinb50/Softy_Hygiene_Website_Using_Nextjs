import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import BannerImage from '@/components/website/BannerImage';

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Banner image */}
            <BannerImage />

            {/* Main content container  */}
            <div className='w-11/12 max-w-7xl mx-auto py-8 sm:py-12 md:py-15'>
                {/* Title section  */}
                <div className="text-center mb-8 md:mb-12">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-2 md:mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-transparent bg-clip-text p-1">
                        Get in touch with us
                    </h1>
                    <p className="text-gray-600 text-base md:text-lg px-4">
                        We are here to help you with any questions or concerns you may have.
                    </p>
                </div>

                {/* Contact information section */}
                <div className="bg-pink-100 rounded-xl pb-5 pt-4 shadow-sm">
                    {/* White content card */}
                    <div className='p-4 md:p-6 lg:p-8 border border-white rounded-lg bg-white mx-3 md:mx-4 lg:mx-6'>
                        {/* Contact Us heading */}
                        <h2 className="text-purple-700 text-base md:text-lg font-medium mb-1 md:mb-2">
                            Contact Us
                        </h2>

                        {/* Main heading  */}
                        <h3 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-2 md:mb-3">
                            Let us know how <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-transparent bg-clip-text">we can help</span>
                        </h3>

                        {/* Company description  */}
                        <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8 lg:mb-10 opacity-95">
                            SOFTY HYGIENE PVT.LTD. is one of the largest private level manufacturing of disposable wet wipes, Baby wipes, Baby Diaper, Sanitary Napkins and Tissue papers.
                        </p>

                        {/* Contact details grid  */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6 lg:gap-8 mb-6 md:mb-8">
                            {/* Office address */}
                            <div className='mb-2 sm:mb-0'>
                                <h4 className="text-gray-700 font-medium mb-1 text-base">Our office</h4>

                                {/* Office address with icon */}
                                <div className='flex items-center mt-2 md:mt-4'>
                                    {/* Icon container  */}
                                    <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 p-1.5 md:p-2 rounded-full mr-2 md:mr-3 flex-shrink-0">
                                        <MapPin className="h-2.5 w-2.5 md:h-3 md:w-3 text-white" />
                                    </div>
                                    {/* Text  */}
                                    <p className="text-sm text-gray-600 hover:bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 hover:text-transparent hover:bg-clip-text cursor-pointer">
                                        Maitighar, Kathmandu, Nepal (NP).
                                    </p>
                                </div>
                            </div>

                            {/* Email address */}
                            <div className='mb-2 sm:mb-0'>
                                <h4 className="text-gray-700 font-medium mb-1 text-base">Email</h4>

                                {/* Email address with icon */}
                                <div className='flex items-center mt-2 md:mt-4'>
                                    <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 p-1.5 md:p-2 rounded-full mr-2 md:mr-3 flex-shrink-0">
                                        <Mail className="h-2.5 w-2.5 md:h-3 md:w-3 text-white" />
                                    </div>
                                    <p className="text-sm text-gray-600 hover:bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 hover:text-transparent hover:bg-clip-text cursor-pointer truncate">
                                        softy.corporate@gmail.com
                                    </p>
                                </div>
                            </div>

                            {/* Phone number */}
                            <div>
                                <h4 className="text-gray-700 font-medium mb-1 text-base">Phone</h4>

                                {/* Phone number with icon */}
                                <div className='flex items-center mt-2 md:mt-4'>
                                    <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 p-1.5 md:p-2 rounded-full mr-2 md:mr-3 flex-shrink-0">
                                        <Phone className="h-2.5 w-2.5 md:h-3 md:w-3 text-white" />
                                    </div>
                                    <p className="text-sm text-gray-600 hover:bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 hover:text-transparent hover:bg-clip-text cursor-pointer">
                                        +01-5191390
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Google Maps Embed  */}
                        <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] relative rounded-lg overflow-hidden shadow-md">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.46059857356!2d85.3188!3d27.694700000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19022ef83443%3A0x89ce563619a5c76c!2sMaitighar%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1650308043697!5m2!1sen!2snp"
                                className="w-full h-full border-0"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Maps - Maitighar, Kathmandu"
                                aria-label="Office location map"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}