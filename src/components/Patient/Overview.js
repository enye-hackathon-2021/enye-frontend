import React from 'react'
import styled from 'styled-components'

const Overview = () => {
    return (
      <div>
        <Lodge className="lodge mt-4 p-4">
          <h1 className="title">Lodge your Complain</h1>

          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="eg. I have few pains below my lungs"
            className="bg-green-200 w-full mt-4 text-gray-700 text-xl p-4 outline-none h-48"
          ></textarea>
          <div className="w-full p-1  my-2 text-gray-500 text-sm">
            <b>Notice:</b>

            <p className="notice w-4/5">
              To get real respone from an expert use the consult button bellow
              By clicking consult bellow your complaint would be visible to
              professionals in that field, you would be notified when your
              complain has been attended to.
            </p>
          </div>
          <div className="w-full flex items-end ">
            <button className="btn font-normal font-robo mt-4 text-gray-50">
              fast response
            </button>
            <button className="btn font-normal font-robo mt-4 ml-4 text-gray-50">
              Consult
            </button>

            {/* <p className="text-gray-500 text-sm ml-4 font-robo font-medium">
                Get help suggestions from random professionals arround the world
              </p> */}
          </div>
        </Lodge>
      </div>
    );
}

const Lodge = styled.section`
    width: 100%;
`;
export default Overview
