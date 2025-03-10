import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import useSearchSuggestions from '../hooks/useSearchSuggestions'

function Header() {
    const dispatch = useDispatch()
    const [searchQuery, setSearchQuery] = useState('')
    const searchSuggestions = useSearchSuggestions(searchQuery)
    const [showSuggestions, setShowSuggestions] = useState(false)

    function toggleMenuHandler() {
        dispatch(toggleMenu())
    }

    return (
        <div className='flex items-center justify-between p-3 m-2 shadow-lg'>
            {/* Left Section: Logo & Menu */}
            <div className='flex items-center'>
                <img
                    onClick={toggleMenuHandler}
                    className='h-8 cursor-pointer'
                    alt='menu'
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/640px-Hamburger_icon.svg.png" />

                <img
                    className='h-8 mx-4'
                    alt='youtube'
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png" />
            </div>

            {/* Middle Section: Search Bar */}
            <div className='relative flex w-1/2'>
                <input
                    className='w-full border border-gray-400 p-2 rounded-l-full focus:outline-none'
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => setShowSuggestions(false)}
                    placeholder="Search" />
                <button className='border border-gray-400 p-2 rounded-r-full bg-gray-200 px-4 text-lg'>🔍</button>

                {/* Search Suggestions */}
                {showSuggestions && searchSuggestions.length > 0 && (
                    <div className='absolute top-full left-0 w-full bg-white border border-gray-300 shadow-lg rounded-md mt-1 z-10'>
                        <ul className='p-2'>
                            {searchSuggestions.map((item, index) => (
                                <li key={index} className='p-2 hover:bg-gray-100 cursor-pointer'>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            {/* Right Section: Profile */}
            <div className='flex items-center'>
                <img
                    className='h-8'
                    alt='user'
                    src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
            </div>
        </div>
    )
}

export default Header
