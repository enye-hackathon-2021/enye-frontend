import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Section } from "./styles";
import UserTypeAuth from "../auth";
import App from "./App";
import { useLocation, useHistory, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

const Dashboard = () => {
  const [signedIn, setSignedIn] = useState(true);
  const [loggedUser, setLoggedUser] = useState({});

  const { location,push } = useHistory();
  const { SignIn } = useSelector(({ toggles }: any) => toggles);
  const dispatch = useDispatch();
  

  async function getUserDetails() {
    const User: any = await localStorage.getItem("profile");
    if (User) {
      setLoggedUser(JSON.parse(User).data);
  
    } else{
    push('/auth')
    }
  }

  useEffect(() => {
    getUserDetails();
    
    
  }, []);
  
  useEffect(() => {
    console.log("i should check for update");
  }, [location.pathname]);

  return (
    <Section className="dash w-full flex justify-center items-center">
      {SignIn ? <App loggedUser={loggedUser} /> : <UserTypeAuth />}
    </Section>
  );
};

export default Dashboard;
