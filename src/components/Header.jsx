import Link from 'next/link'
import React from 'react'

export const Header = () => {
    return (
        <main className="flex items-center justify-between w-[90%] py-7">
            <Link href="/">
                <p>StirllingPhotography</p>
            </Link>
            <ul className="header-menu-list flex gap-4 items-center justify-center">
                <Link href="/services">
                    <li className="header-menu poppins-font">About</li>
                </Link>
                <Link href="/services">
                    <li className="header-menu poppins-font">Portfolio</li>
                </Link>
                <Link href="/services">
                    <li className="header-menu poppins-font">Services</li>
                </Link>
                <Link href="/contact">
                    <li className="header-menu poppins-font">Contact</li>
                </Link>
            </ul>
            <Link
                href="/contact"
                className="px-9 bg-white rounded-full text-black py-2"
            >
                Contact Us
            </Link>
        </main>
    )
}
