import React from 'react'
import styled from 'styled-components'

const Overview = () => {
    return (
        <div>
            <Lodge className="lodge mt-4 p-4">
            <h1 className="title">Complain</h1>

            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              placeholder="eg. I have few pains below my lungs"
              className="bg-green-200 w-full mt-4 text-gray-700 text-xl p-4 outline-none"
            ></textarea>

            <div className="w-full flex  items-end">
              <button className="btn font-normal mt-4">Complain</button>

              {/* <p className="text-gray-500 text-sm ml-4 font-robo font-medium">
                Get help suggestions from random professionals arround the world
              </p> */}
            </div>
          </Lodge>
        </div>
    )
}

const Lodge = styled.section`
    width: 100%;
`;
export default Overview
