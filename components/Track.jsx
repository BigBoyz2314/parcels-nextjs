import React from 'react'
import Image from 'next/image'

const Track = () => {
  return (
    <div className='flex'>
        <Image
        src="/search.svg"
        alt="search icon"
        quality={100}
        width={24}
        height={24}
        priority={true}
        className="relative left-10 top-2px"
        /> 
        <input type='text' className="border border-[color:var(--black,#000)] bg-white gap-2 py-5 md:mr-16 md:w-96 ms-0 md:ps-14 max-md:ps-14 rounded-[52.131px] border-solid items-start text-black" placeholder='Tracking Shipment'>
        </input>
    </div> 
  )
}

export default Track