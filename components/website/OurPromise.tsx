import React from 'react'
import { AnimatedText, AnimatedCard, AnimatedFade } from '@/components/website/AnimationComponents';

export default function OurPromise() {
    // promises list array
    const promises: string[] = [
        'Dermatologically tested for sensitive skin',
        'Hypoallergenic materials for maximum safety',
        'Continuous innovation for better products',
        'Affordable quality for everyone'
    ];

    return (
        <div className="py-8 sm:py-16 px-0 sm:px-4">
            <AnimatedFade>
                <div className="mx-auto bg-pink-50 rounded-lg shadow-lg p-4 sm:p-8">
                    {/* header section */}
                    <div className="max-w-3xl">
                        <AnimatedText delay={0.1}>
                            <h3 className="text-purple-600 font-medium mb-2 text-base sm:text-lg">Our Promise</h3>
                        </AnimatedText>

                        <AnimatedText delay={0.2}>
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                                Committed to Your Health & Comfort
                            </h2>
                        </AnimatedText>

                        <AnimatedText delay={0.3}>
                            <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8">
                                At HYGIENE PVT.LTD., we understand the importance of reliable hygiene products in
                                your daily life. Our commitment goes beyond manufacturing – we are dedicated to
                                enhancing your quality of life through products that provide comfort, safety, and peace of mind.
                            </p>
                        </AnimatedText>

                        {/* promise list with bullet points */}
                        <AnimatedCard delay={0.4}>
                            <ul className="space-y-2 sm:space-y-3" aria-label="Our key promises">
                                {promises.map((promise, index) => (
                                    <li key={index} className="flex items-center space-x-3">
                                        <div className="flex-shrink-0">
                                            <div className="w-2 h-2 rounded-full bg-pink-500" aria-hidden="true"></div>
                                        </div>

                                        <span className="text-gray-600 text-sm sm:text-base">{promise}</span>
                                    </li>
                                ))}
                            </ul>
                        </AnimatedCard>
                    </div>
                </div>
            </AnimatedFade>
        </div>
    );
}