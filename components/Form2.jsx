import * as React from "react";

const Form2 = (props) => {
    const {data,handleChange} = props

  return (
    <div className="bg-transparent z-10 flex flex-col pt-6 px-16 max-md:px-5">
      <form id="form2">
      <div className="flex w-full max-w-[1230px] flex-col mb-20 max-md:max-w-full">
        <div className="justify-between items-stretch self-center flex w-[740px] max-w-full gap-5 mt-20 max-md:flex-wrap max-md:mt-10">
          <div className="text-white text-2xl font-semibold tracking-wide">
            Package Delivery
          </div>
          <div className="text-white text-2xl font-semibold tracking-wide">
            2/4
          </div>
        </div>
        <div className="w-full z-10 bg-white h-2 rounded-lg mt-5 overflow-hidden">
            <div
            className="bg-lime-600 h-full transition-all duration-500"
            style={{ width: '50%' }}
            ></div>
        </div>
        <div className="text-white text-3xl font-semibold tracking-wide self-center whitespace-nowrap mt-7">
          Receiver Details
        </div>
        <div className="text-white text-center text-base self-center whitespace-nowrap mt-3.5">
          Please fill in the receiver details
        </div>
        <div className="items-stretch self-center flex w-[590px] max-w-full gap-5 mt-8 max-md:flex-wrap">
          <div className="items-stretch flex grow basis-[0%] flex-col">
            <div className="text-white text-base font-medium leading-6">
              Name<span className="text-lime-600">*</span>
            </div>
            <input type="text" required className="text-black text-base tracking-normal whitespace-nowrap items-stretch bg-white justify-center mt-2 px-3 py-3.5 rounded-lg" name="receivename" value={data.receivename} onChange={handleChange}/>
          </div>
          <div className="items-stretch flex grow basis-[0%] flex-col">
            <div className="text-white text-base font-medium leading-6">
              Email address<span className="text-lime-600">*</span>
            </div>
            <input type="email" required className="text-black text-base tracking-normal whitespace-nowrap items-stretch bg-white justify-center mt-2 px-3 py-3.5 rounded-lg" name="receiveemail" value={data.receiveemail} onChange={handleChange}/>
          </div>
        </div>
        <div className="items-stretch self-center flex w-[590px] max-w-full justify-between gap-5 mt-6 max-md:flex-wrap">
          <div className="items-stretch flex grow basis-[0%] flex-col">
            <div className="text-white text-base font-medium leading-6">
              Country<span className="text-lime-600">*</span>
            </div>
            <input type="text" required className="text-black text-base tracking-normal whitespace-nowrap items-stretch bg-white justify-center mt-2 px-3 py-3.5 rounded-lg" name="receivecountry"  value={data.receivecountry} onChange={handleChange}/>
          </div>
          <div className="items-stretch flex grow basis-[0%] flex-col">
            <div className="items-stretch flex flex-row gap-1">
              <div className="text-white text-base font-medium leading-6 max-sm:-mr-px">
                Phone number<span className="text-lime-600">*</span>
              </div>
              <div className="items-stretch flex gap-0.5">
                <div className="text-white text-xs leading-6 grow whitespace-nowrap">
                  Why
                </div>
              </div>
            </div>
            <div className="bg-white flex w-full flex-col justify-center mt-2 pl-2 rounded-lg items-start max-sm:mb-0 max-sm:pb-9">
              <div className="items-stretch flex">
                <div className="items-stretch border-r-[color:var(--white,#FFF)] flex justify-between border-r border-solid">
                  <select required className="text-black text-base tracking-normal" onChange={handleChange}>
                    <option value="+971">+971</option>
                  </select>

                </div>
                <input type="number" required className="text-black font-light py-4 pr-2 rounded-lg" name="receivephone" value={data.receivephone} onChange={handleChange}/>
              </div>
            </div>
          </div>
        </div>
        <div className="items-stretch self-center flex w-[590px] max-w-full gap-5 mt-6 max-md:flex-wrap">
          <div className="items-stretch flex grow basis-[0%] flex-col">
            <div className="text-white text-base font-medium leading-6">
              City<span className="text-lime-600">*</span>
            </div>
            <input type="text" required className="text-black text-base tracking-normal whitespace-nowrap items-stretch bg-white justify-center mt-2 px-3 py-3.5 rounded-lg" name="receivecity" value={data.receivecity} onChange={handleChange}/>
          </div>
          <div className="items-stretch flex grow basis-[0%] flex-col">
            <div className="text-white text-base font-medium leading-6">
              Street name<span className="text-lime-600">*</span>
            </div>
            <input type="text" required className="text-black text-base tracking-normal whitespace-nowrap items-stretch bg-white justify-center mt-2 px-3 py-3.5 rounded-lg" name="receivestreet" value={data.receivestreet} onChange={handleChange}/>
          </div>
        </div>
        <div className="items-stretch self-center flex w-[590px] max-w-full gap-5 mt-6 max-md:flex-wrap">
          <div className="items-stretch flex grow basis-[0%] flex-col">
            <div className="text-white text-base font-medium leading-6">
              Building Name/Number<span className="text-lime-600">*</span>
            </div>
            <input type="text" required className="text-black text-base tracking-normal whitespace-nowrap items-stretch bg-white justify-center mt-2 px-3 py-3.5 rounded-lg" name="receivebuilding" value={data.receivebuilding} onChange={handleChange}/>
          </div>
          <div className="items-stretch flex grow basis-[0%] flex-col">
            <div className="text-white text-base font-medium leading-6">
              Nearest landmark
            </div>
            <input type="text" className="text-black text-base tracking-normal whitespace-nowrap items-stretch bg-white justify-center mt-2 px-3 py-3.5 rounded-lg" name="receivelandmark" value={data.receivelandmark} onChange={handleChange}/>
          </div>
        </div>
      </div>
      </form>
    </div>
  );
}

export default Form2;