import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    // <div className="text-white opacity-50 text-2xl leading-10 self-center whitespace-nowrap mt-20 max-md:mt-10">
    //     © COPYRIGHT PARCELS.COM
    //   </div>
    <div className="bg-neutral-900 flex flex-col justify-center items-center px-16 py-12 max-md:px-5">
      <div className="flex w-full max-w-[1067px] flex-col items-stretch mt-9 max-md:max-w-full">
        <div className="max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[31%] max-md:w-full max-md:ml-0">
            <a href="/">
          <Image
            src="/logo.svg"
            alt="Parcels.com logo"
            quality={100}
            width={0}
            height={0}
            priority={true}
            className="aspect-[2.85] object-contain object-center w-[171px] overflow-hidden shrink-0 max-w-full max-md:mt-10"

          />
          </a>
          </div>
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col items-stretch max-md:mt-10">
                <div className="text-white text-3xl font-medium">
                  Contact Us
                </div>
                <div className="items-stretch flex justify-between gap-2 mt-8">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e0e501cd44ea2846d35b85dbf65814b5d8761fb1a27c311f55662356d209792?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="justify-center text-white text-sm grow whitespace-nowrap">
                    26 Berwick Street, London. W1F 8RG
                  </div>
                </div>
                <div className="items-stretch flex mt-4">
                  <div className="items-stretch flex justify-between gap-2">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/82b0145f1eb269aaf39d80cad01b4163742161cf0ed7a92894f759e30949aaf8?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
                      className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="justify-center text-white text-sm grow whitespace-nowrap">
                      +44 (0) 20 313 76566
                    </div>
                  </div>
                  <div className="items-stretch flex justify-between gap-2 ms-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/166c87f782530dc50366e2c334bc09c6b928c715291cdbabb61d5e4f00e3d514?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
                      className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="justify-center text-white text-sm grow whitespace-nowrap">
                      hello@parcels.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[18%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col items-stretch max-md:mt-10">
                <div className="text-white text-3xl font-medium whitespace-nowrap">
                  Quick Links
                </div>
                <a href='/about' className="text-white text-sm mt-7">About</a>
                <a href='/pricing' className="text-white text-sm mt-1.5">Pricing</a>
                <a href='/api/auth/login' className="text-white text-sm mt-1.5">Login</a>
                <a href='/pricing' className="text-white text-sm mt-1.5">Signup</a>
                <a href='/about' className="text-white text-sm mt-1.5">FAQs</a>
              </div>
            </div>
          </div>
        </div>
        <hr className='mt-12' />
        <div className="text-neutral-500 text-right text-sm self-center whitespace-nowrap mt-8 max-md:mt-10">
          © 2019 Parcels.com | All Rights Reserved
        </div>
      </div>
    </div>
  )
}

export default Footer