import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'

function WatchPage() {

    const dispatch = useDispatch()
    const [searchParams] = useSearchParams()
    const videoId = searchParams.get('v')

    useEffect(() => {
        dispatch(closeMenu())
    }, [dispatch])

    return (
        <div className='p-3 px-20 rounded-lg'>
            <iframe
                className='rounded-xl'
                width="640"
                height="360"
                src={"https://www.youtube.com/embed/" + videoId} title="YouTube video player"
                frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>

            </iframe>
        </div>
    )
}

export default WatchPage