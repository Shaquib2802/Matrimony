import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Component/Matrimony/Dash_Board/Dashboard";
import Home_Page from "./Component/Matrimony/Home_Page/Home_Page";
import Profile from "./Component/Matrimony/Profile/Profile";

const App = () => {
  return (
    <div className="">
      {/* <Home_Page/> */}
      {/* <Dashboard/> */}
      {/* <Profile /> */}
      {/* <Login/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home_Page />} />
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/pro" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
