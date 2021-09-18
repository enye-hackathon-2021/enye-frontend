import React, { useState, useEffect } from "react";
import { Section, useStyles } from "./styles";
import Auth from "./Auth";
import Paper from "@material-ui/core/Paper";
import exp from "../../asset/expert.png";
import sick from "../../asset/sick.png";
import { useDispatch } from "react-redux";
import { useLocation, useHistory, NavLink } from "react-router-dom";





const UserTypeAuth = () => {
  const [userType, setUserType] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  
  
  
  
  function noNeedLogin() {

  
    if (localStorage.getItem("profile")) {
         history.push("/dashboard");

      dispatch({ type: "SIGN_IN_TOGGLE", payload: true });
    
    
    } else {
      dispatch({ type: "SIGN_IN_TOGGLE", payload: false });
    }
  }

  
    useEffect(() => {
      noNeedLogin();
    });

  return (
    <Section className="auth w-full h-screen flex justify-center items-center relative">
      {userType === "" && <SelectRolePage setUserType={setUserType} />}
      <Auth userType={userType} />
    </Section>
  );
};


export function SelectRolePage({ setUserType }: any) {
  const classes = useStyles();
  const dispatch = useDispatch();
  
  
  function setUser(role: any){
  setUserType("patient");
    dispatch({ type: "SET_USER", payload: role });
  
  }

  return (
    <div className="modal absolute w-full h-full flex justify-center items-center z-10 bg-grad-low">
      <div className="choose_card  w-600p border opacity-100 bg-green-50 z-20 h-96  items-center flex-col rounded-xl flex justify-center ">
        <h1 className="text_title font-bold text-4xl text-green-700 font-joe">
          What best describe you?
        </h1>
        <div className="flex w-3/4  justify-between mx-auto mt-8">
          <Paper
            className={classes.root}
            elevation={1}
            onClick={() => setUser("patient")}
          >
            <img src={sick} alt="" className="w-full h-32" />
            <h1 className="text-xl 0 w-full text-center mt-4 font-medium text-green-600 font-joe">
              Patient
            </h1>
          </Paper>

          <Paper
            className={classes.root}
            elevation={1}
            onClick={() => setUser("doctor")}
          >
            <img src={exp} alt="" className="w-full" />
            <h1 className="text-xl text-green-600 w-full text-center mt-4 font-medium font-joe">
              Expert
            </h1>
          </Paper>
        </div>
      </div>
    </div>
  );
}
export default UserTypeAuth;
