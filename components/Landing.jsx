"use client";
import { useEffect } from "react";
import * as React from "react";
import { useUser } from '@auth0/nextjs-auth0/client';
import Track from "./Track";
import PayAsYouGo from "./PayAsYouGo";
import Price from "./Price";
import Footer from "./Footer";
import Enterprise from "./Enterprise";
import Image from "next/image";
import Header from "./Header";
import { Stripe } from "@stripe/stripe-js";

function Landing(props) {

  const { user, error, isLoading } = useUser();
  return (
    
    <div className="bg-black flex flex-col items-stretch">
      <Image
        src="/Ellipse.svg"
        alt="Parcels.com logo"
        quality={100}
        width={0}
        height={0}
        priority={true}
        className="absolute h-full z-0 w-full object-cover mt-28 object-center max-md:hidden"
      />
      <Header/>
      
      
      <div className="text-white z-10 text-center text-3xl leading-10 self-center whitespace-nowrap mt-24 max-md:mt-10">
            On time shipping, every time
          </div>
          <div className="text-white z-10 text-center text-7xl font-semibold leading-[90px] self-center max-w-[928px] mt-11 max-md:max-w-full max-md:text-4xl max-md:leading-[53px] max-md:mt-10">
            Next gen deliveries, built for ecommerce
          </div>
          <a href="/pricing" className="items-stretch z-10 bg-lime-600 self-center flex gap-2 mt-16 px-6 py-5 rounded-[52.131px] max-md:mt-10 max-md:px-5 text-white text-center text-base font-medium leading-6 grow whitespace-nowrap">
              Start sending a package <span className="font-bold text-2xl/[20px]">&rarr;</span>
          </a>
          <div className="text-white text-2xl z-10 leading-10 self-center whitespace-nowrap mt-16 max-md:mt-10">
            Check out some features below!
          </div>
      
      <div className="self-center z-10 w-full max-w-[1144px] mt-14 px-5 max-md:max-w-full max-md:mt-10">
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