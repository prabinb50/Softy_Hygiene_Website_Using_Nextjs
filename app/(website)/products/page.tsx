"use client";
import { AnimatedCard, AnimatedText } from '@/components/website/AnimationComponents';
import BannerImage from '@/components/website/BannerImage'
import Image from 'next/image'
import React, { useEffect } from 'react'

// Define an interface for product data
interface Product {
    id: number
    category: string
    name: string
    image: string
}

// Array of product data 
const products: Product[] = [
    {
        id: 1,
        category: 'WIPES',
        name: 'Premium Wipes',
        image: '/product_1.png',
    },
    {
        id: 2,
        category: 'WIPES',
        name: 'Make-Up Cleansing Wipes',
        image: '/product_2.png',
    },
    {
        id: 3,
        category: 'WIPES',
        name: 'Anti-Bacterial Wipes',
        image: '/product_3.png',
    },
    {
        id: 4,
        category: 'WIPES',
        name: 'Travel Wipes',
        image: '/product_4.png',
    },
    {
        id: 5,
        category: 'WIPES',
        name: 'Classic Baby Wipes',
        image: '/product_5.png',
    },
    {
        id: 6,
        category: 'TISSUE PAPERS',
        name: 'Facial Tissue',
        image: '/product_6.png',
    },
    {
        id: 7,
        category: 'TISSUE PAPERS',
        name: 'Hand Towel',
        image: '/product_7.png',
    },
    {
        id: 8,
        category: 'TISSUE PAPERS',
        name: 'Party Napkin',
        image: '/product_8.png',
    },
    {
        id: 9,
        category: 'SANITARY NAPKINS',
        name: 'Panty Liners (180mm)',
        image: '/product_9.png',
    },
]

export default function ProductPage() {
    return (
        <div className="w-full">
            {/* Banner image section */}
            <BannerImage />

            {/* Products content section */}
            <div className=" w-11/12 mx-auto py-10 sm:py-12 md:py-15">
                {/* Title section with gradient text - responsive font sizes */}
                <div className="text-center mb-8 sm:mb-10 md:mb-12">
                    <AnimatedText>
                        <h1 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-transparent bg-clip-text p-1">
                            Explore Products
                        </h1>
                    </AnimatedText>
                    <AnimatedText delay={0.2}>
                        <p className="text-gray-600 text-base sm:text-lg px-2">
                            Explore our wide range of products and find the perfect one for your needs
                        </p>
                    </AnimatedText>
                </div>

                {/* Products grid  */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                    {products.map((product, index) => (
                        <AnimatedCard key={product.id} delay={0.1 * index}>
                            <div
                                className="rounded-lg bg-gradient-to-r from-purple-100 via-pink-100 to-purple-100 border-none cursor-pointer p-3 sm:p-4 group transition-all duration-300 hover:shadow-lg">

                                {/* Product image container  */}
                                <div className="relative mb-3 sm:mb-4 bg-white rounded-md overflow-hidden shadow-md text-center">
                                    <div className="aspect-square relative">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                            className="object-contain p-2 sm:p-3 md:p-4 transition-transform hover:scale-105 duration-300"
                                            loading='lazy'
                                        />
                                    </div>
                                </div>

                                {/* Product category */}
                                <p className="text-xs sm:text-sm text-purple-500 font-semibold uppercase mb-1 sm:mb-2">
                                    {product.category}
                                </p>

                                {/* Product name */}
                                <h2 className="text-base sm:text-lg font-semibold text-gray-700 group-hover:translate-x-2 duration-200 truncate">
                                    {product.name}
                                </h2>
                            </div>
                        </AnimatedCard>
                    ))}
                </div>
            </div>
        </div>
    )
}