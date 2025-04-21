import { CircleCheckBig, Eye, FileQuestion, Search } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaBoxTissue } from "react-icons/fa";

const items = [
    {
        icon: FileQuestion,
        bgColor: "bg-pink-50",
        title: "Why Softy?",
        description:
            "As action speaks louder than words.”We SOFTY HYGIENE PVT.LTD. is one of the largest private level manufacturing of disposable wet wipes, Baby wipes ,Baby Diaper, Sanitary Napkins and Tissue paper.",
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
        <div className="w-full py-15  bg-slate-50">
            <div className="w-11/12 mx-auto space-y-12">
                {/* Header section */}
                <div className="text-center space-y-1 xl:px-74 lg:px-52 md:px-32 sm:px-22 ">
                    <p className="md:text-4xl font-semibold text-2xl bg-gradient-to-r md:h-12 from-purple-600 to-pink-500 text-transparent bg-clip-text">
                        Why to Choose Softy Hygiene Pvt. Ltd
                    </p>
                    <p className="md:text-lg opacity-60 ">
                        We SOFTY HYGIENE PVT.LTD. are one of the largest private level
                        manufacturing of disposable wet wipes, Baby wipes ,Baby Diaper,
                        Sanitary Napkins and Tissue paper.
                    </p>
                </div>

                {/* Body section */}
                <div className="lg:flex items-center xl:gap-16 gap-8 space-y-16">
                    {/* left side */}
                    <div className="lg:w-1/2 flex  flex-col items-end gap-12">
                        <div className="relative border rounded-xl">
                            <div className="absolute -top-8 bg-yellow-100 rounded-lg  p-4 flex items-center gap-2">
                                <CircleCheckBig
                                    size={20}
                                    strokeWidth={1.5}
                                    className="text-purple-800"
                                />
                                <p className="font-semibold  text-sm">
                                    No 1 in Personal hygienic
                                </p>
                            </div>

                            <Image
                                className="rounded-xl"
                                src={"/personal_hygienic.jpg"}
                                alt=""
                                width={1000}
                                height={1000}
                            />

                            <div className=" absolute right-0 -bottom-8 bg-yellow-100  rounded-lg  p-4 flex items-center justify-end w-max gap-2">
                                <FaBoxTissue size={20} className="text-purple-700" />
                                <p className="font-semibold  text-sm">
                                    Nepal's No.1 Hygiene Brand
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* right side */}
                    <div className="lg:w-1/2 space-y-8">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className={`p-6 rounded-md  hover:shadow-lg duration-500 shadow-sm ${item.bgColor} border border-gray-100 flex gap-4 cursor-pointer`}
                            >
                                <item.icon className="lg:w-16 w-12 max-sm:w-36 h-8 opacity-80 " />

                                <div className="space-y-2">
                                    <p className="text-lg font-semibold opacity-80">{item.title} </p>
                                    <p className="opacity-60">{item.description} </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

