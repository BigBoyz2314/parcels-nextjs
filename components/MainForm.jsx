"use client";
import React from 'react'
import Form1 from './Form1'
import Form2 from './Form2'
import Form3 from './Form3'
import Form4 from './Form4'
import Footer from './Footer'
import Track from './Track'
import Image from 'next/image'
import { useState } from 'react';

const MainForm = () => {

    const [showAlert, setShowAlert] = useState(false);

    const [data, setData] = useState({
        sendname: "",
        sendemail: "",
        sendcountry: "",
        sendcountrycode: "",
        sendphone: "",
        sendcity: "",
        sendstreet: "",
        sendbuilding: "",
        sendlandmark: "",
        receivename: "",
        receiveemail: "",
        receivecountry: "",
        receivecountrycode: "",
        receivephone: "",
        receivecity: "",
        receivestreet: "",
        receivebuilding: "",
        receivelandmark: "",
        shipcontent: "",
        shipweight: "",
        shipunit: "KG",
        shippieces: "",
        shiptype: "",

    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({
            ...data,
            [name]: value,
        });
    };

    const validateForm = () => {
        const formData = activeTab === 0 ? data : data;
    
        let requiredFields = [];

        if (activeTab === 0) {
            requiredFields = [
                "sendname",
                "sendemail",
                "sendcountry",
                "sendphone",
                "sendcity",
                "sendstreet",
                "sendbuilding"
            ];
        } else if (activeTab === 1) {
            requiredFields = [
                "receivename",
                "receiveemail",
                "receivecountry",
                "receivephone",
                "receivecity",
                "receivestreet",
                "receivebuilding"
            ];
        } else if (activeTab === 2) {
            requiredFields = [
                "shipcontent",
                "shipweight",
                "shipunit",
                "shippieces",
                "shiptype"
            ];
        }

        for (const field of requiredFields) {
            // Check if it's a checkbox field
            if (field === "shiptype" && !formData[field]) {
                return false; // Validation fails if checkbox is unchecked
            }
    
            // Check if other required fields are empty
            if (formData[field]?.trim() === "") {
                return false; // Validation fails if any required field is empty
            }
        }
        
        return true; // Return true if validation passes
    };
    

    const handleNextClick = () => {
        const isFormValid = validateForm();
        console.log(data);
        if (activeTab === 3) {
            
        }
        else if (activeTab === 2) {
            if (isFormValid) {
                setShowAlert(false); // Hide the alert if validation passes
                setActiveTab((prev) => prev + 1);
                document.getElementById('next-btn').innerText = 'Continue to payment';
            } else {
                setShowAlert(true); // Show the alert if validation fails
            }
        }
        else if (isFormValid) {
            setShowAlert(false); // Hide the alert if validation passes
            setActiveTab((prev) => prev + 1);
        } else {
            setShowAlert(true); // Show the alert if validation fails
        }
    };

    const [activeTab, setActiveTab] = useState(0)

    const formElements = [
        <Form1 data={data} handleChange={handleChange} />,
        <Form2 data={data} handleChange={handleChange} />,
        <Form3 data={data} handleChange={handleChange} />,
        <Form4 data={data} handleChange={handleChange} />,
    ]
    

  return (
    
    <div className="bg-black flex flex-col items-stretch pb-12">
      <div className="flex-col justify-end items-center overflow-hidden relative flex min-h-[741px] w-full pt-6 pb-12 px-16 max-md:max-w-full max-md:px-5">
      <Image
        src="/Ellipse.svg"
        alt="Parcels.com logo"
        quality={100}
        width={0}
        height={0}
        priority={true}
        className="absolute h-full w-full object-cover object-center inset-0"
      />
        <div className="relative flex w-full max-w-[1230px] flex-col mb-14 max-md:max-w-full max-md:mb-10">
          <div className="self-stretch flex w-full items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
            <a href="/">
            <Image
                  src="/logo.svg"
                  alt="Parcels.com logo"
                  quality={50}
                  width={0}
                  height={0}
                  priority={true}
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
              <a href="/pricing" className="items-stretch bg-lime-600 flex justify-between gap-2 px-10 py-5 rounded-[52.131px] max-md:px-5">
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
          </div>
          {showAlert && (
            <div className="z-10 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md" role="alert">
                <strong className="font-bold">Error:</strong>
                <span className="block sm:inline"> Please fill in all required fields.</span>
            </div>
        )}
                {
                    formElements[activeTab]
                }
          <button
        //   disabled={activeTab === formElements.length - 1 ? "disabled" : ""}
          visible={activeTab === formElements.length - 1 ? "hidden" : ""}
          onClick={handleNextClick}
          id='next-btn'
          className="z-10 text-white text-base font-medium leading-4 tracking-normal whitespace-nowrap justify-center items-stretch bg-lime-600 ml-80 px-11 py-4 rounded-3xl self-start max-md:ml-2.5 max-md:px-5">
            Next
            </button>
        </div>
        
      <Footer/>
    </div>
  )
}

export default MainForm