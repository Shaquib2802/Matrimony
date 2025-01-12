import React, { useState } from "react";
import Home from "./Home";
import Contact_Pol from "./Contact_Pol";
import Abuse from "./Abuse";
import Safe_Bottom from "./Safe_Bottom";

const Safe = () => {
  const [selectedPic, setSelectedPic] = useState("Home");

  const file = {
    Home: () => <Home />,
    Contact: () => <Contact_Pol />,
    Abuse: () => <Abuse />,
  };

  return (
    <div>
      <div className="bg-blue-50 pt-4 w-full px-32">
        <div className="  flex justify-between items-center p-2">
          <div>
            <img
              src="https://imgs.bharatmatrimony.com/bmimgs/bharatmatrimony-logo.png"
              alt="Bharat Matrimony Logo"
            />
          </div>
          <div className="text-[80%]">
            <span className="font-semibold">24x7 HELP:</span> INDIA
            +91-8144998877
          </div>
        </div>

        <div className="mt-5 bg-[#5E5D5D] flex text-white font-semibold text-sm">
          <div
            className={`w-20 h-9 text-center pt-2 border-r ${
              selectedPic === "Home" ? "bg-orange-500" : "hover:bg-orange-500"
            }`}
            onClick={() => setSelectedPic("Home")}
          >
            Home
          </div>
          <div
            className={`w-32 h-9 text-center pt-2 border-r ${
              selectedPic === "Contact"
                ? "bg-orange-500"
                : "hover:bg-orange-500"
            }`}
            onClick={() => setSelectedPic("Contact")}
          >
            Contact Police
          </div>
          <div
            className={`w-28 h-9 text-center pt-2 border-r ${
              selectedPic === "Abuse" ? "bg-orange-500" : "hover:bg-orange-500"
            }`}
            onClick={() => setSelectedPic("Abuse")}
          >
            Report Abuse
          </div>
        </div>

    
        <div className="mt-5">{file[selectedPic] && file[selectedPic]()}</div>
      </div>
      <Safe_Bottom />
    </div>
  );
};

export default Safe;
