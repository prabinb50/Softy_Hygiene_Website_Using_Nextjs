import Image from 'next/image'
import React from 'react'

export default function BannerImage() {
    return (
        <div className="relative w-full h-72 ">
            <Image
                src="/banner.png"
                alt="Banner"
                layout="fill"
                objectFit="cover"
                priority
            />
        </div>
    )
}
