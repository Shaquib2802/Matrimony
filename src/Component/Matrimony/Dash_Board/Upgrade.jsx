import React from "react";
import TextsmsIcon from "@mui/icons-material/Textsms";
import PhoneIcon from "@mui/icons-material/Phone";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useNavigate } from "react-router-dom";
const Upgrade = () => {
    const navigate = useNavigate();
  return (
    <div className="w-[100%]">
      <div className=" h-20 w-[100%] border-b-2 border-green-600">
        <div className=" mx-8 h-20  flex justify-between items-center">
          <div>
            <img
              className="w-[80%] cursor-pointer " onClick={()=> navigate("/dash")} 
              src="https://imgs.bharatmatrimony.com/bmimgs/bharatmatrimony-logo.png"
              alt=""
            />
          </div>
          <div className="flex  gap-x-5 items-center">
            <div className="text-[65%] tracking-wider mt-1">
              Need help in making payment?
            </div>
            <div className="flex gap-x-1 items-center">
              <div>
                {" "}
                <TextsmsIcon className="text-green-600 !text-sm " />
              </div>
              <div className="text-[70%] tracking-wide mt-1">Chat with us </div>
            </div>
            <div className="flex gap-x-1 items-center">
              <div>
                {" "}
                <PhoneIcon className="text-green-600 !text-[95%] " />
              </div>
              <div className="text-[85%] tracking-wide mt-1">7538895777</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col my-5 ">
        <div className="mx-auto  w-[100%] mt-3" >
          <img 
            className="w-[33%] mx-auto cursor-pointer " 
            src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/money-back/mb-thumb-with-info.svg"
            alt=""
          />
        </div>
        <div className="mx-auto text-3xl mt-3 font-bold tracking-tight">
          Pay now to contact matches
        </div>
        <div className=" mx-auto">
          <div className="flex mx-auto gap-x-2 mt-7">
            <div>
              <TiTick className="text-lg mt-1  text-[#f2090b] font-bold" />
            </div>
            <div>
              Send <span className="font-semibold">unlimited messages</span> &{" "}
              <span className="font-semibold">chat</span>, view{" "}
              <span className="font-semibold">50 verified mobile numbers*</span>{" "}
            </div>
          </div>
          <div className="flex mx-auto gap-x-2 mt-3">
            <div>
              <TiTick className="text-lg mt-1  text-[#f2090b] font-bold" />
            </div>
            <div>
              Check <span className="font-semibold">compatibility</span> with
              matches by viewing{" "}
              <span className="font-semibold">unlimited horoscopes</span>{" "}
            </div>
          </div>
          <div className="flex mx-auto gap-x-2 mt-3">
            <div>
              <RxCross2 className="text-sm mt-1.5  text-gray-500 font-bold" />
            </div>
            <div className="text-gray-500 line-through">
              View and contact{" "}
              <span className="font-semibold">
                ID verified matches with photos
              </span>{" "}
              from{" "}
              <span className="font-semibold">exclusive Prime section</span>
            </div>
          </div>
          <div className="flex mx-auto gap-x-2 mt-3">
            <div>
              <RxCross2 className="text-sm mt-1.5  text-gray-500 font-bold" />
            </div>
            <div className="text-gray-500 line-through">
              <span className="font-semibold">Priority customer service</span>{" "}
              helpline
            </div>
          </div>
          <div className="flex mx-auto gap-x-2 mt-3">
            <div>
              <RxCross2 className="text-sm mt-1.5  text-gray-500 font-bold" />
            </div>
            <div className="text-gray-500 line-through">
              View and contact{" "}
              <span className="font-semibold">
                ID verified matches with photos
              </span>{" "}
              from{" "}
              <span className="font-semibold">exclusive Prime section</span>
            </div>
          </div>
          <div className="grid grid-cols-3 my-5  ">
            <div className="flex flex-col border mt-8 border-gray-400 rounded-lg py-5 h-fit w-[85%]">
              <div className="border rounded-full border-gray-400   hover:bg-gray-300 cursor-pointer h-5 w-5 mx-auto">

              </div>
              <div className="mx-auto text-center pb-2 font-semibold mt-2 border-b w-[70%]">
                GOLD{" "}
              </div>

              <div className="mx-auto font-semibold mt-2 text-center pb-2 border-b w-[70%]">
                3 Months{" "}
              </div>
              <div className="mx-auto font-semibold text-green-700 mt-2">
                SAVE 81%{" "}
              </div>
              <div className="mx-auto font-semibold text-gray-400 line-through mt-2">
                ₹ 5,300{" "}
              </div>
              <div className="mx-auto font-bold text-xl line-through mt-2">
                ₹1,000{" "}
              </div>
            </div>
            <div className="flex flex-col border border-gray-400 rounded-lg h-fit w-[85%] ">
              <div className="bg-[#f2090b]  border-t border-[#f2090b]  rounded-t-lg p-1 text-center text-white font-semibold">
                BEST SELLING
              </div>
              <div className="border rounded-full border-gray-400  mt-5 hover:bg-gray-300 cursor-pointer h-5 w-5 mx-auto"></div>
              <div className="mx-auto font-semibold mt-2 text-center pb-2 border-b w-[70%]">
                PRIME GOLD{" "}
              </div>

              <div className="mx-auto font-semibold mt-2 text-center pb-2 border-b w-[70%]">
                3 Months{" "}
              </div>
              <div className="mx-auto font-semibold text-green-700 mt-2">
                SAVE 77%{" "}
              </div>
              <div className="mx-auto font-semibold text-gray-400 line-through mt-2">
                ₹ 5,300{" "}
              </div>
              <div className="mx-auto font-bold text-xl line-through mt-2">
                ₹1,000{" "}
              </div>
            </div>

            <div className="flex flex-col border border-gray-400 mt-8 rounded-lg py-5 h-[90%] w-[85%]">
              <div className="border rounded-full border-gray-400   hover:bg-gray-300 cursor-pointer h-5 w-5 mx-auto"></div>
              <div className="mx-auto text-center pb-2 font-semibold mt-2 border-b w-[70%]">
                PRIME GOLD{" "}
              </div>

              <div className="mx-auto font-semibold mt-2 text-center pb-2 border-b w-[70%]">
                6 Months{" "}
              </div>
              <div className="mx-auto font-semibold text-green-700 mt-2">
                SAVE 84%{" "}
              </div>
              <div className="mx-auto font-semibold text-gray-400 line-through mt-2">
                ₹ 5,300{" "}
              </div>
              <div className="mx-auto font-bold text-xl line-through mt-2">
                ₹1,000{" "}
              </div>
            </div>
          </div>
          <div className="border-t  border-gray-500 my-8 w-[50%] mx-auto relative z-20 ">
            <div className=" w-[50%] h-7 text-sm absolute -top-5 left-[25%] mt-2 text-center bg-white   ">
              Offer Valid Only Today!
            </div>
          </div>
          <div className="my-5 border text-sm font-semibold text-white bg-[#f2090b] w-[40%] mx-auto text-center rounded-3xl p-2">
          Pay Now ₹1,000
          </div>
          <div className="flex text-[#f2090b] mx-auto w-[50%] my-5 justify-center text-sm items-center font-semibold">
            <div>View All Packages</div>
            <div><KeyboardArrowRightIcon/></div>
          </div>
        </div>
      </div>
      <div className="mx-36 flex justify-around my-5">
        <div><img src="https://imgs.bharatmatrimony.com/bmimgs/payments/payment-footer-vbv-icon.png?v=1" alt="" /></div>
        <div><img src="https://imgs.bharatmatrimony.com/bmimgs/payments/payment-footer-master-icon.png?v=1" alt="" /></div>
        <div><img src="https://imgs.bharatmatrimony.com/bmimgs/payments/payment-footer-pci-icon.png?v=1" alt="" /></div>
        <div><img src="https://imgs.bharatmatrimony.com/bmimgs/payments/payment-footer-trustwave-icon.png?v=1" alt="" /></div>
        <div><img src="https://imgs.bharatmatrimony.com/bmimgs/payments/payment-footer-safekey-icon.png?v=1" alt="" /></div>
        <div><img src="https://imgs.bharatmatrimony.com/bmimgs/payments/payment-footer-vbv-icon.png?v=1" alt="" /></div>
        <div><img src="https://imgs.bharatmatrimony.com/bmimgs/payments/payment-footer-verisign-icon.png?v=1" alt="" /></div>
       
      </div>
      <div className="border mx-auto w-[90%] my-8"></div>
      <div className="my-4 text-center">Copyright © 2025 All rights reserved.
      </div>
    </div>
  );
};

export default Upgrade;
