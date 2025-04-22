import Image from 'next/image'
import React from 'react'

export default function BannerImage() {
    return (
        <div className="relative w-full h-45 sm:h-48 md:h-56 lg:h-64 xl:h-72">
            <Image
                src="/banner.png"
                alt="Banner"
                fill
                sizes="100vw"
                priority
                quality={80}
                className="object-cover" // Ensures the image covers the area properly
            />
        </div>
    )
}
