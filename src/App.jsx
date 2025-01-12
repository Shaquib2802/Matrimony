import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Component/Matrimony/Dash_Board/Dashboard";
import Home_Page from "./Component/Matrimony/Home_Page/Home_Page";
import Profile from "./Component/Matrimony/Profile/Profile";
import Edit from "./Component/Matrimony/Profile/Edit";
import Verify from "./Component/Matrimony/Profile/Verify";
import Help from "./Component/Matrimony/Profile/Help";
import Safe from "./Component/Matrimony/Profile/Safe";
import Home from "./Component/Matrimony/Profile/Home";
import Contact_Pol from "./Component/Matrimony/Profile/Contact_Pol";
import Safe_Bottom from "./Component/Matrimony/Profile/Safe_Bottom";
import Abuse from "./Component/Matrimony/Profile/Abuse";

const App = () => {
  return (
    <div className="">
      {/* <Home_Page/> */}
      {/* <Dashboard/> */}
      {/* <Profile /> */}
      {/* <Login/> */}
      {/* <Body_Edit/> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home_Page />} />
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/pro" element={<Profile />} />
          <Route path="/pre" element={<Edit />} />
          <Route path="/ver" element={<Verify/>} />
          <Route path="/help" element={<Help/>} />
        </Routes>
      </BrowserRouter> */}
      <Safe/>
      {/* <Home/> */}
      {/* <Contact_Pol/> */}
      {/* <Abuse/> */}
      
     
    </div>
  );
};

export default App;
