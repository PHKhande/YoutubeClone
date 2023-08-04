import React from 'react'

const MenuItems = ({name}) => {
  return (
    <div className=' rounded-lg my-2 p-2 '>
      <h1 className='font-semibold cursor-pointer'>{name}</h1>
    </div>
  )
}

export default MenuItems;