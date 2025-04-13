import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'
import CommentsContainer from './CommentsContainer'
import SuggestionVideoList from './SuggestionVideoList'

function WatchPage() {

    const dispatch = useDispatch()
    const [searchParams] = useSearchParams()
    const videoId = searchParams.get('v')

    useEffect(() => {
        dispatch(closeMenu())
    }, [dispatch])

    return (
        <div className='flex flex-row bg-gray-100 z-10'>
            <div className='flex flex-col w-2/3'>
                < div className='px-10 py-5 rounded-lg ' >
                    <iframe
                        className="w-full aspect-[5/3] rounded-lg"
                        src={"https://www.youtube.com/embed/" + videoId} title="YouTube video player"
                        frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>

                    </iframe>
                </div >
                <CommentsContainer />
            </div>
            <div className='w-1/3 '>
                <SuggestionVideoList/>
            </div>
        </div>
    )
}

export default WatchPage