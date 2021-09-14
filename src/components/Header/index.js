import React from "react";
import styled from 'styled-components';
// import { Divide as Hamburger } from 'hamburger-react' 

const Home = () => {
  return (
    <Header>
      <nav className="h-16 w-full">
        <ul className = 'w-full bg-blue-300 md:flex justify-around'>
          <li>Home</li>
          <li>Protocol</li>
          <li>Governance</li>
          <li>Technology</li>
          <li>Information</li>
          <li>Defi</li>
          <li>Incentives</li>
          <li>People</li>
        </ul>
      </nav>

      {/* <Hamburger /> */}
    </Header>
  );
};

const Header = styled.div`

`

export default Home;
