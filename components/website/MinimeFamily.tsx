import React from 'react';
import Image from 'next/image';

// Define the type for each feature card
interface FeatureCard {
    id: number;
    image: string;
}

export default function MinimeFamily() {
    // Cards data with all the product information
    const featureCards: FeatureCard[] = [
        {
            id: 1,
            image: "/family_1.png",
        },
        {
            id: 2,
            image: "/family_2.jpg",
        },
        {
            id: 3,
            image: "/family_3.jpg",
        },
    ];

    return (
        <div className="w-full bg-pink-50 bg-opacity-50 relative py-8 sm:py-12 md:py-15"
            style={{
                backgroundImage: "linear-gradient(#e5e5e5 1px, transparent 1px), linear-gradient(90deg, #e5e5e5 1px, transparent 1px)",
                backgroundSize: "30px 30px"
            }}>

            {/* Main container with subtle grid background */}
            <div className="w-[95%] sm:w-[90%] md:w-11/12 mx-auto">
                {/* Title section with gradient text */}
                <div className="text-center mb-6 sm:mb-8 md:mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-transparent bg-clip-text p-1">
                        <span className="block sm:hidden">Introducing Minime 360!</span>
                        <span className="hidden sm:block">Introducing our latest addition to the <br className="" />Minime family - the Minime 360!</span>
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg px-2">
                        Introducing our latest addition to the Minime family - the Minime 360!
                    </p>
                </div>

                {/* Cards container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {/* Map through the feature cards */}
                    {featureCards.map((card) => (
                        <div
                            key={card.id}
                            className="rounded-xl overflow-hidden relative shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            {/* Card content with image */}
                            <div className="aspect-w-4 aspect-h-3 w-full">
                                <Image
                                    src={card.image}
                                    alt="Minime Family Image"
                                    width={500}
                                    height={400}
                                    layout="responsive"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}