

import React, { useEffect, useState } from 'react'
import { YOUTUBE_SEARCH_API } from '../utils/constant'

function useSearchSuggestions(query) {

    const [suggestions, setSuggestions] = useState([])

    useEffect(() => {
        const timer = setTimeout(() => getSearchSuggestions(), 300)

        return () => clearTimeout(timer)

    }, [query])


    async function getSearchSuggestions() {
        const data = await fetch(YOUTUBE_SEARCH_API + query)
        const json = await data.json()
        setSuggestions(json[1])

    }

    return query ? suggestions : []
}

export default useSearchSuggestions