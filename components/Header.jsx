import * as React from "react";
import Image from "next/image";
import Track from "./Track";
import { useUser } from '@auth0/nextjs-auth0/client';


function Header(props) {

    const { user, error, isLoading } = useUser();

    
  if (user) {
    return (
        <div className="bg-neutral-900 z-10 flex flex-col justify-center items-center px-16 py-6 max-md:px-5">
        <div className="flex w-full max-w-[1230px] items-center justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
        <div className="items-start flex justify-between gap-5 my-auto">
            <a href="/">
          <Image
            src="/logo.svg"
            alt="Parcels.com logo"
            quality={100}
            width={0}
            height={0}
            priority={true}
            className="aspect-[2.84] object-contain object-center w-[105px] overflow-hidden self-stretch shrink-0 max-w-full"
          />
          </a>
          <a href="/about" className="text-white text-right text-lg leading-7 self-center my-auto active:text-lime-600">
            ABOUT
          </a>
          <a href="/pricing" className="text-white text-lg leading-7 self-center my-auto">
            PRICING
          </a>
          <a href="/about" className="text-white text-lg leading-7 self-center grow whitespace-nowrap my-auto">
            FAQs
          </a>
        </div>
        <Track/>

        <div className="items-center self-stretch flex justify-between gap-5">
          <a href="" className="text-white text-lg leading-7 grow whitespace-nowrap my-auto">
          {user.name}
          </a>
          <a href="/api/auth/logout" className="text-white text-lg leading-7 grow whitespace-nowrap my-auto">
          LOGOUT
          </a>
        </div>
      </div>
    </div>
    )
  }

  else {
    return (
        <div className="bg-neutral-900 z-10 flex flex-col justify-center items-center px-16 py-6 max-md:px-5">
        <div className="flex w-full max-w-[1230px] items-center justify-between max-md:justify-center gap-5 max-md:max-w-full max-md:flex-wrap">
        <div className="items-start flex justify-between gap-5 my-auto">
            <a href="/">
          <Image
            src="/logo.svg"
            alt="Parcels.com logo"
            quality={100}
            width={0}
            height={0}
            priority={true}
            className="aspect-[2.84] object-contain object-center w-[105px] overflow-hidden self-stretch shrink-0 max-w-full"
          />
          </a>
          <a href="/about" className="text-white text-right text-lg leading-7 self-center my-auto">
            ABOUT
          </a>
          <a href="/pricing" className="text-white text-lg leading-7 self-center my-auto">
            PRICING
          </a>
          <a href="/about" className="text-white text-lg leading-7 self-center grow whitespace-nowrap my-auto">
            FAQs
          </a>
        </div>
        <Track/>

        <div className="items-center self-stretch flex justify-between gap-5">
          <a href="/api/auth/login" className="text-white text-lg leading-7 grow whitespace-nowrap my-auto">
            LOG IN
          </a>
          <a href="/pricing" className="items-stretch bg-lime-600 self-stretch flex justify-between gap-2 px-10 py-5 rounded-[52.131px] max-md:px-5">
            <div className="text-white text-center text-base font-medium leading-6 grow whitespace-nowrap">
              SIGN UP <span className="font-bold text-2xl/[0px]">&rarr;</span>
            </div>
          </a>
        </div>
      </div>
    </div>
    )
    }
}

export default Header;