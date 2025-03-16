import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import videoContentSlice from "./videoContentSlice";

const store = configureStore({
    reducer: {
        app: appSlice,
        search: searchSlice,
        videoContent: videoContentSlice
    }

})

export default store;