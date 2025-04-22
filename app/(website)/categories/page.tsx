import BannerImage from '@/components/website/BannerImage'
import Categories from '@/components/website/Categories'
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
