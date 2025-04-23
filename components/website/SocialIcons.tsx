import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Props interface for the SocialIcons component
interface SocialIconsProps {
    className?: string; // Optional className for additional styling
}

export default function SocialIcons({ className = "" }: SocialIconsProps) {
    return (
        <div className={`flex items-center space-x-3 ${className}`}>
            {/* Facebook link */}
            <Link href="https://www.facebook.com/softyhygiene.np" className="bg-white rounded-full p-1">
                <Image src="/facebook.png" alt="Facebook" width={24} height={24} className="rounded-full object-cover" />
            </Link>

            {/* Messenger link */}
            <Link href="https://www.facebook.com/softyhygiene.np" className="bg-white rounded-full p-1">
                <Image src="/messenger.png" alt="Messenger" width={24} height={24} className="rounded-full object-cover" />
            </Link>

            {/* Instagram link */}
            <Link href="https://www.instagram.com/softy_hygiene/" className="bg-white rounded-full p-1">
                <Image src="/instagram.jpg" alt="Instagram" width={24} height={24} className="rounded-full object-cover" />
            </Link>

            {/* WhatsApp link */}
            <Link href="https://api.whatsapp.com/send?phone=%2B9779851073552&context=ARBWBVhZV2RY_YxdeetUKWZjFwrCFZ1dOOi0-rbnrJTgKcGBjPaEy25TpnbsJZI93S8Qg5H0n-7AJxZhS-h1Zf8lbaF6IijOyVydBC8tPUVl4JknHyJ8phWWYFx4C3DpwFnDDgJM7uc2Im99a_fHj8q4PQ&source=FB_Page&app=facebook&entry_point=page_cta" className="bg-white rounded-full p-1">
                <Image src="/whatsapp.png" alt="WhatsApp" width={24} height={24} className="rounded-full object-cover" />
            </Link>

            {/* Google Maps link */}
            <Link href="https://www.google.com/maps/place/Maitighar,+Kathmandu+44600/@27.6924773,85.3199905,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb19b1ce7d8c61:0x58bb28c5ee006d86!8m2!3d27.6919767!4d85.3229913!16s%2Fg%2F11b6b4bbpy?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D" className="bg-white rounded-full p-1">
                <Image src="/google.jpeg" alt="Google" width={24} height={24} className="rounded-full object-cover" />
            </Link>
        </div>
    );
}