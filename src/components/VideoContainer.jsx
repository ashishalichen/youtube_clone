import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constant'

import VideoCard from './VideoCard'

import { Link } from 'react-router-dom'
import useVideoContent from '../hooks/useVideoContent'
import { useSelector } from 'react-redux'

function VideoContainer() {


    const videos = useVideoContent()


    const query = useSelector(store => store.videoContent.searchKeyword)

    return (
        <div className='flex flex-wrap justify-evenly'>
            {
                videos.length > 0 && videos.map(video =>
                    <Link key={video.id?.videoId || video.id} to={`/watch?v=${video.id?.videoId || video.id}`} >
                        <VideoCard info={video} />
                    </Link>)
            }
        </div>
    )
}

export default VideoContainer