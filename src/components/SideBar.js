import React from 'react'
import { useSelector } from 'react-redux'

function SideBar() {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen)

  return isMenuOpen &&
    (
      <div className='shadow-lg p-4 w-48'>
        <h1 className='font-bold bg-gray-100 hover:bg-gray-200 transform transition duration-300 p-1 m-1 rounded-md'>Home</h1>
        < h1 className='font-bold bg-gray-100  hover:bg-gray-200 transform transition duration-300 p-1 m-1 rounded-md' > Shorts</h1 >
        <h1 className='font-bold bg-gray-100  hover:bg-gray-200 transform transition duration-300 p-1 m-1 rounded-md'>Subscription</h1>
        <h1 className='font-bold bg-gray-100  hover:bg-gray-200 transform transition duration-300 p-1 m-1 rounded-md'>Live</h1>

        <h1 className='font-bold bg-gray-100  hover:bg-gray-200 transform transition duration-300 p-1 m-1 mt-6 rounded-md'>Subscriptions</h1>
        <ul>
          <li className='mx-5 hover:bg-gray-200 transform transition duration-300 rounded-md px-0.5'>Music</li>
          <li className='mx-5 hover:bg-gray-200 transform transition duration-300 rounded-md px-0.5'>Sports</li>
          <li className='mx-5 hover:bg-gray-200 transform transition duration-300 rounded-md px-0.5'>Gaming</li>
          <li className='mx-5 hover:bg-gray-200 transform transition duration-300 rounded-md px-0.5'>Movies</li>
        </ul>
        <h1 className='font-bold bg-gray-100  hover:bg-gray-200 transform transition duration-300 p-1 m-1 mt-6 rounded-md'>Subscriptions</h1>
        <ul>
          <li className='mx-5 hover:bg-gray-200 transform transition duration-300 rounded-md px-0.5' >Music</li>
          <li className='mx-5 hover:bg-gray-200 transform transition duration-300 rounded-md px-0.5' >Sports</li>
          <li className='mx-5 hover:bg-gray-200 transform transition duration-300 rounded-md px-0.5' >Gaming</li>
          <li className='mx-5 hover:bg-gray-200 transform transition duration-300 rounded-md px-0.5' >Movies</li>
        </ul>
      </div >
    )
}

export default SideBar