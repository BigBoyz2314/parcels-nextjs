"use client"
import React from 'react'
import { checkout } from '@/app/checkout'

const PayAsYouGo = () => {
  return (
    <div className="justify-center items-stretch border border-[color:var(--white,#FFF)] self-stretch flex flex-col mt-14 p-10 rounded-3xl border-solid max-md:max-w-full max-md:mt-10 max-md:px-5">
            <div className="items-center flex justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
              <div className="items-stretch flex grow basis-[0%] flex-col my-auto max-md:max-w-full">
                <div className="text-white text-4xl font-semibold max-md:max-w-full">
                  <span className="">Something For </span>
                </div>
                <div className="items-stretch flex gap-3.5 mt-4 pr-5 max-md:max-w-full max-md:flex-wrap">
                  <div className="text-2xl font-semibold grow whitespace-nowrap">
                    <span className="leading-7 text-white">TRY </span>
                    <span className="underline leading-7 text-lime-600">
                      PAY AS YOU GO
                    </span>
                  </div>
                  <div className="text-white text-2xl font-semibold">AT</div>
                  <div className="text-white text-2xl font-semibold grow whitespace-nowrap">
                    <span className="font-bold">£ 9.99 / Month</span>
                  </div>
                </div>
              </div>
              <div className="justify-center items-stretch self-stretch flex grow basis-[0%] flex-col max-md:max-w-full">
                <div className="justify-center items-stretch flex gap-3 px-6 max-md:max-w-full max-md:flex-wrap max-md:px-5">
                  <div className="items-center flex gap-2.5 self-start">
                    <div className="justify-center text-white text-xs font-black leading-3 whitespace-nowrap my-auto">
                    &#x2611;
                    </div>
                    <div className="text-lime-600 text-sm font-bold leading-5 uppercase self-stretch grow whitespace-nowrap">
                      AD HOC LABELS
                    </div>
                  </div>
                  <div className="items-center flex gap-2.5 self-start">
                    <div className="justify-center text-white text-xs font-black leading-3 whitespace-nowrap my-auto">
                    &#x2611;
                    </div>
                    <div className="text-white text-sm leading-5 uppercase self-stretch grow whitespace-nowrap">
                      Live Tracking
                    </div>
                  </div>
                  <div className="items-center flex justify-between gap-2.5">
                    <div className="justify-center text-white text-xs font-black leading-3 whitespace-nowrap my-auto">
                    &#x2611;
                    </div>
                    <div className="text-white text-sm leading-5 uppercase self-stretch grow whitespace-nowrap">
                      SMS Notifications
                    </div>
                  </div>
                </div>
                <div className="justify-center items-center bg-lime-600 flex flex-col mt-5 px-16 py-5 rounded-[52.131px] max-md:max-w-full max-md:px-5">
                  <div className="flex items-stretch gap-2">
                    <button onClick={(() => {checkout({lineItems:[{price:"price_1OQyOcHGDVzvQrZquB8SZJpV",quantity:1}]})})} className="text-white text-center text-base font-medium leading-6 grow whitespace-nowrap">
                      Get Started <span className="font-bold text-2xl/[0px]">&rarr;</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default PayAsYouGo