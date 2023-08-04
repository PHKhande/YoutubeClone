import React from 'react'
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";

function Body() {
  return (
    <div className="grid grid-flow-col m-2 border border-gray-300 rounded-lg">
      <Sidebar/>
      <MainContainer/>
    </div>
  )
}

export default Body;