import React from 'react'
import Sidebar from "./Sidebar";
import { Outlet } from 'react-router-dom';

function Body() {
  return (
    <div className="grid grid-flow-col m-2">
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default Body;