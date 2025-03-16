import { useEffect, useState } from "react"
import { YOUTUBE_KEYWORD_SEARCH_API, YOUTUBE_VIDEO_API } from "../utils/constant"
import { useDispatch, useSelector } from "react-redux"
import { cacheVideoContent } from '../utils/videoContentSlice'


function useVideoContent() {
    const [videos, setVideos] = useState([])
    const query = useSelector(store => store.videoContent.searchKeyword)
    const videoCache = useSelector(store => store.videoContent.videos)
    const dispatch = useDispatch()

    useEffect(() => {
        if (videoCache[query]) {
            setVideos(videoCache[query])
        }
        else {
            getVideos()
        }

    }, [query])

    async function getVideos() {

        const url = query ? `${YOUTUBE_KEYWORD_SEARCH_API}${query}` : YOUTUBE_VIDEO_API
        // console.log(url)
        const data = await fetch(url)
        const json = await data.json()
        setVideos(json.items)
        // console.log(json.items)

        dispatch(cacheVideoContent({
            [query]: json.items
        }))

        console.log('API CALL')
    }

    // console.log(videos)
    return videos
}

export default useVideoContent