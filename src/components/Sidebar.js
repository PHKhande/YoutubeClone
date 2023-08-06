import React from 'react'
import MenuItems from './MenuItems'
import { useSelector } from 'react-redux';

const Sidebar = () => {

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  const menuArray = ["Home", "Shorts", "Subscription", "Library", "History", "Home", "Shorts", "Subscription", "Library", "History", "Shorts", "Subscription", "Library", "History"];
  return (
    <div>
      {
        menuArray.map( (item, index) => {
          return (
            <MenuItems key={index} name={item}/>
          )
        })
      }
    </div>
  )
}

export default Sidebar;