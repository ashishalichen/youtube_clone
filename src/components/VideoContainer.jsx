import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constant'

import VideoCard from './VideoCard'

import { Link } from 'react-router-dom'

function VideoContainer() {

    const [videos, setVideos] = useState([])

    useEffect(() => {
        getVideos()
    }, [])

    async function getVideos() {
        const data = await fetch(YOUTUBE_VIDEO_API)
        const json = await data.json()
        setVideos(json.items)
    }

    return (
        <div className='flex flex-wrap justify-evenly'>
            {
                videos.map(video =>
                    <Link key={video.id} to={'/watch?v=' + video.id} >
                        <VideoCard info={video} />
                    </Link>)
            }
        </div>
    )
}

export default VideoContainer