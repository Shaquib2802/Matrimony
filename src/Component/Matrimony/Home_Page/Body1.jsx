import React from "react";
import Login from "./Login";

const Body1 = () => {
  return (
    <div className="w-[100%] relative overflow-hidd ">
      <div className="p-5 md:p-14">
        <div className="text-xl md:text-3xl font-bold">
          The biggest and most trusted
        </div>
        <div className="text-xl md:text-3xl font-bold">
          matrimony service for Indians!
        </div>
        <div className="md:text-xl font-semibold mt-4">
          Now find matches based on your hobbies & interests
        </div>
      </div>
      <div
        className="w-full h-[80vh] bg-opacity-50 mt-28 md:mt-0 bg-black relative"
        style={{
          backgroundImage:
            "url('https://i.postimg.cc/pThbxY7k/bg-home-grop-img-bharat.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" h-full  bg-white bg-opacity-50 z-50 ">
          <div className="absolute   md:w-[70vw] lg:w-[45vw] w-[80vw] -top-28 md:-top-48 left-[10%] md:-left-[10%] lg:left-[20%]">
            <Login />
          </div>
          <div className="h-24   bg-white absolute z-50  md:w-[100%] top-[90%] md:top-[70%]  md:ml-0 mt-20 md:mt-0 block  md:flex md:justify-evenly items-center">
            <div className="flex justify-start gap-x-4 m-10 md:m-0 ">
              <div>
                <img
                  className="w-12 md:w-10 mt-1"
                  src="https://imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/records-new-1.svg"
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <div className="font-bold text-2xl md:text-lg">100%</div>
                <div className="font-normal">Mobile-verified profiles</div>
              </div>
            </div>
            <div className="flex mt-5 md:mt-0 justify-start gap-x-4 m-10 md:m-0 ">
              <div>
                <img
                  className="w-12 md:w-10 "
                  src="https://imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/records-new-2.svg"
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <div className="font-bold text-2xl md:text-lg">4 Crores+</div>
                <div>Customers served</div>
              </div>
            </div>
            <div className="flex  mt-5 md:mt-0 justify-start gap-x-4 m-10 md:m-0">
              <div>
                <img
                  className="w-12 md:w-10"
                  src="https://imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/records-new-3.svg"
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <div className="font-bold text-2xl md:text-lg"> 23 Years</div>
                <div>of successful matchmaking</div>
              </div>
            </div>

            <div className="border-t border-black block md:hidden  ">
              <div className=" text-sm text-gray-500 w-[70%] mx-auto py-8">
                This website is strictly for matrimonial purpose only and not a
                dating website. Copyright © 2025. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block absolute w-[100%] bg-white bg-opacity-50  ">
        <div
          className="w-[100vh] rounded-t-2xl mb-10 mt-3 h-[45vh] bg-opacity-50 bg-black "
          style={{
            backgroundImage:
              "url('https://i.postimg.cc/zf2kYM4H/bg-home-grop-img-bharat.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute w-full h-full bg-white bg-opacity-50 z-20">
            <div className=" w-[100%] mt-5  text-center text-sm text-gray-500 left-[70%]">
              This website is strictly for matrimonial purpose only and not a
              dating website. Copyright 2025. All rights and reserve.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body1;
