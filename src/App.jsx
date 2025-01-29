import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Component/Matrimony/Dash_Board/Dashboard";
/* import Hover from "./Component/Matrimony/Dash_Board/Hover"; */
import Upgrade from "./Component/Matrimony/Dash_Board/Upgrade";
import Home_Page from "./Component/Matrimony/Home_Page/Home_Page";
import Prime_Header from "./Component/Matrimony/Prime/Prime_Header";
import Edit from "./Component/Matrimony/Profile/Edit";
import Help from "./Component/Matrimony/Profile/Help";
import Profile from "./Component/Matrimony/Profile/Profile";
import Safe from "./Component/Matrimony/Profile/Safe";
import Setting from "./Component/Matrimony/Profile/Setting";
import Verify from "./Component/Matrimony/Profile/Verify";
import Photo from "./Component/Matrimony/Dash_Board/Photo";
import Preview from "./Component/Matrimony/Profile/Preview";
import Matches from "./Component/Matrimony/NavBar/Matches";
import Form_admin from "./Component/Matrimony/Admin/Form_admin";
import Admin_dash from "./Component/Matrimony/Admin/Admin_dash";

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
          <Route path="/ver" element={<Verify />} />
          <Route path="/help" element={<Help />} />
          <Route path="/safe" element={<Safe />} />
          <Route path="/prime" element={<Prime_Header />} />
          <Route path="/set" element={<Setting />} />
          <Route path="/upg" element={<Upgrade />} />
          <Route path="/pho" element={<Photo />} />
          <Route path="/prev" element={<Preview />} />
          <Route path="/mat" element={<Matches />} />
          <Route path="/adm" element={<Form_admin/>} />
          <Route path="/adm_dash" element={<Admin_dash/>} />
        </Routes>
      </BrowserRouter>

      {/* <Safe/> */}
      {/* <Home/> */}
      {/* <Contact_Pol/> */}
      {/* <Abuse/> */}
      {/* <Prime_Header/> */}
    </div>
  );
};

export default App;
