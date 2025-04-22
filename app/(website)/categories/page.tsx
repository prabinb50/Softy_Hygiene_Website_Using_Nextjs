import Categories from '@/components/website/Categories'
import Image from 'next/image'
import React from 'react'

export default function CategoriesPage() {
    return (
        <div>
            {/* first child: banner image */}
            <div>
                <Image
                    src={"/banner.png"}
                    alt='Banner Image'
                    width={1000}
                    height={1000}
                    className='object-cover w-full '
                    loading='lazy'
                />
            </div>

            {/* second child: */}
            <Categories></Categories>
        </div>
    )
}
