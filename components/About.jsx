"use client"
import * as React from "react";
import Track from "./Track";
import Footer from "./Footer";
import Image from "next/image";
import { useUser } from '@auth0/nextjs-auth0/client';
import Header from "./Header";

function About(props) {

  const { user, error, isLoading } = useUser();

  return (
    <div className="bg-black flex flex-col">
      <Image
        src="/Ellipse.svg"
        alt="Parcels.com logo"
        quality={100}
        width={0}
        height={0}
        priority={true}
        className="absolute mt-28 h-full w-full object-cover object-center max-md:hidden"
      />

        <Header/>
      
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
      <div className="self-center flex z-10 max-md:flex-col justify-between gap-5 mt-36 px-5 items-start max-md:max-w-full max-md:flex-wrap max-md:mt-10">
      <div className="flex flex-col bg-neutral-900 p-5 rounded-lg mb-3">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8e35adcd58eec0ccebf9dbd43af6ecd834f39bdc574f02974383f0e8b07f159?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
          className="aspect-[0.95] object-contain object-center w-10 justify-center items-center overflow-hidden shrink-0 max-w-full mt-1 mb-3"
        />
        <div className="flex grow basis-[0%] flex-col items-stretch">
          <div className="text-gray-200 text-2xl font-bold leading-8 tracking-tight">
            Easy
          </div>
          <div className="text-neutral-400 text-base leading-6 mt-2">
            Building and deploying should 
            <br />
            be as easy as a single tap.
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-neutral-900 p-4 rounded-lg mb-3">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1ebadb3c7d978f3bb8a5108407eb9aaf8917f49e505f8f0a5e46d42d4283730?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
          className="aspect-[0.95] object-contain object-center w-10 justify-center items-center overflow-hidden shrink-0 max-w-full mt-1 mb-2"
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
      </div>
      <div className="flex flex-col bg-neutral-900 p-6 rounded-lg mb-3">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1bb5cc201506434594ba611d103784e92cb0056a2fbe4019aa369aa7ae4e1a3d?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
          className="aspect-[0.95] object-contain object-center w-10 justify-center items-center overflow-hidden shrink-0 max-w-full mt-1 mb-2"
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
      </div>
      <div className="items-center bg-neutral-900 self-stretch flex w-full flex-col justify-center mt-32 px-16 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="flex w-[570px] max-w-full flex-col items-center mb-12 max-md:mb-10">
          <div className="text-gray-200 text-center text-5xl font-bold leading-[56.12px] whitespace-nowrap max-md:text-4xl">
            FAQs
          </div>
          <div className="justify-center items-stretch self-stretch flex flex-col mt-12 py-px border-t-zinc-800 border-t border-solid max-md:max-w-full max-md:mt-10">
          <details
          class="justify-between items-stretch flex gap-5 py-7 border-b-zinc-800 border-b border-solid max-md:max-w-full max-md:flex-wrap open:shadow-lg mb-1 bg-none duration-300"
        >
          <summary
            class="list-none text-gray-200 relative cursor-pointer pr-7"
            >Which Parcels.com plan is right for me?
            <div
              class="absolute top-0 right-0 px-1 py-0.5 cursor-pointer visible open:invisible"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/06852fa129c98d5b4a826da93e5275b9c66e5f2baae2404ecc2f3e6805c4a297?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
                className="aspect-square object-contain object-center w-4 justify-center items-center overflow-hidden shrink-0 max-w-full self-start"
              />
            </div>
          </summary>
          <p class="text-gray-200 pt-6">
          Our Hobby plan is for personal, non-commercial use. Pro is for small teams with moderate bandwidth and collaboration requirements. Enterprise is for teams seeking greater performance, collaboration, and security. 
          <br />
          <br />
          Contact our sales team to learn more.
          </p>
        </details>
          <details
          class="justify-between items-stretch flex gap-5 py-7 border-b-zinc-800 border-b border-solid max-md:max-w-full max-md:flex-wrap open:shadow-lg mb-1 bg-none duration-300"
        >
          <summary
            class="list-none text-gray-200 relative cursor-pointer pr-7"
            >Do you offer custom invoicing?
            <div
              class="absolute top-0 right-0 px-1 py-0.5 cursor-pointer visible open:invisible"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/06852fa129c98d5b4a826da93e5275b9c66e5f2baae2404ecc2f3e6805c4a297?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
                className="aspect-square object-contain object-center w-4 justify-center items-center overflow-hidden shrink-0 max-w-full self-start"
              />
            </div>
          </summary>
          <p class="text-gray-200 pt-6">
          Yes, we offer custom invoicing for Enterprise customers. Contact our sales team to learn more.
          </p>
        </details>
          <details
          class="justify-between items-stretch flex gap-5 py-7 border-b-zinc-800 border-b border-solid max-md:max-w-full max-md:flex-wrap open:shadow-lg mb-1 bg-none duration-300"
        >
          <summary
            class="list-none text-gray-200 relative cursor-pointer pr-7"
            >What are the limits for each plan?
            <div
              class="absolute top-0 right-0 px-1 py-0.5 cursor-pointer visible open:invisible"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/06852fa129c98d5b4a826da93e5275b9c66e5f2baae2404ecc2f3e6805c4a297?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
                className="aspect-square object-contain object-center w-4 justify-center items-center overflow-hidden shrink-0 max-w-full self-start"
              />
            </div>
          </summary>
          <p class="text-gray-200 pt-6">
          Our limits are listed here. Additionally, check out our Fair Use Policy.
          </p>
        </details>
          <details
          class="justify-between items-stretch flex gap-5 py-7 border-b-zinc-800 border-b border-solid max-md:max-w-full max-md:flex-wrap open:shadow-lg mb-1 bg-none duration-300"
        >
          <summary
            class="list-none text-gray-200 relative cursor-pointer pr-7"
            >I went over my limits. What can I do?
            <div
              class="absolute top-0 right-0 px-1 py-0.5 cursor-pointer visible open:invisible"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/06852fa129c98d5b4a826da93e5275b9c66e5f2baae2404ecc2f3e6805c4a297?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
                className="aspect-square object-contain object-center w-4 justify-center items-center overflow-hidden shrink-0 max-w-full self-start"
              />
            </div>
          </summary>
          <p class="text-gray-200 pt-6">
          We are glad you are growing and scaling with Vercel! Please contact us to discuss your resource requirements and we can customize a plan for your team.
          </p>
        </details>
          <details
          class="justify-between items-stretch flex gap-5 py-7 border-b-zinc-800 border-b border-solid max-md:max-w-full max-md:flex-wrap open:shadow-lg mb-1 bg-none duration-300"
        >
          <summary
            class="list-none text-gray-200 relative cursor-pointer pr-7"
            >Can I buy additional bandwidth?
            <div
              class="absolute top-0 right-0 px-1 py-0.5 cursor-pointer visible open:invisible"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/06852fa129c98d5b4a826da93e5275b9c66e5f2baae2404ecc2f3e6805c4a297?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
                className="aspect-square object-contain object-center w-4 justify-center items-center overflow-hidden shrink-0 max-w-full self-start"
              />
            </div>
          </summary>
          <p class="text-gray-200 pt-6">
          Yes! On top of your included 1,000 GB of Bandwidth on Pro, you can pay as you go for additional Bandwidth at $40 per 100 GB, uncapped. If you have a free Parcels.com account, you are limited to 100 GB of Bandwidth and cannot purchase additional usage.
          </p>
        </details>
          <details
          class="justify-between items-stretch flex gap-5 py-7 border-b-zinc-800 border-b border-solid max-md:max-w-full max-md:flex-wrap open:shadow-lg mb-1 bg-none duration-300"
        >
          <summary
            class="list-none text-gray-200 relative cursor-pointer pr-7"
            >I have a Parcels.com starter account, how do I upgrade to a larger plan?
            <div
              class="absolute top-0 right-0 px-1 py-0.5 cursor-pointer visible open:invisible"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/06852fa129c98d5b4a826da93e5275b9c66e5f2baae2404ecc2f3e6805c4a297?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
                className="aspect-square object-contain object-center w-4 justify-center items-center overflow-hidden shrink-0 max-w-full self-start"
              />
            </div>
          </summary>
          <p class="text-gray-200 pt-6">
          Thanks for continuing to use Parcels.com! Follow this guide to transfer your project to a team.
          </p>
        </details>
          <details
          class="justify-between items-stretch flex gap-5 py-7 border-b-zinc-800 border-b border-solid max-md:max-w-full max-md:flex-wrap open:shadow-lg mb-1 bg-none duration-300"
        >
          <summary
            class="list-none text-gray-200 relative cursor-pointer pr-7"
            >How does Parcel calculate usage?
            <div
              class="absolute top-0 right-0 px-1 py-0.5 cursor-pointer visible open:invisible"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/06852fa129c98d5b4a826da93e5275b9c66e5f2baae2404ecc2f3e6805c4a297?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
                className="aspect-square object-contain object-center w-4 justify-center items-center overflow-hidden shrink-0 max-w-full self-start"
              />
            </div>
          </summary>
          <p class="text-gray-200 pt-6">
          We calculate the total response size which includes headers along with the number of bytes in the body. Anything served from our servers from your project’s domain will be counted as bandwidth (including JSON responses for Serverless Functions).
          <br /><br />
          When it comes to Serverless Functions though, GB-Hrs is calculated by multiplying the duration that your functions ran for by the amount of memory that was consumed by them.
          <br /><br />
          To learn more, check out the Usage documentation.
          </p>
        </details>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}


export default About;