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

export default function Categories() {
    // Array of category objects
    const categories = [
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

    return (
        <div className="py-15 w-11/12 mx-auto">
            {/* first child - heading section */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-transparent bg-clip-text p-1">Explore Our Categories</h1>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                    Discover the wide range of products we offer for your personal and professional hygiene needs.
                </p>
            </div>

            {/* second child - categories carousel */}
            <Carousel className=" ">
                <CarouselContent className="-ml-4">
                    {categories.map((category) => (
                        <CarouselItem key={category.id} className="pl-4 md:basis-1/2 lg:basis-1/4">
                            <div className=" ">
                                <Card className="rounded-md bg-pink-50 border-none cursor-pointer  group">
                                    <CardContent className="px-3  ">
                                        <div className=" bg-white rounded-md overflow-hidden shadow-md ">
                                            <Image
                                                src={category.image}
                                                alt={category.name}
                                                width={300}
                                                height={300}
                                                className="w-full h-64 object-cover overflow-hidden transition-transform hover:scale-108 duration-300 "
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="px-2 mt-4">
                                            <h3 className="text-lg text-gray-700 font-medium group-hover:translate-x-2 duration-200 ">{category.name}</h3>
                                            <Link href={`/categories/${category.slug}`} className="flex items-center text-gray-600 hover:text-purple-600 font-semibold text-sm group ">
                                                <span>View Category</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 mt-1.5 group-hover:translate-x-2 duration-200" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-pink-100 text-pink-500 border-none" />
                <CarouselNext className="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-pink-100 text-pink-500 border-none" />
            </Carousel>
        </div>
    );
}