import React, { Component } from "react";
import { useLocation, useHistory } from "react-router-dom";
import Header from "../../components/Header";
import styled from "styled-components";
import bg from "../../asset/national-cancer-institute-oCLuFi9GYNA-unsplash.jpg"

const Home = () => {
  const { push } = useHistory();

  return (
    <Hero className="relative w-full ">
      <Header />
      <img src={bg} alt="" className="absolute w-full h-full" />
      <div className="absolute w-full h-full opacity-70 layer bg-gradient-to-r from-black via-gray-900 "></div>
      <div className="w-1/2 content-cont  absolute top-30% -translate-y-1/2 left-10 text-gray-600 ">
        <h1 className="font-medium sm:mb-5 text-6xl w-full font-robo text-green-100">
          MEET OUR HEALTH PROFESSIONALS
        </h1>
        <p className="font-medium text-green-50 text-xl">
          Get fast response to your health issues with our team of expert health
          professionals. It's simple. Take a look at a list of all our health
          experts, chat with them, get first aid recommendation and a lot more,
          all in this space.
        </p>
        <div className="flex  mt-6">
          <button
            type="submit"
            className="btn transition text-gray-800 hover:shadow-2xl"
            onClick={() => push("/auth")}
          >
            lodge
          </button>

          <button
            type="submit"
            className="btn_2 transition text-green-200 ml-4 hover:text-gray-800 hover:bg-green-500"
            onClick={() => push("/dashboard")}
          >
            schedule session
          </button>
        </div>
      </div>
    </Hero>
  );
};

const Hero = styled.div`
  height: 100%;
  /* border: 1px solid red; */
  

  background-size:cover;

  .content-cont {
  
  }


`;

export default Home;
