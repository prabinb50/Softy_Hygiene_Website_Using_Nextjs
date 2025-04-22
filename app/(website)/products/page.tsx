import Image from 'next/image'
import React from 'react'

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
        <div>
            {/* First child: Banner image */}
            <div className="relative w-full h-72 ">
                <Image
                    src="/banner.png"
                    alt="Banner"
                    layout="fill"
                    objectFit="cover"
                    priority
                />
            </div>

            {/* second child: */}
            <div className="w-11/12 mx-auto py-15">
                {/* Title section with gradient text */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-transparent bg-clip-text p-1">
                        Explore Products
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Explore our wide range of products and find the perfect one for your needs
                    </p>
                </div>

                <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="rounded-md bg-gradient-to-r from-purple-100 via-pink-100 to-purple-100 border-none cursor-pointer p-4 group">
                            {/* Product image */}
                            <div className="relative mb-4 bg-white rounded-md overflow-hidden shadow-md text-center">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={300}
                                    height={300}
                                    className="w-full h-64 object-cover overflow-hidden transition-transform hover:scale-108 duration-300 "
                                    loading='lazy'
                                />
                            </div>
                            {/* Product category */}
                            <p className="text-sm text-purple-500 font-semibold uppercase mb-2">
                                {product.category}
                            </p>
                            {/* Product name */}
                            <h2 className="text-lg font-semibold  text-gray-700 group-hover:translate-x-2 duration-200">
                                {product.name}
                            </h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}