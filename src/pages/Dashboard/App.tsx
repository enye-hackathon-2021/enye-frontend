import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Section } from "./styles";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Overview from "../../components/Patient/Overview";
import Response from "../../components/Patient/Response";
import Schedules from "../../components/Patient/Schedules";
import Settings from "../../components/Patient/Settings";
import DocOverview from "../../components/Doctor/Overview";

const user = {
  // role: "",
  // password: "",
  // email: "",
  // name: "",
  // gender: "",
  // age: 0,
  // field: "",
  // experienceLevel: "",
};

const Dashboard = ({ loggedUser }: any) => {
  //   const [signedIn, setSignedIn] = useState(true);

  const { userType } = useSelector(({ toggles }: any) => toggles);
  // console.log(userType);

  const dispatch = useDispatch();

  const [state, setState] = useState({
    overview: true,
    schedules: false,
    response: false,
    settings: false,
  });

  function logOut() {
    localStorage.clear();
    dispatch({ type: "SIGN_IN_TOGGLE", payload: false });
  }

  const handleOverviewDisplay = () => {
    setState({
      overview: true,
      schedules: false,
      response: false,
      settings: false,
    });
  };

  const handleResponseDisplay = () => {
    setState({
      overview: false,
      schedules: false,
      response: true,
      settings: false,
    });
  };

  const handleSchedulesDisplay = () => {
    setState({
      overview: false,
      schedules: true,
      response: false,
      settings: false,
    });
  };

  const handleSettingsDisplay = () => {
    setState({
      overview: false,
      schedules: false,
      response: false,
      settings: true,
    });
  };

  return (
    <Section className="dash w-full h-screen flex bg-green-200 text-g">
      <Sidebar className="sidebar bg-green-500 h-full w-80">
        <NavLink
          to="/"
          className="logo w-full h-20 text-green-700 bg-green-50 flex justify-center items-center shadow-xl"
        >
          <h1 className="font-logo font-bold text-2xl">healthLodge</h1>
        </NavLink>
        {/*  */}

        <div className="nav  mt-11 flex flex-col h-auto  p-4 py-8">
          <Nav
            active = {state.overview}
            onClick={handleOverviewDisplay} 
            className="link_item capitalize w-full h-11 px-4 active:bg-green-100 text-gray-700 font-bold font-robo text-lg rounded-lg flex items-center hover:bg-green-400 hover:text-gray-800"
          >
            <div
              className="capitalize text-white active:text-black nav"
            >
              Overview
            </div>
          </Nav>
          <br />
          <span className="border border-gray-300 w-full"></span>
          <Nav 
            onClick={handleSchedulesDisplay} 
            className="link_item capitalize w-full h-11 px-4 active:bg-green-100 text-gray-700 font-bold font-robo text-lg rounded-lg flex items-center hover:bg-green-400"
            active = {state.schedules}  
          >
            <div
              className="capitalize text-white active:text-black nav"
            >
              Schedules
            </div>
          </Nav>

          <Nav 
            onClick={handleResponseDisplay} 
            className="link_item capitalize w-full h-11 px-4 active:bg-green-100 text-gray-700 font-bold font-robo text-lg rounded-lg flex items-center hover:bg-green-400"
            active = {state.response}  
          >
            <div
              className="capitalize text-white active:text-black nav"
            >
              {userType === "doctor" ? " Complaint" : "Response"}
            </div>
          </Nav>

          <Nav 
            onClick={handleSettingsDisplay} 
            className="link_item capitalize w-full h-11 px-4 active:bg-green-100 text-gray-700 font-bold font-robo text-lg rounded-lg flex items-center hover:bg-green-400"
            active = {state.settings}  
          >
            <div
              className="capitalize text-white active:text-black nav"
            >
              Settings
            </div>
          </Nav>

          <br />
          <span className="border border-gray-300 w-full"></span>

          <div className="link_item capitalize w-full h-11 mt-6 px-4  text-gray-700 font-bold font-robo text-lg rounded-lg flex items-center hover:bg-green-400 ">
            <button
              onClick={logOut}
              className="capitalize active:bg-green-200 text-white"
            >
              log out
            </button>
          </div>
        </div>
      </Sidebar>
      <div className="main bg-green-50 h-full w-full">
        <div className="w-full h-20 border flex justify-between text-gray-800 items-center shadow-nav">
          <div className="p_name flex items-center text-2xl font-semibold font-robo ml-14">
            <h1>{loggedUser.name}</h1>{" "}
            <p className="text-green-300 text-sm ml-2">
              <i>{userType}</i>
            </p>
          </div>
          <h1 className="p_name text-xl font-semibold font-robo mr-14">
            Wallet bal__
          </h1>
        </div>
        <div className="section_route w-full h-full p-8 flex">
          <Lodge>
            {state.overview === true &&
              (userType === "patient" ? <Overview /> : <DocOverview />)}
            {state.response === true && <Response />}

            {state.schedules === true && <Schedules />}
            {state.settings === true && <Settings />}
            {/* {state.settings === true && } */}
          </Lodge>

          <Session className="lodge mt-4 border p-2 shadow-inner">
            <h1 className="title">Scheduled Sessions</h1>
            <div className="w-full p-1 my-1 ">
              Doctors are online, schedule a session now.
            </div>
            {[1, 1, 1, 1, 1, 1].map((it, index) => (
              <div className="rounded-md p-2 my-1 w-full h-14 key = {index} flex items-center">
                <div className="rounded-lg h-6  w-70% bg-green-100"></div>
                <div className="rounded-full h-6  w-11 bg-green-100 ml-3"></div>
              </div>
            ))}
          </Session>
        </div>
      </div>
    </Section>
  );
};

const Sidebar = styled.div`
  box-shadow: 5px 2px 5px 5px #000;

  .nav {
    cursor: pointer;
  }
`;

const Lodge = styled.section`
  width: 70%;
`;

const Session = styled.section`
  width: 30%;
`;

const Nav:any = styled.div`
  background: ${({active}: any) => active && "rgba(0,128,0,.3)"};

`

export default Dashboard;
