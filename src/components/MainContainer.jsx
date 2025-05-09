import React, { useEffect } from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useDispatch } from 'react-redux'
import { openMenu } from '../utils/appSlice'


function MainContainer() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(openMenu())
    }, [])

    return (
        <div className='z-0'>
            <ButtonList />
            <VideoContainer />
        </div>
    )
}

export default MainContainer