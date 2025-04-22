import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

// Define an interface for the category objects
interface Category {
    id: number;
    name: string;
    image: string;
    slug: string;
}

// Array of category objects with product data
const categories: Category[] = [
    {
        id: 1,
        name: 'Diaper',
        image: '/diaper_1.png',
        slug: 'diaper'
    },
    {
        id: 2,
        name: 'Wipes',
        image: '/wipes_1.png',
        slug: 'wipes'
    },
    {
        id: 3,
        name: 'Sanitary Napkins',
        image: '/sanitary_napkin_1.png',
        slug: 'sanitary-napkins'
    },
    {
        id: 4,
        name: 'Tissue Papers',
        image: '/tissue_papers_1.png',
        slug: 'tissue-papers'
    }
];

export default function Categories() {
    return (
        <div className="py-8 sm:py-12 md:py-15 w-[92%] sm:w-11/12 mx-auto">
            {/* Heading section */}
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
                <h1 className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-transparent bg-clip-text p-1">
                    Explore Our Categories
                </h1>
                <p className="text-gray-600 text-base sm:text-lg max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto px-2">
                    Discover the wide range of products we offer for your personal and professional hygiene needs.
                </p>
            </div>

            {/* second child - categories carousel */}
            <Carousel className="relative">
                <CarouselContent className="-ml-2 sm:-ml-4">
                    {categories.map((category) => (
                        <CarouselItem
                            key={category.id}
                            className="pl-2 sm:pl-4 basis-full xs:basis-1/2 sm:basis-1/2 md:basis-1/2 lg:basis-1/4"
                        >
                            {/* Category card with hover effects */}
                            <Card className="rounded-md bg-gradient-to-r from-purple-100 via-pink-100 to-purple-100 border-none cursor-pointer group">
                                <CardContent className="p-2 sm:px-3 md:p-4">
                                    {/* Image container  */}
                                    <div className="bg-white rounded-md overflow-hidden shadow-md">
                                        <Image
                                            src={category.image}
                                            alt={category.name}
                                            width={300}
                                            height={300}
                                            className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform hover:scale-105 duration-300"
                                            loading="lazy"
                                        />
                                    </div>

                                    {/* Category title and link  */}
                                    <div className="px-1 sm:px-2 mt-3 sm:mt-4">
                                        <h3 className="text-base sm:text-lg text-gray-700 font-medium group-hover:translate-x-2 duration-200">
                                            {category.name}
                                        </h3>
                                        <Link
                                            href={`/categories/${category.slug}`}
                                            className="flex items-center text-gray-600 hover:text-purple-600 font-semibold text-xs sm:text-sm group"
                                        >
                                            <span>View Category</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 sm:h-5 sm:w-5 ml-1 mt-1 group-hover:translate-x-2 duration-200"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* Navigation buttons */}
                <CarouselPrevious className="absolute -left-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white border-none" />
                <CarouselNext className="absolute -right-0 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white border-none" />
            </Carousel>
        </div>
    );
}