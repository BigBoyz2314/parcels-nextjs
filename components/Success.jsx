"use client"
import * as React from "react";
import Footer from "./Footer";
import { useUser } from "@auth0/nextjs-auth0/client";
import Header from "./Header";
import Script from "next/script";

function Success() {

  const { user, error, isLoading } = useUser();

  return (
    <div className="bg-black flex flex-col items-stretch">
      <div className="bg-neutral-900 flex w-full flex-col ">
        <Header/>
        <Script src="getdata.js"></Script>
        <div className="flex flex-col items-stretch justify-center max-w-[1230px] self-center mt-20 px-5 max-md:mt-10 max-md:px-5">
            <h1 className="text-white font-semibold text-center" style={{fontSize: "5em"}}>Please Check Your Email To Active Your Account</h1>    
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Success;
