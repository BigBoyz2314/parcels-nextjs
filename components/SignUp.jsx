import * as React from "react";
import Track from "./Track";

function SignUp(props) {
  return (
    <div className="bg-black flex flex-col items-center pb-12 pt-5 max-md:px-5">
      <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/326245c23aceb3585a0207fe833f8846ff31993ab0d71a5cc8a39e54e62ff503?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
          className="absolute h-full w-full object-cover object-center inset-0 z-0"
        />
      <div className="flex w-full max-w-[1230px] flex-col mb-9 max-md:max-w-full z-10">
        <div className="self-stretch flex w-full items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
        <a href="/">
            <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cef57e93d75a33f8466b4ddaa0ecfa7160742ef81899e7f9d591b5f1629f11e8?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
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
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/09b20501fc6400ee5795b39d6ae10d465a5322a792c15f51cbb8a700e162daaa?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
                className="aspect-[0.95] object-contain object-center w-[21px] overflow-hidden shrink-0 max-w-full self-start"
              />
            </a>
          </div>
        </div>
        <div className="self-center text-white text-center text-3xl font-semibold tracking-wide mt-20 max-md:max-w-full max-md:mt-10">
          Sign Up
        </div>
        <div className="self-center text-white text-center text-base mt-3.5 max-md:max-w-full">
          Empower your experience, sign up for an account today
        </div>
        <div className="self-center">
        <div className="text-white text-base font-medium leading-6 self-center mt-12 max-md:max-w-full max-md:mt-10">
          Email address<span className="text-lime-600">*</span>
        </div>
        <div className="text-black text-sm font-light tracking-normal items-stretch self-center bg-white w-[520px] max-w-full justify-center mt-2 px-3 py-4 rounded-lg max-md:max-w-full">
          ex. email@domain.com
        </div>
        </div>
        <div className="self-center">
        <div className="flex gap-1 mt-6">
          <div className="text-white text-base font-medium leading-6">
            Phone number<span className="text-lime-600">*</span>
          </div>
          <div className="flex gap-0.5 pr-2">
            <div className="text-white text-xs leading-6 grow">
              Why
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd5fa91b0b6c3161884ac5ba1a07e0a1f028e55505fffde9002938dd462dbef9?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
              className="aspect-square object-contain object-center w-4 overflow-hidden self-center shrink-0 max-w-full my-auto"
            />
          </div>
        </div>
        <div className="items-stretch self-center bg-white flex w-[520px] max-w-full flex-col justify-center mt-2 px-3 py-3.5 rounded-lg">
          <div className="items-stretch flex w-full justify-between gap-5 px-0.5 max-md:max-w-full max-md:flex-wrap">
            <div className="items-stretch flex justify-between gap-2.5">
              <div className="items-stretch border-r-[color:var(--white,#FFF)] flex justify-between gap-2.5 pr-2.5 border-r border-solid">
                <div className="text-black text-base tracking-normal">+971</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2bdf933ce5deb493ff3bfc42d0f09c52452eaee05541939ff039782c93f65f2?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
                  className="aspect-square object-contain object-center w-3.5 overflow-hidden self-center shrink-0 max-w-full my-auto"
                />
              </div>
              <div className="text-black text-sm font-light tracking-normal self-start">
                Enter phone number
              </div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5cbbb7704dd0604282e734227b58c7668dcd05339e11dd68281fc09b56e47ec?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
              className="aspect-square object-contain object-center w-5 justify-center items-center overflow-hidden shrink-0 max-w-full"
            />
          </div>
        </div>
        </div>
        <div className="self-center">
        <div className="text-white text-base font-medium leading-6 mt-6">
          Password<span className="text-lime-600">*</span>
        </div>
        <div className="items-stretch self-center bg-white flex w-[520px] max-w-full flex-col justify-center mt-2 p-3.5 rounded-lg">
          <div className="justify-between flex gap-5 items-start max-md:max-w-full max-md:flex-wrap">
            <div className="text-black text-sm font-light tracking-normal">
              Enter password
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d956228714ef3ce7f1ce56f02a4c6f26c7d20c2c2e3bd5f5a159e85ba656b09f?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
              className="aspect-square object-contain object-center w-5 justify-center items-center overflow-hidden self-stretch shrink-0 max-w-full"
            />
          </div>
        </div>
        </div>
        <div className="items-stretch self-center flex w-[520px] max-w-full gap-5 mt-4 max-md:flex-wrap">
          <div className="items-stretch flex grow basis-[0%] flex-col">
            <div className="items-stretch flex justify-between gap-2">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/78babb756c425ecdd028b4c026c65418b847d331aec5b2a98a3e2788a2d99322?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
                className="aspect-square object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-white text-sm grow whitespace-nowrap">
                One lowercase character
              </div>
            </div>
            <div className="items-stretch flex justify-between gap-2 mt-2.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/78babb756c425ecdd028b4c026c65418b847d331aec5b2a98a3e2788a2d99322?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
                className="aspect-square object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-white text-sm grow whitespace-nowrap">
                One uppercase character
              </div>
            </div>
            <div className="items-stretch flex justify-between gap-2 mt-2.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/78babb756c425ecdd028b4c026c65418b847d331aec5b2a98a3e2788a2d99322?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
                className="aspect-square object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-white text-sm grow whitespace-nowrap">
                8 characters minimum
              </div>
            </div>
          </div>
          <div className="items-stretch flex grow basis-[0%] flex-col self-start">
            <div className="items-stretch flex justify-between gap-2">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/78babb756c425ecdd028b4c026c65418b847d331aec5b2a98a3e2788a2d99322?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
                className="aspect-square object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-white text-sm grow shrink basis-auto">
                One number
              </div>
            </div>
            <div className="items-stretch flex justify-between gap-2 mt-2.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/78babb756c425ecdd028b4c026c65418b847d331aec5b2a98a3e2788a2d99322?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
                className="aspect-square object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-white text-sm grow shrink basis-auto">
                One special character
              </div>
            </div>
          </div>
        </div>
        <div className="self-center flex w-[520px] max-w-full gap-2.5 mt-8 pr-2.5 items-start max-md:flex-wrap">
          <div className="stroke-[1px] flex w-5 shrink-0 h-5 flex-col rounded-[50%]" />
          <div className="text-white text-sm font-light tracking-normal self-stretch grow shrink basis-auto max-md:max-w-full">
            <input type="checkbox" name="ex-email" id="ex-email" className="w-6 h-6 rounded"/>
            Please exclude me from any future emails regarding Parcels and
            related Intuit product and feature updates, marketing best
            practices, and promotions.
          </div>
        </div>
        <div className="text-white text-sm font-light tracking-normal self-center w-[517px] max-w-full mt-8">
          <span className="leading-4">
            By registering for an account, you are consenting to our{" "}
          </span>
          <a href="#" className="underline leading-4 text-white">
            Terms of Service
          </a>
          <span className="leading-4">
            {" "}
            and confirming that you have reviewed and accepted the
          </span>
          <span className="leading-4 text-white">
            {" "}
            Global Privacy Statement.
          </span>
        </div>
        <div className="text-white text-base font-medium leading-4 tracking-normal whitespace-nowrap justify-center items-center bg-lime-600 self-center w-[520px] max-w-full mt-5 px-16 py-4 rounded-3xl max-md:px-5">
          Get Started
        </div>
        <div className="text-white text-center text-base self-center mt-5 max-md:max-w-full">
          Already have an account? <a href="/login" className="text-lime-600">Login</a>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
