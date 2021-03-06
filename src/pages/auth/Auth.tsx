import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
// import { BrowserRouter } from "react-router-dom";
import { useLocation, useHistory, NavLink } from "react-router-dom";
import { Section, useStyles, TField } from "./styles";
import TextField from "@material-ui/core/TextField";
import IF from "../../components/FormInput";
import Button from "@material-ui/core/Button";
import { signInAction, logInAction } from "../../actions/auth";

const Auth = ({ setSignedIn, userType }: any) => {
  const [signedUp, setSignedUp] = useState(true);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const history = useHistory();


const intialUser: any = {
  name: "",
  email: "",
  role: userType,
  gender: "",
  age: 0,
  field: "",
  experienceLevel: "",
  password: "",
};
  const classes = useStyles();
  const { handleSubmit, register, setValue } = useForm();
  //   userType === "" && true;
  
  
 



  function submitHandler(data: any) {
  // setValue("role", userType);
    if (!signedUp) {
    
      dispatch(signInAction({ ...data, role: userType }, history));
      setSignedUp(true);
    } else {
  // console.log(data);
    
      dispatch(logInAction({ ...data, role: userType }, history));
    }
  }
  const User = localStorage.getItem("profile");

  useEffect(() => {
    if (User) {
      // dispatch({ type: "SIGN_IN_TOGGLE", payload: true });
  
    }
  }, [User]);
  
  
  
  return (
    <div className="auth_bacground w-full h-screen flex">
      <div className="blank_design h-full w-1/2 md:w-3/5 bg-green-500 p-11">
        <div className="header text-6xl text-white font-bold font-joe">
          Your health matters
        </div>
        <div>
          
        </div>
      </div>

      <div className="auth_session relative h-full w-2/3 md:w-5/12 bg-green-50 p-8 flex-col flex justify-center">
        <form
          action=""
          className=" p-6 w-full"
          onSubmit={handleSubmit(submitHandler)}
        >
          <h1 className="sign_up font-bold text-5xl text-green-500 ">
            {!signedUp ? "Sign Up" : "Welcome back"}
          </h1>
          {!signedUp && (
            <h1 className="sign_up text-green-500 font-medium text-lg mt-2">
              Just few details and you are all set up
            </h1>
          )}
          <div className="fields flex flex-col mt-4 space-y-4">
            {!signedUp && (
              <IF
                name="name"
                register={register}
                type="text"
                placeholder="Full Name"
              />
            )}
            <IF
              name="email"
              register={register}
              type="email"
              placeholder="email"
            />

            <IF
              name="password"
              register={register}
              type="password"
              placeholder="Password"
            />
            {!signedUp && (
              <div className="flex space-x-2">
                <IF
                  name="field"
                  register={register}
                  type="text"
                  placeholder="field"
                />

                <IF
                  name="experienceLevel"
                  register={register}
                  type="text"
                  placeholder="Level ex. senior, intermidiate"
                />
              </div>
            )}

            {!signedUp && (
              <div className="flex space-x-2">
                <IF
                  name="age"
                  register={register}
                  type="number"
                  placeholder="Age"
                />

                <IF
                  name="gender"
                  register={register}
                  type="text"
                  placeholder="Gender ex. male"
                />
              </div>
            )}

            {/* <IF
              name="role"
              register={register}
              type="textarea"
              placeholder="Role: doctor or patient"
              value={userType} 
              
            /> */}
          </div>

          <div className="flex justify-between mt-6 items-end">
            <button className="px-5 rounded py-2 bg-green-500 text-center capitalize text-white font-medium ">
              {!signedUp ? "sign up" : "Log In"}
            </button>

            {signedUp && (
              <p className="underline text-green-500">Reset Password</p>
            )}
          </div>
        </form>
        <div
          onClick={() => setSignedUp((p) => !p)}
          className="actions text-center text-green-600 text-sm absolute bottom-6 ml-10 cursor-pointer"
        >
          {signedUp ? "Create an account" : "Log in"}
        </div>
      </div>
    </div>
  );
};

export default Auth;
