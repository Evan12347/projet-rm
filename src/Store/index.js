import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./AuthSlice";
import favorisReducer from "./FavorisSlice";

export default configureStore({
    reducer: {
        auth: authReducer,
        favoris: favorisReducer,
    }
})