import React from 'react';
import {
    Droplet,
    Award,
    Truck,
    Flag,
    Phone,
    Target
} from 'lucide-react';

// Interface for advantage item props
interface AdvantageItemProps {
    icon: React.ReactNode;
    bgColor: string;
    title: string;
    description: string;
}

// Advantage Item Component
const AdvantageItem = ({ icon, bgColor, title, description }: AdvantageItemProps) => {
    return (
        <div className="bg-white bg-opacity-90 rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer">
            <div className={`${bgColor} w-14 h-14 rounded-lg flex items-center justify-center mb-5`}>
                {icon}
            </div>
            <h3 className="text-xl font-medium text-gray-700 mb-3">{title}</h3>
            <p className="text-gray-500">
                {description}
            </p>
        </div>
    );
};


export default function SoftyHygiene() {
    // Array of advantage items
    const advantageItems = [
        {
            id: 1,
            icon: <Droplet className="text-blue-500" size={28} />,
            bgColor: "bg-blue-100",
            title: "Innovative Hygiene Solutions",
            description: "Providing a diverse range of premium hygiene products, including wet wipes, tissues, and personal care items."
        },
        {
            id: 2,
            icon: <Award className="text-green-500" size={28} />,
            bgColor: "bg-green-100",
            title: "Uncompromising Quality",
            description: "Ensuring the highest standards in product quality to meet the hygiene needs of families and businesses."
        },
        {
            id: 3,
            icon: <Truck className="text-purple-500" size={28} />,
            bgColor: "bg-purple-100",
            title: "Nationwide Distribution",
            description: "Efficient and reliable delivery services that ensure timely availability of hygiene products across Nepal."
        },
        {
            id: 4,
            icon: <Flag className="text-orange-500" size={28} />,
            bgColor: "bg-orange-100",
            title: "Proudly Made in Nepal",
            description: "Softy Hygiene is a locally established brand, offering innovative and accessible hygiene products to every household."
        },
        {
            id: 5,
            icon: <Phone className="text-pink-500" size={28} />,
            bgColor: "bg-pink-100",
            title: "Dedicated Customer Support",
            description: "Reach us at +01-5191390 or softy.corporate@gmail.com for queries and feedback. Located in Maitighar, Kathmandu."
        },
        {
            id: 6,
            icon: <Target className="text-yellow-500" size={28} />,
            bgColor: "bg-yellow-100",
            title: "Committed to Growth",
            description: "Focused on enhancing customer satisfaction while expanding into new markets and setting industry benchmarks."
        }
    ];

    return (
        <div className="py-15 bg-gray-100 bg-opacity-50 relative"
            style={{
                backgroundImage: "linear-gradient(#e5e5e5 1px, transparent 1px), linear-gradient(90deg, #e5e5e5 1px, transparent 1px)",
                backgroundSize: "30px 30px"
            }}>

            {/* Header section */}
            <div className='w-11/12 mx-auto'>
                <div className="text-center mb-14 ">
                    <h2 className="text-4xl font-bold mb-3">
                        <span className="text-purple-700">Discover the </span>
                        <span className="text-pink-500">Softy Hygiene Advantage</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        Delivering innovative and high-quality hygiene solutions for every home and business.
                    </p>
                </div>

                {/* Advantages grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto ">
                    {advantageItems.map((item) => (
                        <AdvantageItem
                            key={item.id}
                            icon={item.icon}
                            bgColor={item.bgColor}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div></div>

        </div>
    );
}