import * as React from "react";
import Track from "./Track";
import PayAsYouGo from "./PayAsYouGo";
import Price from "./Price";
import Footer from "./Footer";
import Enterprise from "./Enterprise";

function Pricing(props) {
  return (
    <div className="bg-black flex flex-col items-stretch pb-12">
      <div className="bg-neutral-900 flex w-full flex-col items-center pt-6 pb-12 px-16 max-md:max-w-full max-md:px-5">
        <div className="flex w-full max-w-[1230px] flex-col mb-11 max-md:max-w-full max-md:mb-10">
          <div className="self-stretch flex w-full items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
            <a href="/">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f98654f221b0762734e422e3242ffa8f0a6d7504dccdc15d1e54129801d7b37?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
              className="aspect-[1.78] object-contain object-center w-[107px] overflow-hidden shrink-0 max-w-full"
            />
            </a>
            <div className="flex items-stretch justify-between gap-5 self-start max-md:max-w-full max-md:flex-wrap">
              <Track/>
              <a href="/about" className="text-white text-right text-lg leading-7 self-center my-auto">
                ABOUT
              </a>
              <a href="/login" className="text-white text-lg leading-7 self-center my-auto">
                LOGIN
              </a>
              <a href="/signup" className="items-stretch bg-lime-600 flex justify-between gap-2 px-10 py-5 rounded-[52.131px] max-md:px-5">
                <div className="text-white text-center text-base font-bold leading-6 grow whitespace-nowrap">
                  SIGN UP
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/97531b2ae38f805755273359846ea369501ad9a3c1a00cb18da90f9ca5813c84?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
                  className="aspect-[0.95] object-contain object-center w-[21px] overflow-hidden shrink-0 max-w-full self-start"
                />
              </a>
            </div>
          </div>
          <div className="text-white text-center text-3xl leading-10 self-center mt-32 max-md:max-w-full max-md:mt-10">
            Pick your plan. Change whenever you want.
          </div>
          <div className="text-white text-center text-7xl font-semibold leading-[90px] self-center mt-11 max-md:max-w-full max-md:text-4xl max-md:mt-10">
            Choose The Best Price
          </div>
          <div className="mx-16">
          <PayAsYouGo/>
          </div>

          <Price/>

          <Enterprise/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Pricing;
