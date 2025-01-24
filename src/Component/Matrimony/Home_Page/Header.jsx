import React, { useState } from "react";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { IoIosArrowDown } from "react-icons/io";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Login_Post } from "../../Service/GetOTP";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [data, setData] = useState({ mobile: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Otp();
    console.log(data);
  };

  const Otp = async () => {
    const data1 = await Login_Post(data);
    console.log(data1, "Data11");
  };
  return (
    <div className="w-[100%] overflow-hidden shadow-lg">
      <div className="h-[18vh] w-[100%] flex border-2 md:px-14 items-center mx-auto justify-between">
        <div className="flex flex-col justify-start px-6">
          <div className="text-[70%] text-gray-500">
            From Matrimony.com Group
          </div>
          <div>
            <img
              className="w-[80%]"
              src="https://imgs.bharatmatrimony.com/bmimgs/bharatmatrimony-logo.png"
              alt="Bharat Matrimony"
            />
          </div>
        </div>
        <div className="flex justify-around md:gap-x-2 w-[50%] md:w-[35%]">
          <div className="font-semibold text-sm mt-1 hidden md:block">
            Already a member
          </div>
          <button
            onClick={handleOpen}
            className="text-xs text-orange-500 font-semibold border border-orange-400 rounded-md py-1 w-16 md:w-24"
          >
            LOG IN
          </button>
          {open && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              onClick={handleClose}
            >
              <div
                className="bg-white w-[90%] md:w-[40%] border rounded-2xl p-6 relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
                <div className="flex gap-x-2">
                  <div onClick={handleClose}>
                    <ArrowBackIcon />
                  </div>
                  <div className="font-semibold text-xl">Login with OTP</div>
                </div>
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col mx-auto mt-6"
                >
                  <div>
                    <img
                      className="mx-auto"
                      src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/login-revamp/login-page-icon.svg"
                      alt="Login Icon"
                    />
                  </div>
                  <div className="text-center mt-7 font-semibold text-lg w-[85%] mx-auto">
                    Enter your registered mobile number and we will send you an
                    OTP for login.
                  </div>
                  <div className="w-[85%] my-5 border border-black rounded-md flex mx-auto">
                    <div className="w-[25%] bg-gray-100 rounded-md flex items-center gap-x-1.5 p-1 justify-center">
                      <div className="border w-[20%] h-[20%]">
                        <img
                          className="w-[90%] -mt-0.5"
                          src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/country-flags/INDIA.svg"
                          alt="India Flag"
                        />
                      </div>
                      <div className="text-sm font-semibold">+91</div>
                      <div>
                        <KeyboardArrowDownIcon />
                      </div>
                    </div>
                    <div className="w-[75%] p-2">
                      <input
                        type="number"
                        name="mobile"
                        onChange={handleChange}
                        value={data.mobile}
                        placeholder="Enter mobile number"
                        className="outline-none placeholder:outline-none bg-white border-none ml-1 w-full"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="p-1 border bg-blue-700 font-semibold text-white hover:bg-blue-800 rounded-2xl w-[85%] mx-auto"
                  >
                    Generate OTP
                  </button>
                  <div className="font-semibold mx-auto text-sm my-4 text-center text-orange-400">
                    Login with password
                  </div>
                  <div className="border-dashed border-gray-300 w-[85%] mx-auto border"></div>
                  <div className="mt-4 text-sm font-semibold text-center mx-auto">
                    Need Help in Login? Call +91 8144998877
                  </div>
                </form>
              </div>
            </div>
          )}
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
