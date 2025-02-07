import React, { useEffect, useState } from "react";
import Header from "../Home_Page/Header";
import HeaderDash from "../Dash_Board/HeaderDash";
import { useNavigate } from "react-router-dom";
import Bottom_dash from "../Dash_Board/Bottom_dash";
import { Get_F_and_Q } from "../../Service/Get_pref";

const F_andQ = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
 /*  const [isOpen1, setIsOpen1] = useState(false);

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  }; */

  const [data, setData] = useState({});
  const DataApi = async () => {
    const response = await Get_F_and_Q();
    console.log("data(F&Q)>>>>:", response?.data?.data);
    setData(response?.data?.data || {});
  };

  useEffect(() => {
    DataApi();
  }, []);
  return (
    <div>
      <HeaderDash />
      <div className=' relative bg-[url("https://static-assets-web.flixcart.com/fk-sp-static/images/prelogin/banner/Desktop_faq_1.webp")] h-[50vh]  bg-cover  bg-no-repeat  '>
        <div className="text-5xl font-semibold absolute top-[40%] left-[7%] text-orange-500">
          Frequently Asked Question
        </div>
      </div>

      <div className=" w-[80%] mt-5 mx-auto rounded-md ">
     
        <div  className="border rounded-md shadow-lg p-4">
          <div
            className="flex justify-between items-center cursor-pointer "
            onClick={toggleDropdown}
          >
            <span className="font-bold text-lg">
              {data?.question}
            </span>
            <span className="text-xl font-semibold">{isOpen ? "-" : "+"}</span>
          </div>
          {isOpen && (
            <div className="mt-4 text-sm">
            {/*   <div className="font-bold">Choose who views your photo</div> */}
              <div>
           {data?.answer}
              </div>
           {/*    <div className="font-bold mt-2">Choose who sees your number</div>
              <div>
                You can show your number only to members who contacted you or
                responded to your interest. Or reveal it only to Premium Members
                from your community.
              </div> */}
             {/*  <div className="font-bold mt-2">Safety for women</div>
              <div>
                Women, can turn on the "Secure Connect" feature to get calls
                from members without revealing their own number.
              </div> */}
             {/*  <div className="font-bold mt-2">Protect your horoscope</div>
              <div>
                You can choose to show your horoscope only to members who
                contacted you or responded to your interest. In fact, you can
                even hide your horoscope from being viewed.
              </div> */}
            </div>
          )}
        </div>
   
      {/*   <div className="border my-3 p-4 shadow-lg rounded-md">
          <div
            className="flex justify-between items-center cursor-pointer   "
            onClick={toggleDropdown1}
          >
            <span className="font-bold text-lg">How to be safe?</span>
            <span className="text-xl font-semibold">{isOpen1 ? "-" : "+"}</span>
          </div>
          {isOpen1 && (
            <div className="mt-4 text-sm">
              <div className="font-bold">Never reveal your account details</div>
              <div>
                Keep your matrimony profile username and password safe. No one
                from BharatMatrimony or any of our matrimony services will ever
                ask you for the same
              </div>
              <div className="font-bold mt-2">
                Never make any financial transaction
              </div>
              <div>
                Never engage in financial transactions during your search for a
                life partner, even if presented with plausible scenarios like a
                gift for you stuck at Customs Duty, Emergency Cash Requirement,
                etc
              </div>
              <div className="font-bold mt-2">
                End video calls upon encountering explicit content
              </div>
              <div>
                Terminate video calls upon encountering explicit content. If a
                member requests or displays obscene content during a video call,
                disconnect immediately, report the profile as abuse, and block
                it
              </div>
              <div className="font-bold mt-2">
                Ensure a secure meeting with your match in a public setting
              </div>
              <div>
                Arrange to meet your matches only in secure public locations,
                and always ensure your friends or family are aware of your
                plans.
              </div>
              <div className="font-bold mt-2">
                Do not share any personal information
              </div>
              <div>
                Never share your personal information like Aadhar, Pan card or
                any other government ids. Do not disclose your bank account,
                Demat account details, email passwords etc. If someone tries to
                generate a pin number or a password on your behalf and asks you
                for the same to complete any kind of transaction refrain them
                from doing so and do not share this information.
              </div>
            </div>
          )}
        </div> */}
      </div>

      <Bottom_dash />
    </div>
  );
};

export default F_andQ;
