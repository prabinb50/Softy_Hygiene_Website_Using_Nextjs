"use client";
import React from "react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { AnimatedText, AnimatedCard, AnimatedFade } from '@/components/website/AnimationComponents';

export default function HearFrom() {
    return (
        <div className="w-full mx-auto mt-8">
            <AnimatedFade>
                <div className="p-4 sm:p-8 rounded-lg shadow-md text-base sm:text-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 items-center bg-gradient-to-br from-pink-100 to-blue-100 rounded-lg">
                        {/* image section with chairperson photo */}
                        <AnimatedCard delay={0.2}>
                            <div className="flex justify-center p-4">
                                <div className="relative w-full max-w-sm h-[300px] sm:h-[400px]">
                                    <Image
                                        src="/Prabin_joshi.jpg"
                                        alt="Chairperson Prabin Joshi"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 400px"
                                        className="rounded-lg shadow-md object-cover hover:scale-105 transition-all duration-500 cursor-pointer"
                                        priority
                                    />
                                </div>
                            </div>
                        </AnimatedCard>

                        {/* information section with chairperson message */}
                        <AnimatedCard delay={0.3}>
                            <div className="bg-pink-50 p-4 sm:p-8  text-gray-800 rounded-r-lg sm:rounded-r-lg text-sm w-full">
                                <AnimatedText delay={0.4}>
                                    <div className="flex items-start gap-2">
                                        <span className="text-pink-400 text-4xl sm:text-7xl font-serif leading-none" aria-hidden="true">
                                            <FaQuoteLeft />
                                        </span>

                                        <h2 className="bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent text-lg sm:text-xl font-medium tracking-wide">
                                            HEAR FROM OUR CHAIRPERSON
                                        </h2>
                                    </div>
                                </AnimatedText>

                                <AnimatedText delay={0.5}>
                                    <p className="text-gray-700 mt-4 leading-relaxed">
                                        At Softy Hygiene, our purpose goes beyond producing hygiene
                                        products—we strive to enrich lives through care, comfort, and
                                        trust. For over a decade, our journey has been driven by one
                                        simple vision: to make hygiene a reliable companion in every
                                        individual's life.
                                    </p>
                                </AnimatedText>

                                <AnimatedText delay={0.6}>
                                    <p className="text-gray-700 mt-4 leading-relaxed">
                                        As we continue to grow, we remain deeply grateful for the faith
                                        placed in us by our customers, partners, and communities. Their
                                        support inspires us to innovate responsibly and act with
                                        integrity.
                                    </p>
                                </AnimatedText>

                                <AnimatedText delay={0.7}>
                                    <p className="text-gray-700 mt-4 leading-relaxed">
                                        Looking forward, Softy is preparing to explore new
                                        frontiers—expanding our product offerings while staying rooted in
                                        what matters most: care, reliability, and a human touch.
                                    </p>
                                </AnimatedText>

                                {/* chairperson signature section */}
                                <AnimatedText delay={0.8}>
                                    <div className="mt-6 flex items-center">
                                        <div className="bg-gradient-to-br from-pink-500 to-blue-500 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center font-bold">
                                            PJ
                                        </div>

                                        <div className="ml-4">
                                            <p className="font-bold text-gray-800">Prabin Joshi</p>
                                            <p className="text-gray-600 text-sm">Chairman & CEO</p>
                                        </div>
                                    </div>
                                </AnimatedText>
                            </div>
                        </AnimatedCard>
                    </div>
                </div>
            </AnimatedFade>
        </div>
    );
}