import React, { useState,useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux"
// import { BrowserRouter } from "react-router-dom";
import { useLocation, useHistory, NavLink } from "react-router-dom";
import { Section, useStyles, TField } from "./styles";
import TextField from "@material-ui/core/TextField";
import IF from "../../components/FormInput";
import Button from "@material-ui/core/Button";
import {signInAction} from "../../actions/auth"
const Auth = () => {
    const [signedUp, setSignedUp] = useState(true);
  const dispatch = useDispatch();
  const {pathname} = useLocation()
  const history = useHistory();

  const classes = useStyles();
  const { handleSubmit, register } = useForm();
  //   userType === "" && true;

  function submitHandler(data: any) {
    console.log(data);
    dispatch(signInAction(data, history));
    
  }
  
  useEffect(() => {
  }, [])
  return (
    <div className="auth_bacground w-full h-screen flex">
      <div className="blank_design h-full w-3/5 bg-green-500 p-11">
        <div className="header text-6xl font-bold font-joe">
          Your health matters
        </div>
      </div>

      <div className="auth_session relative h-full w-5/12 bg-green-50 p-8 flex-col flex justify-center">
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
                  name="Age"
                  register={register}
                  type="number"
                  placeholder="Age"
                />

                <IF
                  name="gender"
                  register={register}
                  type="text"
                  placeholder="Gender"
                />
              </div>
            )}
          </div>

          <div className="flex justify-between mt-6 items-end">
            <NavLink to="/dashboard">
              <button className="px-4 py-2 bg-green-500 text-center capitalize  font-medium ">
                sign up
              </button>
            </NavLink>

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
