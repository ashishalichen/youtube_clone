import React from 'react'
import { useSelector } from 'react-redux'

function SideBar() {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen)

  return isMenuOpen &&
    (
      <div className='shadow-lg p-4 w-48 h-screen'>
        <h1 className='font-bold bg-gray-100 p-1 m-1 rounded-md'>Home</h1>
        < h1 className='font-bold bg-gray-100 p-1 m-1 rounded-md' > Shorts</h1 >
        <h1 className='font-bold bg-gray-100 p-1 m-1 rounded-md'>Subscription</h1>
        <h1 className='font-bold bg-gray-100 p-1 m-1 rounded-md'>Live</h1>

        <h1 className='font-bold bg-gray-100 p-1 m-1 mt-6 rounded-md'>Subscriptions</h1>
        <ul>
          <li className='ml-5'>Music</li>
          <li className='ml-5'>Sports</li>
          <li className='ml-5'>Gaming</li>
          <li className='ml-5'>Movies</li>
        </ul>
        <h1 className='font-bold bg-gray-100 p-1 m-1 mt-6 rounded-md'>Subscriptions</h1>
        <ul>
          <li className='ml-5' >Music</li>
          <li className='ml-5' >Sports</li>
          <li className='ml-5' >Gaming</li>
          <li className='ml-5' >Movies</li>
        </ul>
      </div >
    )
}

export default SideBar