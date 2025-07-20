import React from 'react'
import { FaIndustry } from "react-icons/fa";
import { MdOutlineVerified, MdEco } from "react-icons/md";
import { IoRibbonOutline } from "react-icons/io5";
import { AnimatedText, AnimatedCard, AnimatedFade } from '@/components/website/AnimationComponents';

// define process step interface for type safety
interface ProcessStep {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export default function OurProcess() {
    // process steps data with types
    const processSteps: ProcessStep[] = [
        {
            icon: <FaIndustry className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500 mx-auto" />,
            title: "Advanced Facilities",
            description: "Our manufacturing plants use cutting-edge technology to ensure precision and efficiency."
        },
        {
            icon: <MdOutlineVerified className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500 mx-auto" />,
            title: "Quality Control",
            description: "Rigorous testing at every stage ensures our products meet the highest safety standards."
        },
        {
            icon: <MdEco className="w-6 h-6 sm:w-8 sm:h-8 text-green-500 mx-auto" />,
            title: "Eco-Friendly",
            description: "We are committed to sustainable practices and environmentally responsible manufacturing."
        },
        {
            icon: <IoRibbonOutline className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500 mx-auto" />,
            title: "Certified",
            description: "Our products meet international quality and safety certifications for your peace of mind."
        }
    ];

    return (
        <div className="w-full py-8 sm:py-12">
            {/* our process section header */}
            <AnimatedFade>
                <div className="w-full mb-6 sm:mb-8">
                    <div className="mx-auto px-4 text-center">
                        <div>
                            {/* subtitle */}
                            <AnimatedText delay={0.1}>
                                <p className="text-pink-500 font-medium text-base sm:text-lg">Our Process</p>
                            </AnimatedText>

                            {/* main title with gradient */}
                            <AnimatedText delay={0.2}>
                                <h2 className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent p-2">
                                    Manufacturing Excellence
                                </h2>
                            </AnimatedText>

                            {/* description */}
                            <AnimatedText delay={0.3}>
                                <p className="text-gray-600 text-sm sm:text-md max-w-3xl mx-auto">
                                    Our state-of-the-art manufacturing facilities ensure the highest quality standards for all our hygiene products.
                                </p>
                            </AnimatedText>
                        </div>
                    </div>
                </div>
            </AnimatedFade>

            {/* process cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-4 sm:mt-8">
                {processSteps.map((step, index) => (
                    <AnimatedCard key={index} delay={0.4 + (index * 0.1)}>
                        <div
                            className="p-4 sm:p-6 rounded-lg bg-opacity-5 hover:bg-opacity-10 transition-all duration-300 shadow-sm hover:shadow-md"
                            style={{
                                background: `linear-gradient(to bottom right, ${index === 0 ? '#faf5ff' :
                                    index === 1 ? '#fdf2f8' :
                                        index === 2 ? '#f0fdf4' :
                                            '#fff7ed'
                                    }, white)`
                            }}
                        >
                            {step.icon}
                            <h3 className="text-lg sm:text-xl font-semibold mt-3 sm:mt-4 mb-2 text-center">{step.title}</h3>

                            <p className="text-gray-600 text-xs sm:text-sm text-center">{step.description}</p>
                        </div>
                    </AnimatedCard>
                ))}
            </div>
        </div>
    );
}