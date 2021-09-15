import React, { useState, useEffect } from "react";
import {useSelector} from "react-redux"
import { Section } from "./styles";
import Auth from "../auth/Auth";
import App from "./App"

const User = { 

  role: "",
  password: "",
  email: "",
  name: "",
  gender: "",
  age: 0,
  field: "",
  experienceLevel: ""

}

const Dashboard = ({store}) => {
  const [signedIn, setSignedIn] = useState(false);
  const [loggedUser, setLoggedUser] = useState(User);
  // console.log(store);
  useEffect(() => {
 
 if (localStorage.getItem("profile")) {
   setLoggedUser(JSON.parse(localStorage.getItem("profile")));
   setSignedIn(true)
 }
  }, [])
  
  
  return (
    <Section className="dash w-full h-screen flex justify-center items-center bg-red-400">
      {signedIn ? <App user={loggedUser} /> : <Auth />}
    </Section>
  );
};

export default Dashboard;
