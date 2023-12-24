import { checkout } from '@/app/checkout'
import React from 'react'

const Price = () => {
  return (
    <div className="self-center w-full max-w-[1074px] mt-8 max-md:max-w-full">
    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
      <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
        <div className="items-stretch shadow-lg bg-white flex w-full flex-col m-auto px-9 py-12 rounded-3xl max-md:mt-10 max-md:px-5">
          <div className="text-lime-600 text-2xl font-semibold leading-6 whitespace-nowrap mt-1">
            Medium
          </div>
          <div className="text-black text-sm leading-5 mt-2">
            All the basics for businesses that are just
            getting started.
          </div>
          <div className="items-stretch flex gap-0.5 mt-5">
            <div className="text-lime-600 text-2xl font-semibold leading-6">
              <span className="font-bold">£99</span>
            </div>
            <div className="justify-center text-black text-xs font-semibold leading-6 mt-1">
              /Month
            </div>
          </div>
          <div className="items-center flex justify-between gap-2.5 mt-9">
            <div className="justify-center text-black text-xs font-black leading-3 whitespace-nowrap my-auto">
            &#x2611;
            </div>
            <div className="text-black text-sm leading-5 uppercase self-stretch grow whitespace-nowrap">
              20 LABELS
            </div>
          </div>
          <div className="items-center flex justify-between gap-2.5 mt-2.5">
            <div className="justify-center text-black text-xs font-black leading-3 whitespace-nowrap my-auto">
            &#x2611;
            </div>
            <div className="text-black text-sm leading-5 uppercase self-stretch grow whitespace-nowrap">
              Live Tracking
            </div>
          </div>
          <div className="items-center flex justify-between gap-2.5 mt-2.5">
            <div className="justify-center text-black text-xs font-black leading-3 whitespace-nowrap my-auto">
            &#x2611;
            </div>
            <div className="text-neutral-900 text-sm leading-5 uppercase self-stretch grow whitespace-nowrap">
              SMS Notifications
            </div>
          </div>
          <button onClick={(() => {checkout({lineItems:[{price:"price_1OQurdHGDVzvQrZqj97ANHhN",quantity:1}]})})} className="justify-between items-stretch bg-black flex gap-2 mt-9 mb-1 px-20 py-4 rounded-[100px] max-md:px-5">
            <div className="text-white text-center text-base font-medium leading-6 grow whitespace-nowrap">
              Get Started
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/98ec53add1d3fb00a37f96663cefead138ce3cc0bf7ad6897cb726c431cf6716?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
              className="aspect-square object-contain object-center w-[21px] overflow-hidden shrink-0 max-w-full self-start"
            />
          </button>
        </div>
      </div>
      <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
        <div className="items-stretch shadow-lg bg-white flex w-full flex-col m-auto px-9 py-11 rounded-3xl max-md:mt-10 max-md:px-5">
          <div className="text-lime-600 text-2xl font-semibold leading-6 whitespace-nowrap">
            Large
          </div>
          <div className="text-black text-sm leading-5 mt-2">
            All the basics for businesses that are just
            getting started.
          </div>
          <div className="items-stretch flex gap-0.5 mt-5">
            <div className="text-lime-600 text-2xl font-semibold leading-6">
              <span className="font-bold">£499</span>
            </div>
            <div className="justify-center text-black text-xs font-semibold leading-6 mt-1">
              /Month
            </div>
          </div>
          <div className="items-center flex justify-between gap-2.5 mt-9">
            <div className="justify-center text-black text-xs font-black leading-3 whitespace-nowrap my-auto">
            &#x2611;
            </div>
            <div className="text-black text-sm leading-5 uppercase self-stretch grow whitespace-nowrap">
              150 LABELS
            </div>
          </div>
          <div className="items-center flex justify-between gap-2.5 mt-2.5">
            <div className="justify-center text-black text-xs font-black leading-3 whitespace-nowrap my-auto">
            &#x2611;
            </div>
            <div className="text-black text-sm leading-5 uppercase self-stretch grow whitespace-nowrap">
              Live Tracking
            </div>
          </div>
          <div className="items-center flex justify-between gap-2.5 mt-2.5">
            <div className="justify-center text-black text-xs font-black leading-3 whitespace-nowrap my-auto">
            &#x2611;
            </div>
            <div className="text-neutral-900 text-sm leading-5 uppercase self-stretch grow whitespace-nowrap">
              Routing
            </div>
          </div>
          <div className="items-center flex justify-between gap-2.5 mt-2.5">
            <div className="justify-center text-black text-xs font-black leading-3 whitespace-nowrap my-auto">
            &#x2611;
            </div>
            <div className="text-neutral-900 text-sm leading-5 uppercase self-stretch grow whitespace-nowrap">
              SMS Notifications
            </div>
          </div>
          <div className="items-center flex justify-between gap-2.5 mt-2.5">
            <div className="justify-center text-black text-xs font-black leading-3 whitespace-nowrap my-auto">
            &#x2611;
            </div>
            <div className="text-neutral-900 text-sm leading-5 uppercase self-stretch grow whitespace-nowrap">
              WhatsApp Notifications
            </div>
          </div>
          <div className="items-center flex justify-between gap-2.5 mt-2.5">
            <div className="justify-center text-black text-xs font-black leading-3 whitespace-nowrap my-auto">
            &#x2611;
            </div>
            <div className="text-neutral-900 text-sm leading-5 uppercase self-stretch grow whitespace-nowrap">
              Sales Chanel Integration
            </div>
          </div>
          <div className="justify-between items-stretch bg-black flex gap-2 mt-5 px-20 py-4 rounded-[100px] max-md:px-5">
            <div className="text-white text-center text-base font-medium leading-6 grow whitespace-nowrap">
              Get Started
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/98ec53add1d3fb00a37f96663cefead138ce3cc0bf7ad6897cb726c431cf6716?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
              className="aspect-square object-contain object-center w-[21px] overflow-hidden shrink-0 max-w-full self-start"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
        <div className="items-stretch shadow-lg bg-white flex w-full grow flex-col mx-auto px-9 py-11 rounded-3xl max-md:mt-8 max-md:px-5">
          <div className="text-lime-600 text-2xl font-semibold leading-6 whitespace-nowrap">
            Extra Large
          </div>
          <div className="text-black text-sm leading-5 mt-2">
            All the basics for businesses that are just
            getting started.
          </div>
          <div className="items-stretch flex gap-0.5 mt-5">
            <div className="text-lime-600 text-2xl font-semibold leading-6">
              <span className="font-bold">£999</span>
            </div>
            <div className="justify-center text-black text-xs font-semibold leading-6 mt-1">
              /Month
            </div>
          </div>
          <div className="items-center flex justify-between gap-2.5 mt-9">
            <div className="justify-center text-black text-xs font-black leading-3 whitespace-nowrap my-auto">
            &#x2611;
            </div>
            <div className="text-black text-sm leading-5 uppercase self-stretch grow whitespace-nowrap">
              500 LABELS
            </div>
          </div>
          <div className="items-center flex justify-between gap-2.5 mt-2.5">
            <div className="justify-center text-black text-xs font-black leading-3 whitespace-nowrap my-auto">
            &#x2611;
            </div>
            <div className="text-black text-sm leading-5 uppercase self-stretch grow whitespace-nowrap">
              Live Tracking
            </div>
          </div>
          <div className="items-center flex justify-between gap-2.5 mt-2.5">
            <div className="justify-center text-black text-xs font-black leading-3 whitespace-nowrap my-auto">
            &#x2611;
            </div>
            <div className="text-neutral-900 text-sm leading-5 uppercase self-stretch grow whitespace-nowrap">
              Routing
            </div>
          </div>
          <div className="items-center flex justify-between gap-2.5 mt-2.5">
            <div className="justify-center text-black text-xs font-black leading-3 whitespace-nowrap my-auto">
            &#x2611;
            </div>
            <div className="text-neutral-900 text-sm leading-5 uppercase self-stretch grow whitespace-nowrap">
              SMS Notifications
            </div>
          </div>
          <div className="items-center flex justify-between gap-2.5 mt-2.5">
            <div className="justify-center text-black text-xs font-black leading-3 whitespace-nowrap my-auto">
            &#x2611;
            </div>
            <div className="text-neutral-900 text-sm leading-5 uppercase self-stretch grow whitespace-nowrap">
              WhatsApp Notifications
            </div>
          </div>
          <div className="items-center flex justify-between gap-2.5 mt-2.5">
            <div className="justify-center text-black text-xs font-black leading-3 whitespace-nowrap my-auto">
            &#x2611;
            </div>
            <div className="text-neutral-900 text-sm leading-5 uppercase self-stretch grow whitespace-nowrap">
              Sales Chanel Integration
            </div>
          </div>
          <div className="justify-between items-stretch bg-black flex gap-2 mt-16 px-20 py-4 rounded-[100px] max-md:mt-10 max-md:px-5">
            <div className="text-white text-center text-base font-medium leading-6 grow whitespace-nowrap">
              Get Started
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/98ec53add1d3fb00a37f96663cefead138ce3cc0bf7ad6897cb726c431cf6716?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
              className="aspect-square object-contain object-center w-[21px] overflow-hidden shrink-0 max-w-full self-start"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Price