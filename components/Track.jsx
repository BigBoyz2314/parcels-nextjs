import React from 'react'
import Image from 'next/image'

const Track = () => {
  return (
    <div className='flex h-auto'>
        <Image
        src="/search.svg"
        alt="search icon"
        quality={100}
        width={24}
        height={24}
        priority={true}
        className="relative left-10 top-2px"
        /> 
        {/* <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3f922df036d148c8b1079a8b4ecdd578cb26d943b5deca1d7934307c42bebf4?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
        style={{position: 'relative', left: '40px', top: '2px'}}
        /> */}
        <input type='text' className="border border-[color:var(--black,#000)] bg-white gap-2 py-5 md:mr-16 md:w-96 ps-14 rounded-[52.131px] border-solid items-start text-black" placeholder='Tracking Shipment'>
        </input>
    </div>
  )
}

export default Track