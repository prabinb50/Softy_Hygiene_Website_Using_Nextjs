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
        <div className="w-full bg-pink-50 bg-opacity-50 relative py-15"
            style={{
                backgroundImage: "linear-gradient(#e5e5e5 1px, transparent 1px), linear-gradient(90deg, #e5e5e5 1px, transparent 1px)",
                backgroundSize: "30px 30px"
            }}>

            {/* Main container with subtle grid background */}
            <div className="w-11/12 mx-auto ">
                {/* Title section with gradient text */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-transparent bg-clip-text p-1">
                        Introducing our latest addition to the <br></br>Minime family - the Minime 360!
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Introducing our latest addition to the Minime family - the Minime 360!
                    </p>
                </div>

                {/* Cards container */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Map through the feature cards */}
                    {featureCards.map((card) => (
                        <div
                            key={card.id}
                            className="rounded-xl overflow-hidden relative shadow-sm"
                        >
                            {/* Card content with image */}
                            <Image
                                src={card.image}
                                alt="Minime Family Image"
                                width={500}
                                height={400}
                                className="w-full h-auto"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}