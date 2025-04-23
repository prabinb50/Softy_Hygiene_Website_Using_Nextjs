import { Baby, CircleCheckBig, Droplet, Layers, Shield } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaBoxTissue } from "react-icons/fa";
import { AnimatedCard, AnimatedText, AnimatedFade } from '@/components/website/AnimationComponents';

// Interface for hygiene product items
interface HygieneProductItem {
    icon: React.ElementType;
    title: string;
    description: string;
}

// Array of hygiene product information
const hygieneProducts: HygieneProductItem[] = [
    {
        icon: Droplet,
        title: "Premium Quality Wipes",
        description: "Soft and durable wet wipes for babies and everyday use.",
    },
    {
        icon: Baby,
        title: "Comfortable Baby Diapers",
        description: "Ensuring comfort and protection for your little ones.",
    },
    {
        icon: Shield,
        title: "Safe Sanitary Napkins",
        description:
            "High quality hygiene solutions with ultra-soft top sheet, and superior absorbency for maximum comfort.",
    },
    {
        icon: Layers,
        title: "Versatile Tissue Papers",
        description: "Daily hygiene essentials for homes and workplaces.",
    },
];

export default function HygieneSection() {
    return (
        <div className="w-full border-t border-purple-200 bg-purple-50 bg-opacity-50 relative"
            style={{
                backgroundImage: "linear-gradient(#e5e5e5 1px, transparent 1px), linear-gradient(90deg, #e5e5e5 1px, transparent 1px)",
                backgroundSize: "30px 30px"
            }}>
            <div className="w-11/12 mx-auto flex flex-col lg:flex-row gap-8 py-8 sm:py-12 md:py-15">
                {/* Left side - Product information section */}
                <div className="w-full lg:w-1/2 space-y-6 ">
                    <AnimatedText>
                        <p className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-transparent bg-clip-text font-semibold text-sm md:text-base">
                            Nepal&apos;s No.1 Hygiene Brand
                        </p>
                    </AnimatedText>
                    <div className="space-y-3 md:space-y-4">
                        <AnimatedText delay={0.1}>
                            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text py-1">
                                Innovating Hygiene Solutions
                            </h1>
                        </AnimatedText>
                        <AnimatedText delay={0.2}>
                            <p className="text-sm md:text-base opacity-90">
                                High-quality, safe, and hygienic products designed for the
                                well-being of women, children, and families.
                            </p>
                        </AnimatedText>
                    </div>

                    {/* Product items list */}
                    <div className="space-y-4 md:space-y-6 mt-6">
                        {hygieneProducts.map((productItem, index) => (
                            <AnimatedCard key={index} delay={0.3 + (index * 0.1)}>
                                <div className="flex gap-3">
                                    <div className="flex-shrink-0 mt-1">
                                        <productItem.icon size={24} className="text-purple-700" />
                                    </div>
                                    <div>
                                        <p className="text-base md:text-lg font-semibold">{productItem.title}</p>
                                        <p className="text-sm md:text-base opacity-70">{productItem.description}</p>
                                    </div>
                                </div>
                            </AnimatedCard>
                        ))}
                    </div>
                </div>

                {/* Right side - Image and branding elements */}
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end gap-8 md:gap-12 mt-8 lg:mt-0">
                    {/* Featured image with badge */}
                    <AnimatedFade delay={0.3}>
                        <div className="relative w-full max-w-lg mx-auto lg:max-w-none border rounded-xl">
                            <AnimatedCard delay={0.4} className="absolute -top-6 md:-top-8 left-4 md:left-6 bg-white rounded-lg p-2 md:p-4 flex items-center gap-2 shadow-md">
                                <CircleCheckBig
                                    size={20}
                                    strokeWidth={1.5}
                                    className="text-purple-700"
                                />
                                <p className="font-semibold text-xs md:text-sm whitespace-nowrap">
                                    Nepal&apos;s No.1 Hygiene Brand
                                </p>
                            </AnimatedCard>

                            <Image
                                className="rounded-xl w-full h-auto object-cover"
                                src={"/personal_hygienic_2.jpg"}
                                alt="Hygiene products"
                                width={1000}
                                height={1000}
                                priority
                            />
                        </div>
                    </AnimatedFade>

                    {/* Branding badge */}
                    <AnimatedCard delay={0.6} className="bg-white rounded-lg border p-3 md:p-4 flex items-center justify-end gap-2 shadow-lg self-end">
                        <FaBoxTissue size={18} className="text-purple-800" />
                        <p className="font-semibold text-xs md:text-sm whitespace-nowrap">
                            Nepal&apos;s No.1 Hygiene Brand
                        </p>
                    </AnimatedCard>
                </div>
            </div>
        </div>
    );
}