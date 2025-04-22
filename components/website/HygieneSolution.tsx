import { Baby, CircleCheckBig, Droplet, Layers, Shield } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaBoxTissue } from "react-icons/fa";

const items = [
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
        <div className=" w-full border-t border-purple-200 bg-purple-50 bg-opacity-50 relative "
            style={{
                backgroundImage: "linear-gradient(#e5e5e5 1px, transparent 1px), linear-gradient(90deg, #e5e5e5 1px, transparent 1px)",
                backgroundSize: "30px 30px"
            }}>
            <div className="w-11/12 mx-auto lg:flex gap-4 py-15 ">
                {/* Left side */}
                <div className="lg:w-1/2 space-y-8 ">
                    <p className=" bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-transparent bg-clip-text font-semibold">
                        Nepal's No.1 Hygiene Brand
                    </p>
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold bg-gradient-to-r  from-purple-600 to-pink-500 text-transparent bg-clip-text h-12">
                            Innovating Hygiene Solutions
                        </h1>
                        <p className="text-base opacity-90 ">
                            High-quality, safe, and hygienic products designed for the
                            well-being of women, children, and families.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {items.map((item, index) => (
                            <div key={index} className="flex gap-2">
                                <item.icon size={26} className="text-purple-700" />
                                <div>
                                    <p className="text-lg font-semibold ">{item.title}</p>
                                    <p className="text-base opacity-70">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right side */}
                <div className="lg:w-1/2 flex  flex-col items-end gap-12">
                    <div className="relative border rounded-xl">
                        <div className="absolute -top-8 bg-white rounded-lg p-4 flex items-center gap-2">
                            <CircleCheckBig
                                size={28}
                                strokeWidth={1.5}
                                className="text-purple-700"
                            />
                            <p className="font-semibold  text-sm">
                                No 1 in Personal hygienic
                            </p>
                        </div>

                        <Image
                            className="rounded-xl"
                            src={"/personal_hygienic_2.jpg"}
                            alt=""
                            width={1000}
                            height={1000}
                        />
                    </div>

                    <div className=" bg-white rounded-lg border p-4 flex items-center justify-end w-max gap-2 shadow-lg ">
                        <FaBoxTissue size={20} className="text-purple-800" />
                        <p className="font-semibold opacity-80 text-sm">Nepal's No.1 Hygiene Brand</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

