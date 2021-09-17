import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Rotate as Hamburger } from 'hamburger-react';
import styled from 'styled-components';
// import Logo from '../../asset/logo.png';

const Home = () => {
  const [menu, setMenu] = useState(false);

  const handleToggle = () => {
    setMenu((prevState) => {
      return !prevState;
    })
  }

  return (
    <Header className="bg-green-100 text-gray-700 fixed z-10 w-full top-0 ">
      <nav className="w-full  flex justify-between ">
        <div className="nav ml-11  flex items-center justify-between px-5">
          <h1 className="font-logo font-bold text-2xl">healthLodge</h1>

          <div className="block sm:hidden">
            <Hamburger onToggle={handleToggle} />
          </div>
        </div>

        <div className="flex items-center justify-center mr-11 font-semibold nav ">
          <ul className="flex items-center justify-around px-10  h-full">
            <li className="ml-5 capitalize text-gray-800">
              <NavLink to="/auth">log in</NavLink>{" "}
            </li>{" "}
            <li className="ml-7 capitalize btn text-gray-800">
              <NavLink to="/auth">Sign up</NavLink>{" "}
            </li>
          </ul>
        </div>
      </nav>
    </Header>
  );
};
;

const Header = styled.div`
  .nav {
    height: 10vh;
  }

  ul {
    li {
      font-size: 1em;

      a.active {
        color: red;
      }
    }
  }

  .whitepaper {
    cursor: pointer;
    button {
      border-radius: 5px;
      box-shadow: 0 0 10px rgb(170, 170, 170);
      background: #ff6495;
    }
  }

  .mobile {
    animation-name: scroll-down;
    animation-duration: 0.5s;
    height: 30vh;

    ul {
      background: none;
    }

    li {
      font-weight: 600;
      font-size: 1em;
      margin-left: 2.5rem;
    }

    @keyframes scroll-down {
      from {
        transform: translateX(-100%);
      }

      to {
        transform: translateX(0%);
      }
    }
  }
`;

export default Home;

        // {menu && (
        //   <div className="mobile sm:hidden">
        //     <ul className="h-full flex flex-col justify-around">
        //       <li className="ml-5 capitalize">
        //         <NavLink to="/home">log in</NavLink>
        //       </li>

        //       <li className="ml-5 capitalize btn">
        //         <NavLink to="/about">Sign up</NavLink>
        //       </li>

        //     </ul>
        //   </div>
        // )}