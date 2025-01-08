import React from "react";
import Pro_Head from "./Pro_Head";
import { MdOutlineEdit } from "react-icons/md";
import Bottom_dash from "../Dash_Board/Bottom_dash";
import { useNavigate } from "react-router-dom";


const Edit = () => {
  return (
    <div className="w-[100%]">
      <Pro_Head />
      <div className="h-14 mt-1 bg-slate-50">
        <div className="flex justify-center items-center pt-3 gap-x-3">
          <div className="text-sm text-gray-500 font-semibold">
            Going Premium is the best way to find your better half faster
          </div>
          <div className="text-gray-500 font-bold border rounded-lg border-gray-500 text-[70%] p-1">
            UPGRADE NOW
          </div>
        </div>
      </div>
      <div className="flex justify-start m-3 gap-x-5  ">
        <div className="w-[18%] sticky top-20 bg-green-700 gap-y-5 h-[90vh] flex flex-col text-gray-100 font-semibold text-[80%]">
          <div className="flex justify-center gap-x-4 items-center mt-10 ">
            <div>
              <img
                src="//imgs.bharatmatrimony.com/bmimgs/desktop-images/pp-heart.svg"
                alt=""
              />
            </div>
            <div>PARTNER PREFERENCES</div>
          </div>
          <div className="mx-auto">Basics</div>
          <div className="mx-auto">Religious</div>
          <div className="mx-auto">Professional</div>
          <div className="mx-auto">Location</div>
          <div className="mx-auto">About My Partner</div>
        </div>
        <div className="w-[79%] border-2 shadow-lg p-8">
          <div className="text-xl font-semibold">Partner Preferences</div>
          <div className="mt-4 text-lg ">
            Matches recommended by us are based on{" "}
            <span className="font-semibold">Acceptable matches</span> criteria
            and at times might go slightly beyond your preferences.
          </div>
          <div className="mt-2 text-lg">
            Turn on "Compulsory" to get matches exactly as per your preferences.
          </div>
          <div className="text-gray-600 mt-2 text-[75%]">*Patent pending</div>
          <div className=" mt-10 flex items-center justify-start gap-x-5">
            <div>
              <img
                src="//imgs.bharatmatrimony.com/bmimgs/desktop-images/pp-basic-preferences.svg"
                alt=""
              />
            </div>
            <div className="text-xl font-semibold">Basic Preferences</div>
          </div>
          <div className=" w-[91%] ml-[9%] flex flex-col">
            <div className="flex border-b-2 p-2 justify-between items-center">
              <div className="flex flex-col">
                <div className="text-lg">Bride's Age</div>
                <div className="font-semibold">18 - 22 years</div>
              </div>
              <div>
                <MdOutlineEdit className="text-2xl text-gray-600" />
              </div>
            </div>
            <div className="flex border-b-2 p-2 mt-3 justify-between items-center">
              <div className="flex flex-col">
                <div className="text-lg">Height</div>
                <div className="font-semibold">
                  5 Ft 4 In- 5 Ft 3 In/137 Cms- 160 Cms
                </div>
              </div>
              <div>
                <MdOutlineEdit className="text-2xl text-gray-600" />
              </div>
            </div>
            <div className="flex border-b-2 p-2 mt-3 justify-between items-center">
              <div className="flex flex-col">
                <div className="text-lg">Marital Status</div>
                <div className="font-semibold">Never Married</div>
              </div>
              <div>
                <MdOutlineEdit className="text-2xl text-gray-600" />
              </div>
            </div>
            <div className="flex border-b-2 p-2 mt-3 justify-between items-center">
              <div className="flex flex-col">
                <div className="text-lg">Mother Tongue</div>
                <div className="font-semibold">Hindi</div>
              </div>
              <div>
                <MdOutlineEdit className="text-2xl text-gray-600" />
              </div>
            </div>
            <div className="flex border-b-2 p-2 mt-3 justify-between items-center">
              <div className="flex flex-col">
                <div className="text-lg">Physical Status</div>
                <div className="font-semibold">Normal</div>
              </div>
              <div>
                <MdOutlineEdit className="text-2xl text-gray-600" />
              </div>
            </div>
            <div className="flex border-b-2 p-2 mt-3 justify-between items-center">
              <div className="flex flex-col">
                <div className="text-lg">Eating Habits</div>
                <div className="font-semibold">Doesn't matter</div>
              </div>
              <div>
                <MdOutlineEdit className="text-2xl text-gray-600" />
              </div>
            </div>
            <div className="flex border-b-2 p-2 mt-3 justify-between items-center">
              <div className="flex flex-col">
                <div className="text-lg">Drinking Habits</div>
                <div className="font-semibold">Doesn't matter</div>
              </div>
              <div>
                <MdOutlineEdit className="text-2xl text-gray-600" />
              </div>
            </div>
            <div className="flex border-b-2 p-2 mt-3 justify-between items-center">
              <div className="flex flex-col">
                <div className="text-lg">Smoking Habits</div>
                <div className="font-semibold">Doesn't matter</div>
              </div>
              <div>
                <MdOutlineEdit className="text-2xl text-gray-600" />
              </div>
            </div>
          </div>
          <div className=" mt-10 flex items-center justify-start gap-x-5">
            <div>
              <img
                src="https://imgs.bharatmatrimony.com/bmimgs/desktop-images/pp-religious-preferences.svg"
                alt="NAN"
              />
            </div>
            <div className="text-xl font-semibold">Religious Preferences</div>
          </div>
          <div className=" w-[91%] ml-[9%] flex flex-col">
            <div className="flex border-b-2 p-2 mt-3 justify-between items-center">
              <div className="flex flex-col">
                <div className="text-lg">Religion</div>
                <div className="font-semibold">Muslim - Sunni</div>
              </div>
              <div>
                <MdOutlineEdit className="text-2xl text-gray-600" />
              </div>
            </div>
            <div className="flex border-b-2 p-2 mt-3 justify-between items-center">
              <div className="flex flex-col">
                <div className="text-lg"> Caste</div>
                <div className="font-semibold">Muslim - Sheikh</div>
              </div>
              <div>
                <MdOutlineEdit className="text-2xl text-gray-600" />
              </div>
            </div>
            <div className="flex border-b-2 p-2 mt-3 justify-between items-center">
              <div className="flex flex-col">
                <div className="text-lg">Star</div>
                <div className="font-semibold">Any</div>
              </div>
              <div>
                <MdOutlineEdit className="text-2xl text-gray-600" />
              </div>
            </div>
          </div>
          <div className=" mt-10 flex items-center justify-start gap-x-5">
            <div>
              <img
                src="https://imgs.bharatmatrimony.com/bmimgs/desktop-images/pp-professional-preferences.svg"
                alt="NAN"
              />
            </div>
            <div className="text-xl font-semibold">
              Professional Preferences
            </div>
          </div>
          <div className=" w-[91%] ml-[9%] flex flex-col">
            <div className="flex border-b-2 p-2 mt-3 justify-between items-center">
              <div className="flex flex-col">
                <div className="text-lg">Education</div>
                <div className="font-semibold">Any</div>
              </div>
              <div>
                <MdOutlineEdit className="text-2xl text-gray-600" />
              </div>
            </div>
            <div className="flex border-b-2 p-2 mt-3 justify-between items-center">
              <div className="flex flex-col">
                <div className="text-lg">Employed In</div>
                <div className="font-semibold">Any</div>
              </div>
              <div>
                <MdOutlineEdit className="text-2xl text-gray-600" />
              </div>
            </div>
            <div className="flex border-b-2 p-2 mt-3 justify-between items-center">
              <div className="flex flex-col">
                <div className="text-lg">Occupation</div>
                <div className="font-semibold">Any</div>
              </div>
              <div>
                <MdOutlineEdit className="text-2xl text-gray-600" />
              </div>
            </div>
            <div className="flex border-b-2 p-2 mt-3 justify-between items-center">
              <div className="flex flex-col">
                <div className="text-lg">Annual Income</div>
                <div className="font-semibold">Any</div>
              </div>
              <div>
                <MdOutlineEdit className="text-2xl text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Bottom_dash/>
    </div>
  );
};

export default Edit;
