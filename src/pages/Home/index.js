import React, { Component } from 'react';
import styled from 'styled-components';

const Home = () => {
  return (
    <Hero>
      <div className = 'w-full text-center flex flex-col justify-center items-center content-cont'>
        <h1 className = 'font-bold sm:mb-5'>MEET OUR HEALTH PROFESSIONALS</h1>
        <p className = 'font-semibold'>
          Get fast response to your health issues with our team of expert health professionals.
          It's simple. Take a look at a list of all our health experts, chat with them, get first aid recommendation and 
          a lot more, all in this space.
        </p>
        <div className = 'sm:mt-5'>
          <button type = 'submit' className = 'text-white py-2 px-3'>
            ASK AN EXPERT
          </button>
        </div>
    </div>
    </Hero>
  )
}

const Hero = styled.div`
  .content-cont {
    height: 90vh;
  }

  h1 {
    font-size: 2em;
  }

  p {
    font-size: 1.2em;
    max-width: 600px;
    margin: 0 auto;
  }

  button {
    border-radius: 5px;
    box-shadow: 0 0 10px rgb(170, 170, 170);
    background: #0096FF;
  }
`

export default Home
