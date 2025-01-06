import React from "react";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[100%] overflow-hidden shadow-lg">
      <div className="h-[18vh] w-[100%] flex border-2  md:px-14 items-center mx-auto  justify-between ">
        <div className="flex flex-col justify-start  px-6">
          <div className="text-[70%] text-gray-500">
            From Matrimony.com Group
          </div>
          <div>
            <img
              className="w-[80%] "
              src="https://imgs.bharatmatrimony.com/bmimgs/bharatmatrimony-logo.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex  justify-around md:gap-x-2 w-[50%] md:w-[35%]">
          <div className="font-semibold text-sm mt-1 hidden md:block">
            Already a member
          </div>
          <button
            onClick={() => navigate("/dash")}
            className="text-xs text-orange-500 font-semibold border border-orange-400 rounded-md py-1  w-16 md:w-24"
          >
            LOG IN
          </button>
          <div className="flex w-[30%] justify-center gap-x-1.5">
            <div>
              <QuestionMarkIcon className="border-2 border-gray-400 text-gray-400 rounded-3xl !text-2xl" />
            </div>
            <div className="text-sm mt-1">Help</div>
            <div>
              <IoIosArrowDown className="mt-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
