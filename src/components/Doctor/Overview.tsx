import React from 'react'
import styled from 'styled-components'
import {BsFillTrashFill} from "react-icons/bs"

const Overview = () => {
    return (
      <div>
        <Lodge className="lodge mt-4 p-4">
          <div className="w-full  grid gap-3 grid-cols-3">
            <div className="shadow-md bg-green-100 rounded-md p-2">
              <h1 className="font-semibold text-center">Complaint Reviewed</h1>
              <div className="count text-5xl mt-2 h-16 font-bold flex items-center justify-center text-gray-600">
                <h1>28</h1>
              </div>
            </div>
            <div className="shadow-md bg-green-100 rounded-md p-2">
              <h1 className="font-semibold text-center">Session Scheduled</h1>
              <div className="count text-5xl mt-2 h-16 font-bold flex items-center justify-center text-gray-600">
                <h1>148</h1>
              </div>
            </div>
            <div className="shadow-md bg-green-100 rounded-md p-2">
              <h1 className="font-semibold text-center">Total Earned</h1>
              <div className="count text-5xl mt-2 h-16 font-bold flex items-center justify-center text-gray-600">
                <h1>48</h1>
                <span className="text-3xl mt-4 text-gray-600">#</span>
              </div>
            </div>
          </div>

          <div className="statistics w-full p-2  border mt-4">
            <h1 className="draft font-bold text-xl">Draft</h1>
              {
              [1,1,1,1].map((item,index) => (
                <QuestionCard key={ index }/>
              ))
              }
            
          </div>
        </Lodge>
      </div>
    );
}



function QuestionCard(){
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
`;
export default Overview
