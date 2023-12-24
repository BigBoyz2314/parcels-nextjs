"use client"
import * as React from "react";
import Track from "./Track";
import Footer from "./Footer";
import Image from "next/image";
import { useUser } from '@auth0/nextjs-auth0/client';

function About(props) {

  const { user, error, isLoading } = useUser();

  return (
    <div className="bg-black flex flex-col pt-6 pb-12">
      <Image
        src="/Ellipse.svg"
        alt="Parcels.com logo"
        quality={100}
        width={0}
        height={0}
        priority={true}
        className="absolute h-full w-full object-cover object-center inset-0"
      />

      {(() => {
        if (user) {
          return (  
            <div className="self-center z-10 flex w-full max-w-[1230px] items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
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
            <div className="flex items-stretch justify-between gap-5 px-5 mt-5 self-start max-md:max-w-full max-md:flex-wrap">
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
        }
        else {
          return (
          <div className="self-center z-10 flex w-full max-w-[1230px] items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
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
          <div className="flex items-stretch justify-between gap-5 px-5 self-start max-md:max-w-full max-md:flex-wrap">
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

        )
        }
          
          
        })()}
      
      <div className="text-white text-center text-3xl self-center whitespace-nowrap mt-32 max-md:mt-10 z-10">
        Our Mission
      </div>
      <div className="text-gray-200 text-center text-7xl font-semibold leading-[90px] z-10 self-center w-[1211px] mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
        Parcels enables the world to ship the best products.
      </div>
      <div className="text-gray-200 text-center text-2xl leading-7 self-center max-w-[647px] z-10 mt-9 max-md:max-w-full">
        Parcel’s Frontend Cloud provides the developer experience and
        infrastructure to <span className="font-bold">build</span>,{" "}
        <span className="font-bold">scale</span>, and{" "}
        <span className="font-bold">secure</span> a faster, more personalized
        Web.
      </div>
      <div className="self-center flex justify-between gap-5 mt-36 px-5 items-start max-md:max-w-full max-md:flex-wrap max-md:mt-10">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8e35adcd58eec0ccebf9dbd43af6ecd834f39bdc574f02974383f0e8b07f159?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
          className="aspect-[0.95] object-contain object-center w-10 justify-center items-center overflow-hidden shrink-0 max-w-full mt-1"
        />
        <div className="flex grow basis-[0%] flex-col items-stretch">
          <div className="text-gray-200 text-2xl font-bold leading-8 tracking-tight">
            Easy
          </div>
          <div className="text-neutral-400 text-base leading-6 mt-2">
            Building and deploying should be as easy as a single tap.
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1ebadb3c7d978f3bb8a5108407eb9aaf8917f49e505f8f0a5e46d42d4283730?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
          className="aspect-[0.95] object-contain object-center w-10 justify-center items-center overflow-hidden shrink-0 max-w-full mt-1"
        />
        <div className="flex grow basis-[0%] flex-col items-stretch">
          <div className="text-gray-200 text-2xl font-bold leading-8 tracking-tight">
            Universal
          </div>
          <div className="text-neutral-400 text-base leading-6 mt-3.5">
            To connect the world, sites
            <br />
            should be fast from everywhere.
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1bb5cc201506434594ba611d103784e92cb0056a2fbe4019aa369aa7ae4e1a3d?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
          className="aspect-[0.95] object-contain object-center w-10 justify-center items-center overflow-hidden shrink-0 max-w-full mt-1"
        />
        <div className="flex grow basis-[0%] flex-col items-stretch">
          <div className="text-gray-200 text-2xl font-bold leading-8 tracking-tight">
            Accessible
          </div>
          <div className="text-neutral-400 text-base leading-6 mt-3.5">
            Great care in user experience
            <br />
            and design enables everyone.
          </div>
        </div>
      </div>
      <div className="items-center bg-neutral-900 self-stretch flex w-full flex-col justify-center mt-32 px-16 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="flex w-[570px] max-w-full flex-col items-center mb-12 max-md:mb-10">
          <div className="text-gray-200 text-center text-5xl font-bold leading-[56.12px] whitespace-nowrap max-md:text-4xl">
            FAQs
          </div>
          <div className="justify-center items-stretch self-stretch flex flex-col mt-12 py-px border-t-zinc-800 border-t border-solid max-md:max-w-full max-md:mt-10">
            <div className="justify-between items-stretch flex gap-5 py-7 border-b-zinc-800 border-b border-solid max-md:max-w-full max-md:flex-wrap">
              <div className="text-gray-200 text-base leading-6 grow shrink basis-auto">
                Which Parcel plan is right for me?
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/06852fa129c98d5b4a826da93e5275b9c66e5f2baae2404ecc2f3e6805c4a297?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
                className="aspect-square object-contain object-center w-4 justify-center items-center overflow-hidden shrink-0 max-w-full self-start"
              />
            </div>
            <div className="justify-between items-stretch flex gap-5 py-7 border-b-zinc-800 border-b border-solid max-md:max-w-full max-md:flex-wrap">
              <div className="text-gray-200 text-base leading-6 grow shrink basis-auto">
                Do you offer custom invoicing?
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/06852fa129c98d5b4a826da93e5275b9c66e5f2baae2404ecc2f3e6805c4a297?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
                className="aspect-square object-contain object-center w-4 justify-center items-center overflow-hidden shrink-0 max-w-full self-start"
              />
            </div>
            <div className="justify-between flex gap-5 py-7 border-b-zinc-800 border-b border-solid items-start max-md:max-w-full max-md:flex-wrap">
              <div className="text-gray-200 text-base leading-6 grow shrink basis-auto">
                What are the limits for each plan?
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/06852fa129c98d5b4a826da93e5275b9c66e5f2baae2404ecc2f3e6805c4a297?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
                className="aspect-square object-contain object-center w-4 justify-center items-center overflow-hidden shrink-0 max-w-full"
              />
            </div>
            <div className="justify-between items-stretch flex gap-5 py-7 border-b-zinc-800 border-b border-solid max-md:max-w-full max-md:flex-wrap">
              <div className="text-gray-200 text-base leading-6 grow shrink basis-auto">
                I went over my limits. What can I do?
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/06852fa129c98d5b4a826da93e5275b9c66e5f2baae2404ecc2f3e6805c4a297?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
                className="aspect-square object-contain object-center w-4 justify-center items-center overflow-hidden shrink-0 max-w-full self-start"
              />
            </div>
            <div className="justify-between items-stretch flex gap-5 py-7 border-b-zinc-800 border-b border-solid max-md:max-w-full max-md:flex-wrap">
              <div className="text-gray-200 text-base leading-6 grow shrink basis-auto">
                Can I buy additional bandwidth?
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/06852fa129c98d5b4a826da93e5275b9c66e5f2baae2404ecc2f3e6805c4a297?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
                className="aspect-square object-contain object-center w-4 justify-center items-center overflow-hidden shrink-0 max-w-full self-start"
              />
            </div>
            <div className="justify-between items-stretch flex gap-5 py-7 border-b-zinc-800 border-b border-solid max-md:max-w-full max-md:flex-wrap">
              <div className="text-gray-200 text-base leading-6 grow shrink basis-auto max-md:max-w-full">
                I have a Parcel free account, how do I upgrade to a paid plan?
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/06852fa129c98d5b4a826da93e5275b9c66e5f2baae2404ecc2f3e6805c4a297?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
                className="aspect-square object-contain object-center w-4 justify-center items-center overflow-hidden shrink-0 max-w-full self-start"
              />
            </div>
            <div className="justify-between items-stretch flex gap-5 py-7 border-b-zinc-800 border-b border-solid max-md:max-w-full max-md:flex-wrap">
              <div className="text-gray-200 text-base leading-6 grow shrink basis-auto">
                Is there a limit to how many teams I can have?
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/06852fa129c98d5b4a826da93e5275b9c66e5f2baae2404ecc2f3e6805c4a297?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
                className="aspect-square object-contain object-center w-4 justify-center items-center overflow-hidden shrink-0 max-w-full self-start"
              />
            </div>
            <div className="justify-between flex gap-5 py-7 border-b-zinc-800 border-b border-solid items-start max-md:max-w-full max-md:flex-wrap">
              <div className="text-gray-200 text-base leading-6 grow shrink basis-auto max-md:max-w-full">
                I want to transfer a domain name to Parcel. Is there a fee?
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/06852fa129c98d5b4a826da93e5275b9c66e5f2baae2404ecc2f3e6805c4a297?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
                className="aspect-square object-contain object-center w-4 justify-center items-center overflow-hidden shrink-0 max-w-full"
              />
            </div>
            <div className="justify-between items-stretch flex gap-5 py-7 border-b-zinc-800 border-b border-solid max-md:max-w-full max-md:flex-wrap">
              <div className="text-gray-200 text-base leading-6 grow shrink basis-auto">
                How does Parcel calculate usage?
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/06852fa129c98d5b4a826da93e5275b9c66e5f2baae2404ecc2f3e6805c4a297?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
                className="aspect-square object-contain object-center w-4 justify-center items-center overflow-hidden shrink-0 max-w-full self-start"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}


export default About;