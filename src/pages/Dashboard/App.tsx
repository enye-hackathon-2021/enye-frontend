import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Section } from "./styles";
import styled from "styled-components";





const Dashboard = (props:any) => {
//   const [signedIn, setSignedIn] = useState(true);
  return (
    <Section className="dash w-full  h-screen flex bg-green-200">
      <Sidebar className="sidebar bg-green-500 h-full w-80 shadow-lg">
        <div className="logo w-full h-20 text-gray-700 bg-green-200 flex justify-center items-center shadow-xl">
          <h1 className="font-logo font-bold text-2xl shadow-xl">
            healthLodge
          </h1>
        </div>
        {/*  */}
        <div className="nav flex flex-col h-auto  p-4 py-8">
          <div className="link_item capitalize w-full h-11 px-4 active:bg-green-100 text-gray-700 font-bold font-robo text-xl rounded-lg flex items-center hover:bg-green-100 bg-green-200 hover:text-gray-800">
            <NavLink className="capitalize bg-green-200" to="">
              overview
            </NavLink>
          </div>
          <br />
          <span className="border w-full"></span>
          <div className="link_item capitalize w-full h-11 px-4 active:bg-green-100 text-gray-700 font-bold font-robo text-xl rounded-lg flex items-center hover:bg-green-100">
            <NavLink className="capitalize" to="">
              Schedules
            </NavLink>
          </div>

          <div className="link_item capitalize w-full h-11 px-4 active:bg-green-100 text-gray-700 font-bold font-robo text-xl rounded-lg flex items-center hover:bg-green-100">
            <NavLink className="capitalize" to="">
              Response
            </NavLink>
          </div>

          <div className="link_item capitalize w-full h-11 px-4 active:bg-green-100 text-gray-700 font-bold font-robo text-xl rounded-lg flex items-center hover:bg-green-100">
            <NavLink className="capitalize" to="">
              Settings
            </NavLink>
          </div>

          <br />
          <span className="border w-full"></span>

          <div className="link_item capitalize w-full h-11 mt-6 px-4 active:bg-green-100 text-gray-700 font-bold font-robo text-xl rounded-lg flex items-center hover:bg-green-100 ">
            <NavLink className="capitalize active:bg-green-200" to="/">
              log out
            </NavLink>
          </div>
        </div>
      </Sidebar>
      <div className="main bg-green-200 h-full w-full">
        <div className="w-ful h-20 flex justify-between text-gray-800 items-center shadow-lg">
          <h1 className="p_name text-xl font-semibold font-robo ml-14">
            Patient
          </h1>
          <h1 className="p_name text-xl font-semibold font-robo mr-14">
            Wallet bal__
          </h1>
        </div>
      </div>
    </Section>
  );
};

const Sidebar = styled.div`
box-shadow: 5px 2px 5px 5px #000;
`

export default Dashboard;
