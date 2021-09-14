import React, { useState } from "react";
import { Section, useStyles } from "./styles";
import Auth from "./Auth";
import Paper from "@material-ui/core/Paper";
import exp from "../../asset/expert.png";
import sick from "../../asset/sick.png";

const Incentives = () => {
  const [userType, setUserType] = useState("");
  const classes = useStyles();
  return (
    <Section className="auth w-full h-screen flex justify-center items-center">
      {userType === "" ? (
        <div className="choose_card  w-1/2 h-72 flex items-center flex-col border">
          <h1 className="text_title font-bold text-3xl text-gray-800">
            What best describe you?
          </h1>
          <div className="flex w-3/4  justify-between mx-auto mt-8">
            <Paper
              className={classes.root}
              elevation={1}
              onClick={() => setUserType("patient")}
            >
              <img src={sick} alt="" className="w-full h-32" />
              <h1 className="text-xl text-gray-800 w-full text-center mt-4 font-medium">
                Patient
              </h1>
            </Paper>

            <Paper
              className={classes.root}
              elevation={1}
              onClick={() => setUserType("expert")}
            >
              <img src={exp} alt="" className="w-full" />
              <h1 className="text-xl text-gray-800 w-full text-center mt-4 font-medium">
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

export default Incentives;
