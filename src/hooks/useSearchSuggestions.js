

import React, { useEffect, useState } from 'react'
import { YOUTUBE_SEARCH_API } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { cacheResults } from '../utils/searchSlice'

function useSearchSuggestions(query) {

    const [suggestions, setSuggestions] = useState([])
    const dispatch = useDispatch()
    const searchCache = useSelector(store => store.search)

    useEffect(() => {
        const timer = setTimeout(() => {
            // only call the api if its not in cache
            if (searchCache[query]) {
                setSuggestions(searchCache[query])
            }
            else {
                getSearchSuggestions()
            }
        }, 300)

        return () => clearTimeout(timer)

    }, [query])


    async function getSearchSuggestions() {
        const data = await fetch(YOUTUBE_SEARCH_API + query)
        const json = await data.json()
        setSuggestions(json[1])

        // update the cache
        dispatch(cacheResults({
            [query]: json[1]
        }))

    }

    return query ? suggestions : []
}

export default useSearchSuggestions