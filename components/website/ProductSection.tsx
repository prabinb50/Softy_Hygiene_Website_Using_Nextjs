import React from 'react';
import { Heart, Shield, Leaf } from 'lucide-react';

// define product interface for type safety
interface Product {
    icon: React.ReactNode;
    title: string;
    description: string;
    bgColor: string;
    iconBg: string;
}

export default function ProductSection() {
    // products data array with types
    const products: Product[] = [
        {
            icon: <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500" />,
            title: "Feminine Care",
            description: "Our sanitary napkins are designed for maximum comfort and protection, using the finest materials for sensitive skin.",
            bgColor: "from-pink-50 to-pink-100",
            iconBg: "bg-pink-100",
        },
        {
            icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />,
            title: "Baby Care",
            description: "Our diapers and baby wipes are gentle on baby's skin while providing superior absorption and cleanliness.",
            bgColor: "from-blue-50 to-blue-100",
            iconBg: "bg-blue-100",
        },
        {
            icon: <Leaf className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />,
            title: "Wet Wipes & Tissues",
            description: "Our disposable wet wipes and tissue papers provide convenient cleanliness for all ages and situations.",
            bgColor: "from-green-50 to-green-100",
            iconBg: "bg-green-100",
        },
    ];

    return (
        <div className="w-full py-8 sm:py-16">
            <div className="mx-auto">
                {/* products section header */}
                <div className="w-full mb-8 sm:mb-12">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <div>
                            {/* subtitle */}
                            <p className="text-pink-500 font-medium text-base sm:text-lg">Our Products</p>

                            {/* main title with gradient */}
                            <h2 className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent p-2">
                                Comprehensive Hygiene Solutions
                            </h2>

                            {/* description */}
                            <p className="text-gray-600 text-sm sm:text-md max-w-3xl mx-auto">
                                We specialize in manufacturing a wide range of hygiene products
                                designed with care and precision for ultimate comfort and
                                protection.
                            </p>
                        </div>
                    </div>
                </div>

                {/* product cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl p-6 sm:p-8 bg-gradient-to-br ${product.bgColor} shadow-sm hover:shadow-md transition-shadow duration-300`}>
                            <div className={`${product.iconBg} w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto`}>
                                {product.icon}
                            </div>

                            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4 text-center">
                                {product.title}
                            </h3>

                            <p className="text-gray-600 text-sm sm:text-base text-center">
                                {product.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}