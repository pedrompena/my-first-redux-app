import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isFetchingMovieRatings: false,
    isFetchingMovieDetail: false,
    isLoading: true,
    errorMovieRatings: null,
    errorMovieDetail: null,
    succesMovieRatings: null,
    succesMovieDetail: null,
    ratings: {},
    movieDetail: {},
};

const movieSlice = createSlice({
    name: 'movies-slice',
    initialState,
    reducers: {
        startFetchMovieRatings(state) {
            state.isLoading = false;
            state.isFetchingMovieRatings = true;
        },
        succesFetchMovieRatings(state, action) {
            state.isLoading = false;
            state.isFetchingMovieRatings = false;
            state.ratings = action.payload.data.results;
            state.succesMovieRatings = true;
            state.errorMovieRatings = null;
        },
        errorFetchMovieRatings(state, action) {
            state.isLoading = false;
            state.isFetchingMovieRatings = false;
            state.ratings = {};
            state.succesMovieRatings = false;
            state.errorMovieRatings = action.payload.error;
        },
        startFetchMovieDetail(state) {
            state.isFetchingMovieDetail = true;
        },
        succesFetchMovieDetail(state, action) {
            state.succesMovieDetail = true;
            state.errorMovieDetail = false;
            state.movieDetail = action.payload;
            state.isFetchingMovieDetail = false;
        },
        errorFetchMovieDetail(state, action) {
            state.isFetchingMovieDetail = false;
            state.succesMovieDetail = false;
            state.errorMovieDetail = action.payload.error;
            state.movieDetail = {};
        },
    }
});

const { actions, reducer } = movieSlice;
const {
    startFetchMovieRatings,
    succesFetchMovieRatings,
    errorFetchMovieRatings,
    startFetchMovieDetail,
    succesFetchMovieDetail,
    errorFetchMovieDetail,
} = actions;

export {
    startFetchMovieRatings,
    succesFetchMovieRatings,
    errorFetchMovieRatings,
    startFetchMovieDetail,
    succesFetchMovieDetail,
    errorFetchMovieDetail,
};

export default reducer;

