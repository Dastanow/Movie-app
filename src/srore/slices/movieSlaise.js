import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieApi from "../../common/api/movieApi.jsx";
import { APIKey } from "../../common/api/MovieApiKey.jsx";

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", 
async (movieText) => {
    const { data } = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&
    type=movie`);
    return data
});
export const fetchAsyncShows = createAsyncThunk("movies/fetchAsyncShows", 
async (showText) => {
    const { data } = await movieApi.get(`?apiKey=${APIKey}&s=${showText}&
    type=series`);
    return data
});
export const fetchAsyncAnime = createAsyncThunk("movies/fetchAsyncShows", 
async (animeText) => {
    const { data } = await movieApi.get(`?apiKey=${APIKey}&s=${animeText}&
    type=movie`);
    return data
});

const initialState = {
    movies: {},
    shows: {},
    anime: {},
    selectMovieState: {},
};

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {},
    extraReducers: {
       [fetchAsyncMovies.pending]: () => {
        console.log("Pending");
       },
       [fetchAsyncMovies.fulfilled]: (state, action) => {
        console.log("Success", action.payload);
        state.movies = action.payload;
       },
       [fetchAsyncMovies.rejected]: () => {
        console.log("Rejected");
       },
       [fetchAsyncShows.fulfilled]: (state, action) => {
        console.log("cess", action.payload);
        state.shows = action.payload;
       },
       [fetchAsyncAnime.fulfilled]: (state, action) => {
        console.log("anime", action.payload);
        state.anime = action.payload;
       },
    },
});

export default movieSlice.reducer;