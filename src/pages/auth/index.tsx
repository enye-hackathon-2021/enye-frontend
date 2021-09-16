import React, { useState, useEffect } from "react";
import { Section, useStyles } from "./styles";
import Auth from "./Auth";
import Paper from "@material-ui/core/Paper";
import exp from "../../asset/expert.png";
import sick from "../../asset/sick.png";
import { useDispatch } from "react-redux";




const UserTypeAuth = () => {
  const [userType, setUserType] = useState("");
  const classes = useStyles();
  const dispatch = useDispatch();
  
  
  
  function noNeedLogin() {
  console.log('i worked');
  
    if (localStorage.getItem("profile")) {
    console.log("profile is present");
      dispatch({ type: "SIGN_IN_TOGGLE", payload: true });
    
    
    } else {
      dispatch({ type: "SIGN_IN_TOGGLE", payload: false });
    }
  }

  setTimeout(() => {
    noNeedLogin();
  }, 1000);


  
    // useEffect(() => {
    //   const User = localStorage.getItem("profile");

    //   if (User) {
    //    dispatch({type:"SIGN_IN_TOGGLE",payload:true});
    //   }
    // }, []);

  return (
    <Section className="auth w-full h-screen flex justify-center items-center">
      {userType === "" ? (
        <div className="choose_card  w-600p  h-72 flex items-center flex-col ">
          <h1 className="text_title font-bold text-4xl text-green-700 font-joe">
            What best describe you?
          </h1>
          <div className="flex w-3/4  justify-between mx-auto mt-8">
            <Paper
              className={classes.root}
              elevation={1}
              onClick={() => setUserType("patient")}
            >
              <img src={sick} alt="" className="w-full h-32" />
              <h1 className="text-xl 0 w-full text-center mt-4 font-medium text-green-600 font-joe">
                Patient
              </h1>
            </Paper>

            <Paper
              className={classes.root}
              elevation={1}
              onClick={() => setUserType("expert")}
            >
              <img src={exp} alt="" className="w-full" />
              <h1 className="text-xl text-green-600 w-full text-center mt-4 font-medium font-joe">
                Expert
              </h1>
            </Paper>
          </div>
        </div>
      ) : (
        <Auth userType={userType} />
      )}
    </Section>
  );
};

export default UserTypeAuth;
