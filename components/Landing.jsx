"use client";
import * as React from "react";
import { useUser } from '@auth0/nextjs-auth0/client';
import Track from "./Track";
import PayAsYouGo from "./PayAsYouGo";
import Price from "./Price";
import Footer from "./Footer";
import Enterprise from "./Enterprise";
import Image from "next/image";

function Landing(props) {

  const { user, error, isLoading } = useUser();

  return (
    <div className="bg-black flex flex-col items-stretch pb-12">
      {(() => {
        if (user) {
          return (
            <div className="flex-col justify-end items-center overflow-hidden relative flex min-h-[741px] w-full pt-6 pb-12 px-16 max-md:max-w-full max-md:px-5">
              <Image
                src="/Ellipse.svg"
                alt="Parcels.com logo"
                quality={100}
                width={0}
                height={0}
                priority={true}
                className="absolute h-full w-full object-cover object-center inset-0"
              />
                <div className="relative flex w-full max-w-[1230px] flex-col mb-14 max-md:max-w-full max-md:mb-10">
                  <div className="self-stretch flex w-full items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                    <a href="/">
                    <Image
                    src="/logo.svg"
                    alt="Parcels.com logo"
                    quality={100}
                    width={0}
                    height={0}
                    priority={true}
                    className="aspect-[1.78] object-contain object-center w-[107px] overflow-hidden shrink-0 max-w-full"
                    />  
                    </a>
                    <Track/>
                    <div className="flex items-stretch justify-between gap-5 self-start mt-5 max-md:max-w-full max-md:flex-wrap">
                    <a href="/about" className="text-white text-right text-lg leading-7 self-center my-auto">
                      ABOUT
                    </a>
                      <a href="#" className="text-white text-lg leading-7 self-center my-auto">
                        { user.name }
                      </a>
                      <a href="/api/auth/logout" className="text-white text-lg leading-7 self-center my-auto">
                        LOGOUT
                      </a>
                    </div>
                  </div>
                  <div className="text-white text-center text-3xl leading-10 self-center whitespace-nowrap mt-24 max-md:mt-10">
                    On time shipping, every time
                  </div>
                  <div className="text-white text-center text-7xl font-semibold leading-[90px] self-center max-w-[928px] mt-11 max-md:max-w-full max-md:text-4xl max-md:leading-[53px] max-md:mt-10">
                    Next gen deliveries, built for ecommerce
                  </div>
                  <a href="/pricing" className="items-stretch bg-lime-600 self-center flex gap-2 mt-16 px-6 py-5 rounded-[52.131px] max-md:mt-10 max-md:px-5 text-white text-center text-base font-medium leading-6 grow whitespace-nowrap">
                      Start sending a package <span className="font-bold text-2xl/[0px]">&rarr;</span>
                  </a>
                  <div className="text-white text-2xl leading-10 self-center whitespace-nowrap mt-16 max-md:mt-10">
                    Check out some features below!
                  </div>
                </div>
              </div>
            )
          } else {
          return (
            <div className="flex-col justify-end items-center overflow-hidden relative flex min-h-[741px] w-full pt-6 pb-12 px-16 max-md:max-w-full max-md:px-5">
              <Image
                src="/Ellipse.svg"
                alt="Parcels.com logo"
                quality={100}
                width={0}
                height={0}
                priority={true}
                className="absolute h-full w-full object-cover object-center inset-0"
              />
        <div className="relative flex w-full max-w-[1230px] flex-col mb-14 max-md:max-w-full max-md:mb-10">
          <div className="self-stretch flex w-full items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
            <a href="/">
            <Image
                  src="/logo.svg"
                  alt="Parcels.com logo"
                  quality={100}
                  width={0}
                  height={0}
                  priority={true}
                  className="aspect-[1.78] object-contain object-center w-[107px] overflow-hidden shrink-0 max-w-full"
            />
            </a>
            <div className="flex items-stretch justify-between gap-5 self-start max-md:max-w-full max-md:flex-wrap">
              <Track/>
              
              <a href="/about" className="text-white text-right text-lg leading-7 self-center my-auto">
                ABOUT
              </a>
              <a href="/api/auth/login" className="text-white text-lg leading-7 self-center my-auto">
                LOGIN
              </a>
              <a href="/pricing" className="items-stretch bg-lime-600 flex justify-between gap-2 px-10 py-5 rounded-[52.131px] max-md:px-5">
                <div className="text-white text-center text-base font-bold leading-6 grow whitespace-nowrap">
                  SIGN UP <span className="font-bold text-2xl/[0px]">&rarr;</span>
                </div>
              </a>
            </div>
          </div>
          <div className="text-white text-center text-3xl leading-10 self-center whitespace-nowrap mt-24 max-md:mt-10">
            On time shipping, every time
          </div>
          <div className="text-white text-center text-7xl font-semibold leading-[90px] self-center max-w-[928px] mt-11 max-md:max-w-full max-md:text-4xl max-md:leading-[53px] max-md:mt-10">
            Next gen deliveries, built for ecommerce
          </div>
          <a href="/pricing" className="items-stretch bg-lime-600 self-center flex gap-2 mt-16 px-6 py-5 rounded-[52.131px] max-md:mt-10 max-md:px-5 text-white text-center text-base font-medium leading-6 grow whitespace-nowrap">
              Start sending a package <span className="font-bold text-2xl/[0px]">&rarr;</span>
          </a>
          <div className="text-white text-2xl leading-10 self-center whitespace-nowrap mt-16 max-md:mt-10">
            Check out some features below!
          </div>
        </div>
      </div>
                    )
                  }
              })()}
      
      <div className="self-center w-full max-w-[1144px] mt-14 px-5 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <div className="shadow-lg bg-neutral-900 flex grow flex-col w-full px-9 py-12 rounded-3xl items-start max-md:mt-5 max-md:px-5">
              <Image
                src="/landing1.svg"
                alt="Door to Door"
                quality={50}
                width={0}
                height={0}
                priority={true}
                className="aspect-square object-contain object-center w-16 overflow-hidden max-w-full mt-1"
                />
              <div className="self-stretch text-white text-xl font-semibold leading-6 mt-5">
                Door-to-door <br />
                courier service
              </div>
              <div className="text-white text-sm leading-5 self-stretch mt-4 mb-1">
                Pick and drop items like documents, cloths, and electronics
                across UAE.
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="shadow-lg bg-neutral-900 flex grow flex-col w-full px-9 py-12 rounded-3xl items-start max-md:mt-5 max-md:px-5">
            <Image
                src="/landing2.svg"
                alt="Door to Door"
                quality={50}
                width={0}
                height={0}
                priority={true}
                className="aspect-square object-contain object-center w-16 overflow-hidden max-w-full mt-1"
                />
              <div className="self-stretch text-white text-xl font-semibold leading-6 mt-5">
                Marketplace shipping integration
              </div>
              <div className="text-white text-sm leading-5 self-stretch mt-4 mb-1">
                Connect with eBay, Amazon & every UK marketplace seamlessly for
                no fuss shipping
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="shadow-lg bg-neutral-900 flex grow flex-col w-full px-9 py-12 rounded-3xl items-start max-md:mt-5 max-md:px-5">
            <Image
                src="/landing3.svg"
                alt="Door to Door"
                quality={50}
                width={0}
                height={0}
                priority={true}
                className="aspect-square object-contain object-center w-16 overflow-hidden max-w-full mt-1"
                />
              <div className="justify-center self-stretch text-white text-xl font-semibold leading-6 whitespace-nowrap mt-5">
                Digital everything.
              </div>
              <div className="text-white text-sm leading-5 self-stretch mt-4 mb-1">
                Capture delivery proof, share real-time tracking, and delight
                customers at every step.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-neutral-900 flex w-full flex-col justify-center items-center mt-24 px-16 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="flex w-full max-w-[1074px] flex-col items-center mt-9 mb-11 max-md:max-w-full max-md:mb-10">
          <div className="text-white text-center text-3xl leading-10 max-md:max-w-full">
            Pick your plan. Change whenever you want.
          </div>
          <div className="text-white text-center text-7xl font-semibold leading-[90px] mt-11 max-md:max-w-full max-md:text-4xl max-md:mt-10">
            Choose The Best Price
          </div>
          <PayAsYouGo/>
          <Price/>
          <Enterprise/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}


export default Landing;