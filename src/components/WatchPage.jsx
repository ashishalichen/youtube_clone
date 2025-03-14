import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'
import CommentsContainer from './CommentsContainer'

function WatchPage() {

    const dispatch = useDispatch()
    const [searchParams] = useSearchParams()
    const videoId = searchParams.get('v')

    useEffect(() => {
        dispatch(closeMenu())
    }, [dispatch])

    return (
        <div className='flex flex-col'>
            < div className='px-20 py-10 rounded-lg' >
                <iframe
                    className='rounded-xl'
                    width="900"
                    height="500"
                    src={"https://www.youtube.com/embed/" + videoId} title="YouTube video player"
                    frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>

                </iframe>
            </div >
            <CommentsContainer />
        </div>
    )
}

export default WatchPage