import { configureStore } from "@reduxjs/toolkit";
import movie from "./slices/movieSlaise"

export const store = configureStore({
    reducer: {
        movie,
    },
});