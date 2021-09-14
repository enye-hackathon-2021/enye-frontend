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
    <Header>
      <nav className="w-full">
        <div className = 'sm:hidden nav text-white flex items-center justify-between sm:px-10 px-5'>
          <div className = ''>
            LOGO
          </div>

          <div className = 'block sm:hidden'>
            <Hamburger onToggle = {handleToggle} /> 
          </div>
        </div>

        <div className = 'hidden sm:block sm:flex items-center w-full text-white font-semibold nav'>
          <div>
            LOGO
          </div>
          <div className = 'sm:flex-1'></div>
          <ul className = 'sm:flex justify-around px-10 hidden sm:block'>
            <li className  = 'ml-5'>
              <NavLink to = '/home'>
                Home
              </NavLink>
            </li>
          
            <li className  = 'ml-5'>
              <NavLink to = '/about'>
                About
              </NavLink>
            </li>

            <li className  = 'ml-5'>
              <NavLink to = '/contact'>
                Contact
              </NavLink>
            </li>

            <li className  = 'ml-5'>
              <NavLink to = '/people'>
                Our Health Experts
              </NavLink>
            </li>
          </ul>
        </div>

        {menu && (
          <div className = 'mobile sm:hidden'>
            <ul className = 'h-full flex flex-col justify-around'>
            <li className  = 'ml-5'>
              <NavLink to = '/home'>
                Home
              </NavLink>
            </li>
          
            <li className  = 'ml-5'>
              <NavLink to = '/about'>
                About
              </NavLink>
            </li>

            <li className  = 'ml-5'>
              <NavLink to = '/contact'>
                Contact
              </NavLink>
            </li>

            <li className  = 'ml-5'>
              <NavLink to = '/people'>
                Our Health Experts
              </NavLink>
            </li>
            </ul>
          </div>
        )}
      </nav>
    </Header>
   )
};
;

const Header = styled.div`
  .nav {
    background: #0096FF;
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
      background: #FF6495;
    }
  }

.mobile {
  animation-name: scroll-down;
  animation-duration: .5s;
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
`

export default Home;
