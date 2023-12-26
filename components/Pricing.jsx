"use client"
import * as React from "react";
import PayAsYouGo from "./PayAsYouGo";
import Price from "./Price";
import Footer from "./Footer";
import Enterprise from "./Enterprise";
import { useUser } from "@auth0/nextjs-auth0/client";
import Header from "./Header";

function Pricing() {

  const { user, error, isLoading } = useUser();

  return (
    <div className="bg-black flex flex-col items-stretch">
      <div className="bg-neutral-900 flex w-full flex-col ">
        {/* {(() => {
        if (user) {
          return (
            <div className="self-stretch flex w-full items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
            <a href="/">
            <Image
                  src="/logo.svg"
                  alt="Parcels.com logo"
                  quality={50}
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
          )
        } else {
          return (
            <div className="self-stretch flex w-full items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
            <a href="/">
            <Image
                  src="/logo.svg"
                  alt="Parcels.com logo"
                  quality={50}
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
              <a href="/#" className="items-stretch bg-lime-600 flex justify-between gap-2 px-10 py-5 rounded-[52.131px] max-md:px-5">
                <div className="text-white text-center text-base font-bold leading-6 grow whitespace-nowrap">
                  SIGN UP <span className="font-bold text-2xl/[0px]">&rarr;</span>
                </div>
              </a>
            </div>
          </div>
          )
        }})()} */}

        <Header/>

          <div className="text-white text-center text-3xl leading-10 self-center mt-32 max-md:max-w-full max-md:mt-10">
            Pick your plan. Change whenever you want.
          </div>
          <div className="text-white text-center text-7xl font-semibold leading-[90px] self-center mt-11 max-md:max-w-full max-md:text-4xl max-md:mt-10">
            Choose The Best Price
          </div>
          <div className="md:px-32 px-16">
          <PayAsYouGo/>
          

          <Price/>

{/* <div className="md:px-32 mb-5"> */}
          <Enterprise/>
          {/* </div> */}
          </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Pricing;
