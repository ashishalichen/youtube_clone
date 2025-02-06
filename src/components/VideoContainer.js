import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constant'
import VideoCard from './VideoCard'

function VideoContainer() {

    const [videos, setVideos] = useState([])

    useEffect(() => {
        getVideos()
    }, [])

    async function getVideos() {
        const data = await fetch(YOUTUBE_VIDEO_API)
        const json = await data.json()
        // console.log(json)
        setVideos(json.items)


    }


    return (
        <div className='flex flex-wrap justify-evenly'>
            {
                videos.map(video => <VideoCard key={video.id} info={video} />)
            }
        </div>
    )
}

export default VideoContainer