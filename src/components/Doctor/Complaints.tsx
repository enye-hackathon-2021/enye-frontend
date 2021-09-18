import React from "react";
import styled from "styled-components";
import CommentIcon from "@mui/icons-material/Comment";
import { BsFillTrashFill } from "react-icons/bs";

const questions = [
  {
    question:
      "I got an injury to my head while I was playing football, any solution to reduce the pain>",
    answer:
      "Buy Topiramate and use two doses in the morning and night, if you are not relieved within two days, please see the nearest doctor.",
    number: 10,
  },

  {
    question: "What can I use on to cure my sore throat?",
    answer: "You should drink a cup of hot water, morning and night.",
    number: 12,
  },

  {
    question:
      "I got an injury to my head while I was playing football, any solution to reduce the pain>",
    answer:
      "Buy Topiramate and use two doses in the morning and night, if you are not relieved within two days, please see the nearest doctor.",
    number: 18,
  },

  {
    question: "What is the best home made solution to stomach ache?",
    answer:
      "Put a tea spoon of salt inside hald full cup of warm water and drink it, cheers.",
    number: 15,
  },

  {
    question: "What are symptoms of covid-19",
    answer:
      "intense headache, dry couch, sore throat are all symptoms of covid-19",
    number: 8,
  },

  {
    question: "Please recommend an effective stress reliever drug for me",
    answer:
      "Natrol stree relief, Geneca stress relief, Natures ford stree defense are all effective for releiving you of stress",
    number: 2,
  },

  {
    question: "Please recommend an effective stress reliever drug for me",
    answer:
      "Natrol stree relief, Geneca stress relief, Natures ford stree defense are all effective for releiving you of stress",
    number: 2,
  },

  {
    question: "Please recommend an effective stress reliever drug for me",
    answer:
      "Natrol stree relief, Geneca stress relief, Natures ford stree defense are all effective for releiving you of stress",
    number: 2,
  },

  {
    question: "Please recommend an effective stress reliever drug for me",
    answer:
      "Natrol stree relief, Geneca stress relief, Natures ford stree defense are all effective for releiving you of stress",
    number: 2,
  },
];

const Response = () => {
  return (
    <div >
      <Lodge className="lodge pr-8">
        <div className="text-black font-bold text-2xl mb-5">
          Available Compliants for you
        </div>

        <div className="w-full p-2 border">{questions.map((item,index) => (
            <QuestionCard key={index}/>
        
        ))}</div>
      </Lodge>
    </div>
  );
};


function QuestionCard() {
  return (
    <div className="question_card w-full h-16 my-2 border flex items-center hover:shadow-xl p-2 justify-between">
      <div className="first flex items-center">
        <div>
          {" "}
          <input type="checkbox" name="" id="" />
        </div>
        <h1 className="question font-semibold ml-4">
          Q. slight headace and dizzyness .....
        </h1>
      </div>
          <div className="price"><p className="await text-gray-800 text-sm">2 more response</p></div>
      <div className="action flex items-center">
        <div className="delete cursor-pointer">
          <BsFillTrashFill className="text-gray-500 " />
        </div>
        <button className="text-gray-100 bg-green-400 rounded-md font-semibold font-robo py-2 text-sm capitalize hover:text-gray-50 px-4 ml-4">
          respond
        </button>
      </div>
    </div>
  );
}



const Lodge = styled.section`
  width: 100%;
  /* overflow-y: scroll; */

  .answers {
    border: 1px solid rgba(255, 255, 255, 0.5);
    background: #fff;
    color: black;
  }

  .view {
    /* background: green; */
    border: 1px solid black;
  }
`;
export default Response;
