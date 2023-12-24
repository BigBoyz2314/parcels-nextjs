import * as React from "react";
import Track from "./Track";
import PayAsYouGo from "./PayAsYouGo";
import Price from "./Price";
import Footer from "./Footer";
import Enterprise from "./Enterprise";

function Landing(props) {
  return (
    <div className="bg-black flex flex-col items-stretch pb-12">
      <div className="flex-col justify-end items-center overflow-hidden relative flex min-h-[741px] w-full pt-6 pb-12 px-16 max-md:max-w-full max-md:px-5">
      <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/326245c23aceb3585a0207fe833f8846ff31993ab0d71a5cc8a39e54e62ff503?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
          className="absolute h-full w-full object-cover object-center inset-0"
        />
        <div className="relative flex w-full max-w-[1230px] flex-col mb-14 max-md:max-w-full max-md:mb-10">
          <div className="self-stretch flex w-full items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
            <a href="/">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/94b6b27a776c7da42933901bb4062bde9c6bb7f24ed9b1f757dc6cf171e779cf?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
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
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6d5cb8c7bd513471b3a4adae33f223627a57374b75abf7312ddcc1a5645c132?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
                  className="aspect-[0.95] object-contain object-center w-[21px] overflow-hidden shrink-0 max-w-full self-start"
                />
              </a>
            </div>
          </div>
          <div className="text-white text-center text-3xl leading-10 self-center whitespace-nowrap mt-24 max-md:mt-10">
            On time shipping, every time
          </div>
          <div className="text-white text-center text-7xl font-semibold leading-[90px] self-center max-w-[928px] mt-11 max-md:max-w-full max-md:text-4xl max-md:leading-[53px] max-md:mt-10">
            Next gen deliveries, built for ecommerce
          </div>
          <div className="items-stretch bg-lime-600 self-center flex gap-2 mt-16 px-6 py-5 rounded-[52.131px] max-md:mt-10 max-md:px-5">
            <div className="text-white text-center text-base font-medium leading-6 grow whitespace-nowrap">
              Start sending a package
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5599ce3e808a76a6669dcba69f49dfb58daff6a2393c295b264c6583e7609b7?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
              className="aspect-[0.95] object-contain object-center w-[21px] overflow-hidden shrink-0 max-w-full self-start"
            />
          </div>
          <div className="text-white text-2xl leading-10 self-center whitespace-nowrap mt-16 max-md:mt-10">
            Check out some features below!
          </div>
        </div>
      </div>
      <div className="self-center w-full max-w-[1144px] mt-14 px-5 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <div className="shadow-lg bg-neutral-900 flex grow flex-col w-full px-9 py-12 rounded-3xl items-start max-md:mt-5 max-md:px-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/44fc646ec7569bbe5d2c999a91049234facecfda5a978a44525c53387f850388?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/44fc646ec7569bbe5d2c999a91049234facecfda5a978a44525c53387f850388?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/44fc646ec7569bbe5d2c999a91049234facecfda5a978a44525c53387f850388?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/44fc646ec7569bbe5d2c999a91049234facecfda5a978a44525c53387f850388?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/44fc646ec7569bbe5d2c999a91049234facecfda5a978a44525c53387f850388?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/44fc646ec7569bbe5d2c999a91049234facecfda5a978a44525c53387f850388?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/44fc646ec7569bbe5d2c999a91049234facecfda5a978a44525c53387f850388?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/44fc646ec7569bbe5d2c999a91049234facecfda5a978a44525c53387f850388?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
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
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d34c236d25d225a380bae0b1020adf2278d64e82be3e53d714ba14379bb5201e?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d34c236d25d225a380bae0b1020adf2278d64e82be3e53d714ba14379bb5201e?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d34c236d25d225a380bae0b1020adf2278d64e82be3e53d714ba14379bb5201e?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d34c236d25d225a380bae0b1020adf2278d64e82be3e53d714ba14379bb5201e?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d34c236d25d225a380bae0b1020adf2278d64e82be3e53d714ba14379bb5201e?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d34c236d25d225a380bae0b1020adf2278d64e82be3e53d714ba14379bb5201e?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d34c236d25d225a380bae0b1020adf2278d64e82be3e53d714ba14379bb5201e?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d34c236d25d225a380bae0b1020adf2278d64e82be3e53d714ba14379bb5201e?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
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
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/aad23d302b610dac0dcd493f1a2faede5201e2ad14b5577e4ecfdc3fa207a15e?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/aad23d302b610dac0dcd493f1a2faede5201e2ad14b5577e4ecfdc3fa207a15e?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aad23d302b610dac0dcd493f1a2faede5201e2ad14b5577e4ecfdc3fa207a15e?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/aad23d302b610dac0dcd493f1a2faede5201e2ad14b5577e4ecfdc3fa207a15e?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/aad23d302b610dac0dcd493f1a2faede5201e2ad14b5577e4ecfdc3fa207a15e?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aad23d302b610dac0dcd493f1a2faede5201e2ad14b5577e4ecfdc3fa207a15e?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/aad23d302b610dac0dcd493f1a2faede5201e2ad14b5577e4ecfdc3fa207a15e?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/aad23d302b610dac0dcd493f1a2faede5201e2ad14b5577e4ecfdc3fa207a15e?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
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