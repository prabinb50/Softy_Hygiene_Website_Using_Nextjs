import React from 'react';
import Image from 'next/image';
import { MapPin, Mail, Phone } from 'lucide-react';

export default function ContactPage() {
    return (
        <div>
            {/* First child: Banner image */}
            <div className="relative w-full h-72 mb-5">
                <Image
                    src="/banner.png"
                    alt="Banner"
                    layout="fill"
                    objectFit="cover"
                    priority
                />
            </div>

            {/* second child */}
            <div className='w-11/12 mx-auto py-15'>
                {/* Title section with gradient text */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-transparent bg-clip-text p-1">
                        Get in touch with us
                    </h1>
                    <p className="text-gray-600 text-lg">
                        We are here to help you with any questions or concerns you may have.
                    </p>
                </div>

                {/* Contact information section with light pink background */}
                <div className="bg-pink-100 rounded-xl  pb-5 pt-4">
                    <div className='p-5 border border-white rounded-lg bg-white ml-4 mr-4'>
                        {/* Contact Us heading */}
                        <h2 className="text-purple-700 text-lg font-medium mb-2">
                            Contact Us
                        </h2>

                        {/* Main heading with colored text */}
                        <h3 className="text-3xl font-semibold text-gray-700 mb-2">
                            Let us know how <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-transparent bg-clip-text">we can help</span>
                        </h3>

                        {/* Company description */}
                        <p className="text-gray-600 mb-10 opacity-95">
                            SOFTY HYGIENE PVT.LTD. is one of the largest private level manufacturing of disposable wet wipes, Baby wipes, Baby Diaper, Sanitary Napkins and Tissue papers.
                        </p>

                        {/* Contact details in three columns */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                            {/* Office address */}
                            <div className=''>
                                <h4 className="text-gray-700 font-medium mb-1">Our office</h4>

                                {/* Office address with icon */}
                                <div className='flex items-center mt-4'>
                                    <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 p-2 rounded-full mr-3">
                                        <MapPin className="h-3 w-3 text-white" />
                                    </div>
                                    <p className="text-gray-600 hover:bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 hover:text-transparent hover:bg-clip-text cursor-pointer">Maitighar, Kathmandu, Nepal (NP).</p>
                                </div>
                            </div>

                            {/* Email address */}
                            <div>
                                <h4 className="text-gray-700 font-medium mb-1">Email</h4>

                                {/* Email address with icon */}
                                <div className='flex items-center mt-4 '>
                                    <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 p-2 rounded-full mr-3">
                                        <Mail className="h-3 w-3 text-white" />
                                    </div>
                                    <p className="text-gray-600 hover:bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 hover:text-transparent hover:bg-clip-text cursor-pointer">softy.corporate@gmail.com</p>
                                </div>
                            </div>

                            {/* Phone number */}
                            <div>
                                <h4 className="text-gray-700 font-medium mb-1">Phone</h4>

                                {/* Phone number with icon */}
                                <div className='flex items-center mt-4 '>
                                    <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 p-2 rounded-full mr-3">
                                        <Phone className="h-3 w-3 text-white" />
                                    </div>
                                    <p className="text-gray-600 hover:bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 hover:text-transparent hover:bg-clip-text cursor-pointer">+01-5191390</p>
                                </div>
                            </div>
                        </div>

                        {/* Google Maps Embed */}
                        <div className="w-full h-[400px] relative rounded-lg overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.46059857356!2d85.3188!3d27.694700000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19022ef83443%3A0x89ce563619a5c76c!2sMaitighar%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1650308043697!5m2!1sen!2snp"
                                className="w-full h-full border-0"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Maps - Maitighar, Kathmandu"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}