import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HomeIcon from "@mui/icons-material/Home";

const HeaderDash = () => {
  return (
    <div className="w-[100%] shadow-lg top-0 sticky z-50 bg-white
    ">
      <div className="flex w-[90%]   gap-x-8 h-[16vh] mx-auto">
        <div className="w-[20%]">
          <img
            className="p-6"
            src="https://imgs.bharatmatrimony.com/bmimgs/new-logo/bharat-matrimony-logo.png"
            alt=""
          />
        </div>
        <div className="w-[90%]  flex justify-between py-5">
          <div className=" flex  py-2.5 ">
            <div>
              <HomeIcon className="text-green-600" />
            </div>
            <div className="mt-1.5 text-sm font-semibold text-green-600">Home</div>
          </div>
          <div className=" flex gap-x-0.5 py-3 ">
            <div>
              <img
                src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/bottom-navigation-matches.svg"
                alt=""
              />
            </div>
            <div className="mt-0.5 text-sm text-black">Matches</div>
          </div>
          <div className=" flex py-3 gap-x-0.5 ">
            <div>
              <img
                src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/bottom-navigation-mailbox.svg"
                alt=""
              />
            </div>
            <div className="mt-0.5 text-sm text-black">Mailbox</div>
          </div>
          <div className=" flex py-3 gap-x-0.5">
            <div>
              <img
                src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/bottom-navigation-chat.svg"
                alt=""
              />
            </div>
            <div className="mt-0.5 text-sm text-black">Messages</div>
          </div>
          <div className=" flex py-3 gap-x-0.5 ">
            <div>
              <img
                className="mt-0.5"
                src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/icon-generic-search.svg"
                alt=""
              />
            </div>
            <div className="mt-0.5 text-sm text-black">Search</div>
          </div>
          <div className=" flex py-3  gap-x-0.5">
            <div>
              <img className="mt-0.5"
                src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/bm-services/icon-generic-services.svg"
                alt=""
              />
            </div>
            <div className="mt-0.5 text-sm text-black">Services</div>
          </div>
          <div className=" flex py-3 gap-x-0.5">
            <div>
              <img className=""
                src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/bottom-navigation-notification.svg"
                alt=""
              />
            </div>
            <div className="mt-0.5 text-sm text-black">Notification</div>
          </div>
        </div>
        <div className="w-[10%]  flex pt-5 pl-  gap-x-2 ">
          <div>
            <img
              className="w-12 rounded-3xl"
              src="https://imgs.bharatmatrimony.com/webapp-assets/revamp-images/male-avatar-img-new.svg"
              alt=""
            />
          </div>
          <div>
            <KeyboardArrowDownIcon className="text-gray-500 !text-base mt-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDash;
