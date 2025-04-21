"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

// HeroSection component to replicate the provided UI
export function HeroSection() {
    // Autoplay plugin for the carousel
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    );

    // Array of images for the carousel
    const images = [
        {
            src: "/hero_1.jpg",
            alt: "Family Image 1",
        },
        {
            src: "/hero_3.jpg",
            alt: "Family Image 2",
        },
        {
            src: "/hero_2.jpg",
            alt: "Family Image 3",
        },
    ];

    return (
        <div className="relative w-full ">
            {/* Carousel container */}
            <Carousel
                plugins={[plugin.current]}
                className="w-full"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent >
                    {/* Map through images to create carousel items */}
                    {images.map((image, index) => (
                        <CarouselItem key={index} >
                            <div className="relative ">
                                {/* Image */}
                                <div className="aspect-w-16 aspect-h-9">
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-full object-cover "
                                    />
                                </div>

                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {/* Previous and Next buttons */}
                <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-purple-500 text-white rounded-full p-2" />
                <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-500 text-white rounded-full p-2" />
            </Carousel>
        </div>
    );
}