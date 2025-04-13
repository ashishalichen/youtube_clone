import React from 'react'
import useVideoContent from '../hooks/useVideoContent'
import SuggestionVideoCard from './SuggestionVideoCard'
import { Link } from 'react-router-dom'

function SuggestionVideoList() {
    const videos = useVideoContent()

    return (
        <div className='flex flex-wrap flex-col justify-evenly'>
            {
                videos.length > 0 && videos.map(video =>
                    <Link key={video.id?.videoId || video.id} to={`/watch?v=${video.id?.videoId || video.id}`} >
                        <SuggestionVideoCard info={video} />
                    </Link>)
            }
        </div>
    )
}

export default SuggestionVideoList