import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'

function Header() {

    const dispatch = useDispatch()

    function toggleMenuHandler() {
        dispatch(toggleMenu())
    }


    return (
        <div className='flex grid-flow-col p-3 m-2 shadow-lg items-center justify-between'>
            <div className='flex col-span-2'>
                <img
                    onClick={() => toggleMenuHandler()}
                    className='h-8 cursor-pointer'
                    alt='menu'
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/640px-Hamburger_icon.svg.png" />

                <img
                    className='h-8 mx-4'
                    alt='youtube'
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png" />

            </div>
            <div className='flex col-span-8 w-3/4 justify-center'>
                <input
                    className='w-1/2 border border-gray-600 p-1.5 rounded-l-full '
                    type="text"
                    placeholder="Search" />
                <button
                    className='border border-gray-700 p-1.5 rounded-r-full bg-gray-200  px-4 text-lg'>🔍</button>
            </div>
            <div className='flex col-span-2 '>
                <img
                    className='h-8'
                    alt='menu'
                    src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
            </div>
        </div>
    )
}

export default Header