import * as React from "react";

const Form3 = (props) => {
    const {data,handleChange} = props

  return (
    <div className="bg-transparent z-10 flex flex-col pt-6 px-16 max-md:px-5">
      <form id="form3">
      <div className="flex w-full max-w-[1230px] flex-col mb-20 max-md:max-w-full">
      <div className="justify-between items-stretch self-center flex w-[740px] max-w-full gap-5 mt-20 max-md:flex-wrap max-md:mt-10">
          <div className="text-white text-2xl font-semibold tracking-wide">
            Package Delivery
          </div>
          <div className="text-white text-2xl font-semibold tracking-wide">
            3/4
          </div>
        </div>
        
        <div className="w-full z-10 bg-white h-2 rounded-lg mt-5 overflow-hidden">
            <div
            className="bg-lime-600 h-full transition-all duration-500"
            style={{ width: '75%' }}
            ></div>
        </div>
        <div className="text-white text-3xl font-semibold tracking-wide self-center mt-7 max-md:max-w-full">
          Shipment Details
        </div>
        <div className="items-stretch self-center flex w-[590px] max-w-full flex-col gap-5 mt-6 max-md:flex-wrap">
            <div className="text-white text-base font-medium">
              Shipment Content<span className="text-lime-600">*</span>
            </div>
            <input type="text" required className="text-black text-base tracking-normal whitespace-nowrap items-stretch bg-white justify-center px-3 py-3.5 rounded-lg" name="shipcontent" value={data.shipcontent} onChange={handleChange}/>
          </div>
        <div className="items-stretch self-center flex w-[590px] max-w-full justify-between gap-5 mt-6 max-md:flex-wrap">
          <div className="items-stretch flex grow basis-[0%] flex-col">
            <div className="text-white text-base font-medium leading-6">
              Total gross weight<span className="text-lime-600">*</span>
            </div>
            <input type="text" required className="text-black text-base tracking-normal whitespace-nowrap items-stretch bg-white justify-center mt-2 px-3 py-3.5 rounded-lg" name="shipweight" value={data.shipweight} onChange={handleChange}/>
          </div>
          <div className="items-stretch flex grow basis-[0%] flex-col pt-8">
          <select required className="text-black text-base tracking-normal whitespace-nowrap items-stretch bg-white justify-center px-3 py-3.5 rounded-lg" name="shipunit" defaultValue={'KG'} value={data.shipunit} onChange={handleChange}>
            <option value="KG">KG</option> 
          </select>
          </div>
        </div>
        <div className="text-white text-base flex flex-col font-medium leading-6 self-center mt-6">
          Number of pieces<span className="text-lime-600 inline">*</span>
          <input type="number" required className="text-black text-base tracking-normal whitespace-nowrap bg-white justify-center mt-2 px-3 py-3.5 rounded-lg" name="shippieces" value={data.shippieces} onChange={handleChange}/>
        </div>
        <div className="text-white text-base font-medium leading-6 self-center mt-6 max-md:max-w-full">
          Shipment type<span className="text-lime-600">*</span>
        </div>
        <div className="self-center w-[590px] max-w-full mt-2">
          <ul className="grid w-full gap-6 md:grid-cols-2">
              <li>
                  <input type="radio" id="shipdocs" name="shiptype" value="docs" className="hidden peer" required  onChange={handleChange}/>
                  <label htmlFor="shipdocs" className="inline-flex items-center justify-center w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-lime-600 peer-checked:text-lime-600 hover:text-gray-600 hover:bg-gray-100 ">                           
                      <div className="flex align-middle text-center flex-col">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8880b6e39972c2d2a5ff3dec44bd29aa90c23689e6374cb7bb7a8ecced871e6f?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8880b6e39972c2d2a5ff3dec44bd29aa90c23689e6374cb7bb7a8ecced871e6f?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8880b6e39972c2d2a5ff3dec44bd29aa90c23689e6374cb7bb7a8ecced871e6f?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8880b6e39972c2d2a5ff3dec44bd29aa90c23689e6374cb7bb7a8ecced871e6f?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8880b6e39972c2d2a5ff3dec44bd29aa90c23689e6374cb7bb7a8ecced871e6f?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8880b6e39972c2d2a5ff3dec44bd29aa90c23689e6374cb7bb7a8ecced871e6f?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8880b6e39972c2d2a5ff3dec44bd29aa90c23689e6374cb7bb7a8ecced871e6f?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8880b6e39972c2d2a5ff3dec44bd29aa90c23689e6374cb7bb7a8ecced871e6f?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
                        className="aspect-square object-contain object-center w-16 overflow-hidden max-w-full mt-1"
                      />
                          <div className="w-full my-5">Document(s)</div>
                      </div>
                  </label>
              </li>
              <li>
                  <input type="radio" id="shipparcels" name="shiptype" value="parcels" className="hidden peer"  onChange={handleChange}/>
                  <label htmlFor="shipparcels" className="inline-flex items-center justify-center w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-lime-600 peer-checked:text-lime-600 hover:text-gray-600 hover:bg-gray-100">
                  <div className="flex align-middle text-center flex-col">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8880b6e39972c2d2a5ff3dec44bd29aa90c23689e6374cb7bb7a8ecced871e6f?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8880b6e39972c2d2a5ff3dec44bd29aa90c23689e6374cb7bb7a8ecced871e6f?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8880b6e39972c2d2a5ff3dec44bd29aa90c23689e6374cb7bb7a8ecced871e6f?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8880b6e39972c2d2a5ff3dec44bd29aa90c23689e6374cb7bb7a8ecced871e6f?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8880b6e39972c2d2a5ff3dec44bd29aa90c23689e6374cb7bb7a8ecced871e6f?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8880b6e39972c2d2a5ff3dec44bd29aa90c23689e6374cb7bb7a8ecced871e6f?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8880b6e39972c2d2a5ff3dec44bd29aa90c23689e6374cb7bb7a8ecced871e6f?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8880b6e39972c2d2a5ff3dec44bd29aa90c23689e6374cb7bb7a8ecced871e6f?apiKey=bc1qugrtknpjz52vc4m559q7zumkc4268kp7skrsee&"
                        className="aspect-square object-contain object-center w-16 overflow-hidden max-w-full mt-1"
                      />
                          <div className="w-full my-5">Parcel(s)</div>
                      </div>
                  </label>
              </li>
          </ul>
        </div>
        <div className="text-white text-base leading-6 max-w-[590px] self-center mt-8 max-md:max-w-full">
          Please check the list of the prohibited items{" "}
          <a href="#" className="font-bold text-lime-600">here</a>.<br />
          <span className="font-extralight">
            Price may change in case of any weight difference.
          </span>
        </div>
      </div>
      </form>
    </div>
  );
}

export default Form3;