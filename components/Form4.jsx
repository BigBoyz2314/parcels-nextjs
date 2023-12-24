import * as React from "react";

const Form4 = (props) => {
    // const {data,handleChange} = props

  return (
    <div className="items-start flex max-w-[590px] flex-col z-10 mb-9">
        <form id="form4">
      <div className="text-white text-3xl font-semibold tracking-wide self-stretch w-full max-md:max-w-full">
        Almost done
      </div>
      <div className="text-white text-base font-medium leading-6 self-stretch w-full mt-8 max-md:max-w-full">
        Please select the payment method<span className="text-lime-600">*</span>
      </div>
      <div className="self-stretch w-full mt-2 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <div className="justify-center items-center self-stretch shadow-lg bg-white flex grow flex-col w-full px-14 py-12 rounded-3xl max-md:mt-5 max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f1eb36cae34ef6aab4dbda2d179b69fb24d72fbb4df05e005b4b6eece7a2083?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
                className="aspect-[2.42] object-contain object-center w-[177px] stroke-[1px] stroke-gray-300 overflow-hidden mt-5 mb-5"
              />
            </div>
          </div>
          <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="justify-center items-center self-stretch shadow-lg bg-white flex grow flex-col w-full px-16 py-12 rounded-3xl max-md:mt-5 max-md:px-5">
              <div className="flex w-[74px] max-w-full flex-col items-center my-1">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8880b6e39972c2d2a5ff3dec44bd29aa90c23689e6374cb7bb7a8ecced871e6f?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8880b6e39972c2d2a5ff3dec44bd29aa90c23689e6374cb7bb7a8ecced871e6f?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8880b6e39972c2d2a5ff3dec44bd29aa90c23689e6374cb7bb7a8ecced871e6f?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8880b6e39972c2d2a5ff3dec44bd29aa90c23689e6374cb7bb7a8ecced871e6f?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8880b6e39972c2d2a5ff3dec44bd29aa90c23689e6374cb7bb7a8ecced871e6f?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8880b6e39972c2d2a5ff3dec44bd29aa90c23689e6374cb7bb7a8ecced871e6f?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8880b6e39972c2d2a5ff3dec44bd29aa90c23689e6374cb7bb7a8ecced871e6f?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8880b6e39972c2d2a5ff3dec44bd29aa90c23689e6374cb7bb7a8ecced871e6f?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
                  className="aspect-[1.16] object-contain object-center w-full overflow-hidden"
                />
                <div className="text-black text-sm font-medium leading-5 self-stretch whitespace-nowrap mt-5">
                  Credit Card
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </form>
    </div>
  );
}

export default Form4;