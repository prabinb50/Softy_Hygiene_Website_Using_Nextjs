import Categories from '@/components/website/Categories'
import Image from 'next/image'
import React from 'react'

export default function CategoriesPage() {
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


            {/* Second child: Categories section */}
            <Categories></Categories>
        </div>
    )
}
