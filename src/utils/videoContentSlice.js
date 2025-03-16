import { createSlice } from "@reduxjs/toolkit";


const videoContentSlice = createSlice({
    name: 'videoContent',
    initialState: {
        videos: {},
        searchKeyword: ''
    },
    reducers: {
        cacheVideoContent: (state, action) => {
            state.videos = Object.assign(state.videos, action.payload)
        },

        contentKeyword: (state, action) => {
            state.searchKeyword = action.payload
        }
    }
})


export const { cacheVideoContent, contentKeyword } = videoContentSlice.actions
export default videoContentSlice.reducer
