import React from "react";
import { TbEyeFilled } from "react-icons/tb";
import { MdEdit } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";
import Bottom_dash from "../Dash_Board/Bottom_dash";
import { useNavigate } from "react-router-dom";

const Body_Pro = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[100%] h-[100%] pt-10 bg-gray-100">
      <div className="flex mx-32    gap-x-5 ">
        <div className="w-[75%]">
          <div className="border-b-4 border-gray-300  bg-white  ">
            <div className="flex w-[100%] p-5 gap-x-5">
              <div className="w-[23%] border bg-gray-100 ">
                <div className="flex flex-col ">
                  <div>
                    <img
                      className="w-[100%]"
                      src="https://imgs.bharatmatrimony.com/bmimgs/add-photo-Ntxt-m-150-avatar.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div onClick={()=> navigate("/pho")} className="text-center cursor-pointer text-sm p-1 text-blue-500">
                  Add / Edit Photos
                </div>
              </div>
              <div className="w-[54%]  flex flex-col">
                <div className="font-bold text-2xl">Mohd Arfat</div>
                <div className="text-sm text-gray-500 font-semibold">
                  Profile created for My Self
                </div>
                <div className="text-sm mt-0.5 tracking-wide">
                  22 Yrs, 5 Ft 3 In / 160 Cms
                </div>
                <div className="text-sm mt-2">
                  Muslim - Sunni, Muslim - Sheikh
                </div>
                <div className="text-sm mt-2">
                  Lucknow, Uttar Pradesh, India
                </div>
                <div className="text-sm mt-2">BCA, Software Professional</div>
                <div className="mt-2 text-sm">
                  <span className="font-semibold">+91-8795376971</span> ({" "}
                  <span className="text-green-500">Verified</span> ){" "}
                  <span className="text-blue-500">Edit Mobile No</span>{" "}
                </div>
              </div>
              <div className="w-[23%] flex flex-col mt-5">
                <div className="text-sm text-center text-gray-600">
                  How your profile looks to others
                </div>
                <div className="flex border rounded-md border-gray-200 items-center justify-around mt-2">
                  <div>
                    <TbEyeFilled className="text-2xl text-blue-700" />
                  </div>
                  <div className="text-blue-600 cursor-pointer" onClick={()=> navigate("/prev")}>Profile Preview</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#567CBD] h-[35vh] p-5 my-10">
            <div className="text-white text-xl font-semibold">
              Photos are the first thing that prospects look at.
            </div>
            <div className="text-white">
              Add your photo and get 10 times more responses!
            </div>
            <div className="flex mt-5 gap-x-3 ">
              <div className="border border-black rounded-md text-sm text-white py-1 px-2">
                Skip
              </div>
              <div className="border rounded-md border-white text-white font-semibold bg-orange-400 p-1 text-sm">
                Upload Photos Now
              </div>
            </div>
          </div>
          <div className="text-3xl text-green-700">Personal Information</div>
          <div className="border my-3"></div>
          <div className="bg-white flex flex-col border-b-4 my-5  p-5">
            <div className="flex justify-between">
              <div className="text-xl text-gray-600">In my own words</div>
              <div className="flex bg-blue-500 p-1 items-center gap-x-1">
                <div>
                  <MdEdit className="mt-0.5  text-xs text-white" />
                </div>
                <div className="text-xs text-white">Edit</div>
              </div>
            </div>
            <div className="text-sm text-gray-700 mt-5">
              I am currently working in the private sector as a software
              professional, after having completed my bachelor's degree. I come
              from a middle class family with traditional family values. We
              belong to joint family currently living in Lucknow.
            </div>
            <div></div>
          </div>
          <div className="bg-white flex flex-col border-b-4 my-5  p-5">
            <div className="flex justify-between">
              <div className="text-xl text-gray-600">Basic Details</div>
              <div className="flex bg-blue-500 p-1 items-center gap-x-1">
                <div>
                  <MdEdit className="mt-0.5  text-xs text-white" />
                </div>
                <div className="text-xs text-white">Edit</div>
              </div>
            </div>

            <div className="flex  mt-4">
              <div className="flex flex-col w-[50%] gap-y-4">
                <div className="flex  gap-x-4   ">
                  <div className="text-gray-600 text-sm tracking-wide w-[35%]">
                    Profile created for
                  </div>
                  <div className="text-gray-800 text-sm tracking-wide">
                    : My Self
                  </div>
                </div>
                <div className="flex  gap-x-4 ">
                  <div className="text-gray-600 text-sm tracking-wide w-[35%]">
                    Body Type
                  </div>
                  <div className="flex items-center text-blue-600">
                    <div className=" text-sm tracking-wide font-semibold ">
                      : Add Body Type
                    </div>
                    <div>
                      <IoMdArrowDropright className="mt-0.5 " />
                    </div>
                  </div>
                </div>
                <div className="flex  gap-x-4 ">
                  <div className="text-gray-600 text-sm tracking-wide w-[35%]">
                    Physical Status
                  </div>
                  <div className="text-gray-800 text-sm tracking-wide">
                    : Normal
                  </div>
                </div>
                <div className="flex  gap-x-4 ">
                  <div className="text-gray-600 text-sm tracking-wide w-[35%]">
                    Weight
                  </div>
                  <div className="flex items-center text-blue-600">
                    <div className=" text-sm tracking-wide font-semibold ">
                      : Add Weight
                    </div>
                    <div>
                      <IoMdArrowDropright className="mt-0.5 " />
                    </div>
                  </div>
                </div>
                <div className="flex  gap-x-4 ">
                  <div className="text-gray-600 text-sm tracking-wide w-[35%]">
                    Marital Status
                  </div>
                  <div className="text-gray-800 text-sm tracking-wide">
                    : Never Married
                  </div>
                </div>
                <div className="flex  gap-x-4 ">
                  <div className="text-gray-600 text-sm tracking-wide w-[35%]">
                    Drinking Habits
                  </div>
                  <div className="flex items-center text-blue-600">
                    <div className=" text-sm tracking-wide font-semibold ">
                      : Add Drinking Habits
                    </div>
                    <div>
                      <IoMdArrowDropright className="mt-0.5 " />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-[50%] gap-y-4">
                <div className="flex  gap-x-4   ">
                  <div className="text-gray-600 text-sm tracking-wide w-[35%]">
                    Name{" "}
                  </div>
                  <div className="text-gray-800 text-sm tracking-wide">
                    : Mohd Arfat
                  </div>
                </div>
                <div className="flex  gap-x-4 ">
                  <div className="text-gray-600 text-sm tracking-wide w-[35%]">
                    Age
                  </div>

                  <div className=" text-sm text-gray-700 tracking-wide font-semibold ">
                    : 22 Years
                  </div>
                </div>
                <div className="flex  gap-x-4 ">
                  <div className="text-gray-600 text-sm tracking-wide w-[35%]">
                    Height
                  </div>
                  <div className="text-gray-800 text-sm tracking-wide">
                    : 5 Ft 3 In / 160 Cms
                  </div>
                </div>
                <div className="flex  gap-x-4 ">
                  <div className="text-gray-600 text-sm tracking-wide w-[35%]">
                    Mother Tongue
                  </div>

                  <div className=" text-sm tracking-wide font-semibold ">
                    : Hindi
                  </div>
                </div>

                <div className="flex  gap-x-4 ">
                  <div className="text-gray-600 text-sm tracking-wide w-[35%]">
                    Eating Habits
                  </div>
                  <div className="flex items-center text-blue-600">
                    <div className=" text-sm tracking-wide font-semibold ">
                      : Add Eating Habits
                    </div>
                    <div>
                      <IoMdArrowDropright className="mt-0.5 " />
                    </div>
                  </div>
                </div>
                <div className="flex  gap-x-4 ">
                  <div className="text-gray-600 text-sm tracking-wide w-[35%]">
                    Smoking Habits{" "}
                  </div>
                  <div className="flex items-center text-blue-600">
                    <div className=" text-sm tracking-wide font-semibold ">
                      : Add Smoking Habits
                    </div>
                    <div>
                      <IoMdArrowDropright className="mt-0.5 " />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white flex flex-col border-b-4 my-5  p-5">
            <div className="flex justify-between">
              <div className="text-xl text-gray-600">Religion Information</div>
              <div className="flex bg-blue-500 p-1 items-center gap-x-1">
                <div>
                  <MdEdit className="mt-0.5  text-xs text-white" />
                </div>
                <div className="text-xs text-white">Edit</div>
              </div>
            </div>

            <div className="flex  mt-4">
              <div className="flex flex-col w-[50%] gap-y-4">
                <div className="flex  gap-x-4   ">
                  <div className="text-gray-600 text-sm tracking-wide w-[35%]">
                    Religion
                  </div>
                  <div className="text-gray-800 text-sm tracking-wide">
                    : Muslim - Sunni
                  </div>
                </div>

                <div className="flex  gap-x-4 ">
                  <div className="text-gray-600 text-sm tracking-wide w-[35%]">
                    Caste / Sub Caste
                  </div>
                  <div className="text-gray-800 text-sm tracking-wide">
                    : Sheikh - Not Specified
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-[50%] gap-y-4">
                <div className="flex  gap-x-4 ">
                  <div className="text-gray-600 text-sm tracking-wide w-[35%]">
                    Time of Birth
                  </div>
                  <div className="flex items-center text-blue-600">
                    <div className=" text-sm tracking-wide font-semibold ">
                      : Add Eating Habits
                    </div>
                    <div>
                      <IoMdArrowDropright className="mt-0.5 " />
                    </div>
                  </div>
                </div>
                <div className="flex  gap-x-4 ">
                  <div className="text-gray-600 text-sm tracking-wide w-[35%]">
                    Smoking Habits{" "}
                  </div>
                  <div className="flex items-center text-blue-600">
                    <div className=" text-sm tracking-wide font-semibold ">
                      : Add Smoking Habits
                    </div>
                    <div>
                      <IoMdArrowDropright className="mt-0.5 " />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white flex flex-col border-b-4 my-5  p-5">
            <div className="flex justify-between">
              <div className="text-xl text-gray-600">Groom's Location</div>
              <div className="flex bg-blue-500 p-1 items-center gap-x-1">
                <div>
                  <MdEdit className="mt-0.5  text-xs text-white" />
                </div>
                <div className="text-xs text-white">Edit</div>
              </div>
            </div>

            <div className="flex  mt-4">
              <div className="flex flex-col w-[50%] gap-y-4">
                <div className="flex  gap-x-4   ">
                  <div className="text-gray-600 text-sm tracking-wide w-[35%]">
                    Country
                  </div>
                  <div className="text-gray-800 text-sm tracking-wide">
                    : India
                  </div>
                </div>

                <div className="flex  gap-x-4 ">
                  <div className="text-gray-600 text-sm tracking-wide w-[35%]">
                    State
                  </div>
                  <div className="text-gray-800 text-sm tracking-wide">
                    : Uttar Pradesh
                  </div>
                </div>
                <div className="flex  gap-x-4 ">
                  <div className="text-gray-600 text-sm tracking-wide w-[35%]">
                    Ancestral Origin
                  </div>
                  <div className="text-gray-800 text-sm tracking-wide">
                    : Uttar Pradesh
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-[50%] gap-y-4">
                <div className="flex  gap-x-4 ">
                  <div className="text-gray-600 text-sm tracking-wide w-[35%]">
                    City
                  </div>

                  <div className=" text-gray-600 text-sm tracking-wide font-semibold ">
                    : Lucknow
                  </div>
                </div>
                <div className="flex  gap-x-4 ">
                  <div className="text-gray-600 text-sm tracking-wide w-[35%]">
                    Citizenship
                  </div>

                  <div className=" text-gray-600 text-sm tracking-wide font-semibold ">
                    : India
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white flex flex-col border-b-4 my-5  p-5">
            <div className="flex justify-between">
              <div className="text-xl text-gray-600">
                Professional Information
              </div>
              <div className="flex bg-blue-500 p-1 items-center gap-x-1">
                <div>
                  <MdEdit className="mt-0.5  text-xs text-white" />
                </div>
                <div className="text-xs text-white">Edit</div>
              </div>
            </div>

            <div className="flex  mt-4">
              <div className="flex flex-col w-[50%] gap-y-2">
                <div className="flex  gap-x-4   ">
                  <div className="text-gray-600 text-sm tracking-wide w-[40%]">
                    Education
                  </div>
                  <div className="text-gray-800 text-sm tracking-wide">
                    : BCA
                  </div>
                </div>

                <div className="flex  gap-x-4 ">
                  <div className="text-gray-600 text-sm tracking-wide w-[40%]">
                    Education in Detail
                  </div>
                  <div className="text-gray-800 text-sm tracking-wide">
                    : Not Specified
                  </div>
                </div>
                <div className="flex  gap-x-4 ">
                  <div className="text-gray-600 text-sm tracking-wide w-[40%]">
                    College / Institution
                  </div>
                  <div className="text-gray-800 text-sm tracking-wide">
                    : Not Specified
                  </div>
                </div>
                <div className="flex  gap-x-4   ">
                  <div className="text-gray-600 text-sm tracking-wide w-[40%]">
                    Employed in
                  </div>
                  <div className="text-gray-800 text-sm tracking-wide">
                    : Private Sector
                  </div>
                </div>

                <div className="flex  gap-x-4 ">
                  <div className="text-gray-600 text-sm tracking-wide w-[40%]">
                    Occupation
                  </div>
                  <div className="text-gray-800 text-sm tracking-wide">
                    : Software Professional
                  </div>
                </div>

                <div className="flex  gap-x-4   ">
                  <div className="text-gray-600 text-sm tracking-wide w-[40%]">
                    Occupation in Detail
                  </div>
                  <div className="text-gray-800 text-sm tracking-wide">
                    : Not Specified
                  </div>
                </div>

                <div className="flex  gap-x-4 ">
                  <div className="text-gray-600 text-sm tracking-wide w-[40%]">
                    Organization
                  </div>
                  <div className="text-gray-800 text-sm tracking-wide">
                    : Not Specified
                  </div>
                </div>
                <div className="flex  gap-x-4 ">
                  <div className="text-gray-600 text-sm tracking-wide w-[40%]">
                    Annual Income
                  </div>
                  <div className="text-gray-800 text-sm tracking-wide">
                    : Rs. 4 - 5 Lakhs
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white flex flex-col border-b-4 my-5  p-5">
            <div className="flex justify-between">
              <div className="text-xl text-gray-600">About My Family</div>
              <div className="flex bg-blue-500 p-1 items-center gap-x-1">
                <div>
                  <MdEdit className="mt-0.5  text-xs text-white" />
                </div>
                <div className="text-xs text-white">Edit</div>
              </div>
            </div>
            <div className="text-sm text-gray-800 mt-4">Not Specified</div>
          </div>
          <div className="bg-white flex flex-col border-b-4 my-5  p-5">
            <div className="flex justify-between">
              <div className="text-xl text-gray-600">
                Hobbies and Interests{" "}
              </div>
              <div className="flex bg-blue-500 p-1 items-center gap-x-1">
                <div>
                  <MdEdit className="mt-0.5  text-xs text-white" />
                </div>
                <div className="text-xs text-white">Edit</div>
              </div>
            </div>
            <div className="text-sm text-gray-800 mt-4">Not Specified</div>
          </div>
        </div>
        <div className=" w-[25%] bg-gray-100  ">
          <div className="flex flex-col border bg-white border-b-4 border-gray-300">
            <div className="flex p-4 gap-x-2 items-center">
              <div className="">
                <img
                  src="https://imgs.bharatmatrimony.com/bmimgs/edit-add-partnerpref.gif"
                  alt=""
                />
              </div>
              <div className="">
                <div className="text-lg">Add Partner</div>
                <div className="text-lg -mt-2">Preference</div>
                <div className="text-sm">To find your perfect match</div>
              </div>
            </div>
            <div className="bg-gray-100 text-lg text-center font-semibold text-blue-500">
              Add Partner Preferences ►
            </div>
          </div>
          <div className="flex flex-col mt-3 border bg-white border-b-4 border-gray-300">
            <div className="flex p-4 gap-x-2 items-center">
              <div className="">
                <img
                  src="https://imgs.bharatmatrimony.com/bmimgs/edit-add-horoscope.gif"
                  alt=""
                />
              </div>
              <div className=" ">
                <div className="text-lg">Add Horoscope</div>
                <div className="text-sm">It is simple and absolutely</div>
                <div className="text-">FREE!</div>
              </div>
            </div>
            <div className="bg-gray-100 text-lg text-center font-semibold text-blue-500">
              Add Horoscope ►
            </div>
          </div>
          <div className="bg-white text-sm text-center p-1 mt-3 text-blue-600 font-semibold">View More ▼</div>
        </div>
      </div>
      <Bottom_dash />
    </div>
  );
};

export default Body_Pro;
