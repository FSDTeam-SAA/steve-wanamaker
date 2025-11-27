"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

export default function PrivacyTermsTop({ title, description }: { title?: string; description?: string }) {

    const date = new Date();

    const currentPath = usePathname();

    console.log("Current path: ", currentPath)

    return (
        <section className="lg:pt-40 pt-32">
            <div className="container mx-auto px-2 lg:px-0">
                <div className="lg:flex justify-between items-center space-y-4 lg:space-y-0">
                    <div className="lg:space-y-4 space-y-1 max-w-2xl">
                        <h4 className='text-[#75C043] text-xs'>Current as of {" "}
                            {date.toLocaleDateString("en-GB", {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                            })}
                        </h4>
                        <h1 className='text-[#343A40] lg:text-4xl text-2xl font-semibold'>{title}</h1>
                        <p className='text-[#6C757D] lg:text-base text-sm'>{description}</p>
                    </div>
                    <div className="flex items-center gap-8">
                        <Link href="/privacy-policy" className={currentPath === "/privacy-policy" ? "border-b-2 border-[#75C043] text-[#75C043]" : ""}>Privacy Policy</Link>
                        <Link href="/terms-and-conditions" className={currentPath === "/terms-and-conditions" ? "border-b-2 border-[#75C043] text-[#75C043]" : ""}>Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
