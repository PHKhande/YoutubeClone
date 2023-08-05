import React from 'react'

const MenuItems = ({name}) => {
  return (
    <div className=' m-2 p-2 border-b-2 w-36'>
      <h1 className='font-semibold cursor-pointer'>{name}</h1>
    </div>
  )
}

export default MenuItems;