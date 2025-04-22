import { CircleCheckBig, Eye, FileQuestion, Search } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaBoxTissue } from "react-icons/fa";

// Interface for feature card items
interface FeatureCardItem {
    icon: React.ElementType;
    bgColor: string;
    title: string;
    description: string;
}

// Feature card data collection
const featureCardItems: FeatureCardItem[] = [
    {
        icon: FileQuestion,
        bgColor: "bg-pink-50",
        title: "Why Softy?",
        description:
            "As action speaks louder than words. We SOFTY HYGIENE PVT.LTD. is one of the largest private level manufacturing of disposable wet wipes, Baby wipes ,Baby Diaper, Sanitary Napkins and Tissue paper.",
    },
    {
        icon: Search,
        bgColor: "bg-blue-50",
        title: "Our Vision",
        description:
            "To become one of the most liable, respectable manufacturing company based on wet tissue, Sanitary Napkins, Baby Diaper and tissue paper and expand our business all over Nepal and Global Market too.",
    },
    {
        icon: Eye,
        bgColor: "bg-green-50",
        title: "Our Mission",
        description:
            "Our mission is to bring joy, happiness and inspiration to baby ,and all people all over Nepal and Global market by providing our products to ensure you with best experience with us.",
    },
];

export default function ImpOfHygieneSolution() {
    return (
        <div className="w-full py-8 sm:py-12 md:py-15 bg-slate-50">
            <div className="w-[90%] md:w-[85%] lg:w-[90%] max-w-7xl mx-auto space-y-8 md:space-y-12">
                {/* Header section */}
                <div className="text-center ">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-2 md:mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-transparent bg-clip-text p-1 px-4">
                        Why to Choose Softy Hygiene Pvt. Ltd
                    </h1>
                    <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
                        We SOFTY HYGIENE PVT.LTD. are one of the largest private level
                        manufacturing of disposable wet wipes, Baby wipes, Baby Diaper,
                        Sanitary Napkins and Tissue paper.
                    </p>
                </div>

                {/* Body section */}
                <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 xl:gap-16">
                    {/* Left side - Image with overlapping badges */}
                    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end gap-8 md:gap-12 mb-10 lg:mb-0 mt-5 lg:mt-0">
                        <div className="relative w-full max-w-lg border rounded-xl">
                            <div className="absolute -top-8 left-0 bg-yellow-100 rounded-lg p-3 md:p-4 flex items-center gap-2 z-10 shadow-sm">
                                <CircleCheckBig
                                    size={16}
                                    strokeWidth={1.5}
                                    className="text-purple-800 min-w-[16px] sm:min-w-[20px]"
                                />
                                <p className="font-semibold text-xs sm:text-sm whitespace-nowrap">
                                    No 1 in Personal hygienic
                                </p>
                            </div>

                            <Image
                                className="rounded-xl w-full h-auto"
                                src={"/personal_hygienic.jpg"}
                                alt="Personal hygienic products"
                                width={600}
                                height={600}
                                priority
                            />

                            <div className="absolute right-0 -bottom-8 bg-yellow-100 rounded-lg p-3 md:p-4 flex items-center justify-end w-max gap-2 z-10 shadow-sm">
                                <FaBoxTissue size={16} className="text-purple-700 min-w-[16px] sm:min-w-[20px]" />
                                <p className="font-semibold text-xs sm:text-sm whitespace-nowrap">
                                    Nepal&apos;s No.1 Hygiene Brand
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Feature cards */}
                    <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
                        {featureCardItems.map((featureItem, index) => (
                            <div
                                key={index}
                                className={`p-4 sm:p-6 rounded-md hover:shadow-lg transition-shadow duration-300 shadow-sm ${featureItem.bgColor} border border-gray-100 flex gap-3 sm:gap-4 cursor-pointer`}
                            >
                                <div className="min-w-[24px] sm:min-w-[32px] md:min-w-[48px] flex items-start pt-1">
                                    <featureItem.icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 opacity-80" />
                                </div>

                                <div className="space-y-1 sm:space-y-2">
                                    <p className="text-base sm:text-lg font-semibold opacity-80">{featureItem.title}</p>
                                    <p className="text-sm sm:text-base opacity-60">{featureItem.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
