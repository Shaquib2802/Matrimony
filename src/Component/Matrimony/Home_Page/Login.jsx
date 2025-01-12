import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectOption, setSelectOption] = useState("Matrimony profile for");

  const options = [
    "Myself",
    "Daughter",
    "Son",
    "Sister",
    "Brother",
    "Relative",
    "Friend",
  ];

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectOption(option);
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false); 
  };
  const navigate = useNavigate();
  return (
    <div className="w-[100%]">
      <div
        className=" md:w-[70%] md:ml-[80%] border bg-green-600 rounded-3xl mx-auto   "
        onClick={handleClose}
      >
        <div className="text-white text-center font-semibold text-lg md:text-2xl py-2 md:py-4">
          Create a Matrimony Profile
        </div>
        <div>
          <form
            className="bg-white flex flex-col border border-gray-600 rounded-3xl pb-5 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center font-semibold md:font-normal text-lg md:text-xl py-2 md:py-7">
              Find your perfect match
            </div>
            <div className="relative w-[90%] md:w-[80%]  mx-auto ">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleDropdown(e);
                }}
                className="w-[100%] px-4 py-1 md:py-2 text-left bg-white border  border-black  rounded-md focus:outline-none"
              >
                <div className="flex  justify-between">
                  <div className=" font-normal">{selectOption}</div>
                  <div>
                    <IoIosArrowDown className="mt-1.5" />
                  </div>
                </div>
              </button>

              {isOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-black  rounded-b-lg shadow-lg">
                  <div className="grid grid-cols-3 gap-2 p-2">
                    {options.map((option, index) => (
                      <button
                        key={index}
                        type="button"
                        className="px-2 py-1 text-sm text-gray-700 font-semibold  rounded hover:text-orange-400 focus:outline-none"
                        onClick={() => handleOptionClick(option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <input
              type="text"
              className=" mt-5 md:mt-10 w-[90%] md:w-[80%] mx-auto border border-black placeholder:text-black pl-3 p-1 md:p-2 rounded-lg outline-none  "
              placeholder=" Enter Name"
            />
            <div className="flex w-[90%] md:w-[80%] mx-auto mt-5 md:mt-10 justify-between">
              <div className="w-[20%] flex border border-black rounded-lg justify-between items-center  p-1 md:p-1">
                <div className="">+91</div>
                <div>
                  <IoIosArrowDown className="mt-1" />
                </div>
              </div>
              <div className="w-[70%] ">
                <input
                  type="tel"
                  placeholder=" Enter Number"
                  className=" border border-black placeholder:text-black pl-3 p-1 md:p-2 rounded-lg outline-none w-[100%] "
                />
              </div>
            </div>
            <button
            onClick={()=> navigate("/dash")}
              type="submit"
              className="text-white bg-orange-500 w-[90%] md:w-[80%] p-2 mx-auto rounded-lg mt-5 md:mt-10 font-semibold"
            >
              REGISTER FREE
              <TrendingFlatIcon className="ml-2" />
            </button>
            <div className="text-xs text-gray-600 text-center  mt-5 w-[100%] ">
              *By clicking register free, I agree to the T&C and Privacy Policy
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
