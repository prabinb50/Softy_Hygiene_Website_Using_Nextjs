import BannerImage from '@/components/website/BannerImage'
import Categories from '@/components/website/Categories'
import Image from 'next/image'
import React from 'react'

export default function CategoriesPage() {
    return (
        <div>
            {/* First child: Banner image */}
            <BannerImage></BannerImage>

            {/* Second child: Categories section */}
            <Categories></Categories>
        </div>
    )
}
