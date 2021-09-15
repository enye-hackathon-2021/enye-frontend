import React, { useState, useEffect } from "react";
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

const Dashboard = () => {
  const [signedIn, setSignedIn] = useState(true);
  const [loggedUser, setLoggedUser] = useState(User);
  
  useEffect(() => {
  
//  if(localStorage.getItem("profile")){
//  setLoggedUser(JSON.parse(localStorage.getItem("profile")))
//  }
  }, [])
  
  
  return (
    <Section className="dash w-full h-screen flex justify-center items-center bg-red-400">
      {signedIn ? <App user={loggedUser} /> : <Auth />}
    </Section>
  );
};

export default Dashboard;
