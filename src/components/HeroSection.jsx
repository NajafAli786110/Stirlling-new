import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";


export const HeroSection = () => {
    return (
        <section className='w-[90%] flex justify-between'>
            <div className='py-48 flex flex-col gap-8 w-[70%] items-center'>
                <div className='flex flex-col gap-4 items-center'>
                    <h1 className='regular-48'>Stirling Grady Photography</h1>
                    <hr className='w-1/2 h-[1px] bg-white' />
                    <p>Professional photographer traveling the United States.</p>
                </div>
                <Link href="/" className='px-20 py-4 border-[1px] border-white'>Book Now</Link>
            </div>
            <div className='flex flex-col items-center gap-8'>
                <hr className='w-[2px] h-[50%] bg-white' />
                <Link href="/">
                    <FaFacebookF className='text-2xl' />
                </Link>
                <Link href="/">
                    <FaInstagram className='text-2xl' />
                </Link>
                <Link href="/">
                    <FaTwitter className='text-2xl' />
                </Link>
                <hr className='w-[2px] h-[50%] bg-white' />
            </div>
        </section>
    )
}