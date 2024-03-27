import React from 'react'
import imgMain from "../images/Rectangle-119.jpg"
import Image from 'next/image'

export default function About() {
  return (
    <div className='py-12 w-[90%] flex flex-col justify-center gap-6'>
      <h2 className='regular-42'>About</h2>
      <div className='flex items-center justify-between'>
        <div className='flex flex-col gap-4 w-[55%]'>
          <div className='flex gap-7 items-center'>
            <h4 className='w-[20%]'>Stirling Grady</h4>
            <hr className='w-full' />
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione doloremque aspernatur molestias sit culpa quis rem amet, ipsam numquam excepturi.</p>
        </div>
        <div className='flex gap-2 overflow-hidden'>
          <Image src={imgMain} width={275} height={185} />
          <Image src={imgMain} width={200} height={200} />
        </div>
      </div>
    </div>
  )
}
