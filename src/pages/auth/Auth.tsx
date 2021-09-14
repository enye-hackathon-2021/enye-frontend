import React, { useState } from "react";
import { Section, useStyles, TField } from "./styles";
import TextField from "@material-ui/core/TextField";

const Auth = () => {
  //   const [userType, setUserType] = useState(null);

  const classes = useStyles();
  //   userType === "" && true;
  return (
    <div className="auth_bacground w-full h-screen flex">
      <div className="blank_design h-full w-3/5 bg-green-500 "></div>

      <div className="auth_sessionh-full w-5/12 bg-green-50 p-8">
        <form action="" className="border p-2">
          <h1 className="sign_up text-gray-900 font-bold text-5xl ">Sign Up</h1>
          <h1 className="sign_up text-gray-700 font-medium text-2xl mt-3">
            Just few details
          </h1>
          <div className="fields flex flex-col mt-6 space-y-4">
            <TField
              id="filled-basic"
              label="Filled"
              variant="filled"
              color="secondary"
            />
            <TField id="filled-basic" label="Filled" variant="filled" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;