import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Section } from "./styles";
import styled from "styled-components";
import { useDispatch } from "react-redux";

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

  const dispatch = useDispatch();


  

  function logOut() {
    localStorage.clear();
    dispatch({ type: "SIGN_IN_TOGGLE", payload: false });
  }

  return (
    <Section className="dash w-full  h-screen flex bg-green-200">
      <Sidebar className="sidebar bg-green-500 h-full w-80">
        <div className="logo w-full h-20 text-green-700 bg-green-50 flex justify-center items-center shadow-xl">
          <h1 className="font-logo font-bold text-2xl">healthLodge</h1>
        </div>
        {/*  */}
        <div className="nav flex flex-col h-auto  p-4 py-8">
          <div className="link_item capitalize w-full h-11 px-4 active:bg-green-100 text-gray-700 font-bold font-robo text-lg rounded-lg flex items-center hover:bg-green-100 bg-green-200 hover:text-gray-800">
            <NavLink className="capitalize bg-green-200" to="">
              overview
            </NavLink>
          </div>
          <br />
          <span className="border w-full"></span>
          <div className="link_item capitalize w-full h-11 px-4 active:bg-green-100 text-gray-700 font-bold font-robo text-lg rounded-lg flex items-center hover:bg-green-100">
            <NavLink className="capitalize" to="">
              Schedules
            </NavLink>
          </div>

          <div className="link_item capitalize w-full h-11 px-4 active:bg-green-100 text-gray-700 font-bold font-robo text-lg rounded-lg flex items-center hover:bg-green-100">
            <NavLink className="capitalize" to="">
              Response
            </NavLink>
          </div>

          <div className="link_item capitalize w-full h-11 px-4 active:bg-green-100 text-gray-700 font-bold font-robo text-lg rounded-lg flex items-center hover:bg-green-100">
            <NavLink className="capitalize" to="">
              Settings
            </NavLink>
          </div>

          <br />
          <span className="border w-full"></span>

          <div className="link_item capitalize w-full h-11 mt-6 px-4 active:bg-green-100 text-gray-700 font-bold font-robo text-lg rounded-lg flex items-center hover:bg-green-100 ">
            <button onClick={logOut} className="capitalize active:bg-green-200">
              log out
            </button>
          </div>
        </div>
      </Sidebar>
      <div className="main bg-green-50 h-full w-full">
        <div className="w-ful h-20 flex justify-between text-gray-800 items-center shadow-nav">
          <h1 className="p_name text-xl font-semibold font-robo ml-14">
            Welcome {loggedUser.name}
          </h1>
          <h1 className="p_name text-xl font-semibold font-robo mr-14">
            Wallet bal__
          </h1>
        </div>
        <div className="section_route w-full h-full p-8 flex">
          <Lodge className="lodge mt-4  p-4">
            <h1 className="title">Complain</h1>

            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              placeholder="eg. I have few pains below my lungs"
              className="bg-green-200 w-full mt-4 text-gray-700 text-xl p-4 outline-none"
            ></textarea>

            <div className="w-full flex  items-end">
              <button className="btn font-normal mt-4">Complain</button>

              {/* <p className="text-gray-500 text-sm ml-4 font-robo font-medium">
                Get help suggestions from random professionals arround the world
              </p> */}
            </div>
          </Lodge>

          <Session className="lodge mt-4 border p-2 shadow-inner">
            <h1 className="title">Scheduled Sessions</h1>
            {[1, 1, 1, 1, 1, 1].map((it) => (
              <div className="rounded-md p-2 my-1 w-full h-14  flex items-center">
                <div className="rounded-lg h-6  w-70% bg-green-100">..</div>
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
`;

const Lodge = styled.section`
  width: 70%;
`;

const Session = styled.section`
  width: 30%;
`;

export default Dashboard;
