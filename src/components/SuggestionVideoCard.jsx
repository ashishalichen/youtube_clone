import React from 'react'

function SuggestionVideoCard({ info }) {

    const { snippet, statistics } = info
    const { title, channelTitle } = snippet
    return (
        <div className='p-2 m-2  rounded-lg shadow-lg hover:scale-105 transform transition duration-300 cursor-pointer flex flex-row '>
            <img className='rounded-lg w-50 aspect-[3/2]' src={snippet.thumbnails.medium.url} alt={title} />
            <div className='p-1 m-1'>
                <h1 className='py - 1 font-bold'>{title.length > 50 ? title.substring(0, 45) + '...' : title}</h1>
                <h2 className='text-wrap'>{channelTitle}</h2>
                <h4>{statistics?.viewCount} views</h4>
            </div>
        </div>
    )

}

export default SuggestionVideoCard