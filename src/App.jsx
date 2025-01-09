import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Component/Matrimony/Dash_Board/Dashboard";
import Home_Page from "./Component/Matrimony/Home_Page/Home_Page";
import Profile from "./Component/Matrimony/Profile/Profile";
import Edit from "./Component/Matrimony/Profile/Edit";
import Verify from "./Component/Matrimony/Profile/Verify";
import Help from "./Component/Matrimony/Profile/Help";

const App = () => {
  return (
    <div className="">
      {/* <Home_Page/> */}
      {/* <Dashboard/> */}
      {/* <Profile /> */}
      {/* <Login/> */}
      {/* <Body_Edit/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home_Page />} />
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/pro" element={<Profile />} />
          <Route path="/pre" element={<Edit />} />
          <Route path="/ver" element={<Verify/>} />
          <Route path="/help" element={<Help/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
