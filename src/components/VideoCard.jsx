import React from 'react'

function VideoCard({ info }) {
    // console.log(info)

    const { snippet, statistics } = info
    const { title, channelTitle } = snippet
    return (
        <div className='p-2 m-2 w-64 h-64 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 cursor-pointer'>
            <img className='rounded-lg' src={snippet.thumbnails.medium.url} alt={title} />
            <h1 className='py - 1 font-bold'>{title.length > 50 ? title.substring(0, 45) + '...' : title}</h1>
            <h2 className='text-wrap'>{channelTitle}</h2>
            <h4>{statistics?.viewCount} views</h4>
        </div>
    )
}

export default VideoCard