import { bindActionCreators } from "@reduxjs/toolkit";
import { 
    startFetchMovieRatings, 
    succesFetchMovieRatings, 
    errorFetchMovieRatings,
    startFetchMovieDetail,
    succesFetchMovieDetail,
    errorFetchMovieDetail,
} from "../actions/movies";

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

const MoviesReducer = (state = initialState, action) => {
    console.log(state, action);
    switch (action.type) {
        case startFetchMovieRatings.toString():
            return {
                ...state,
                isLoading: false,
                isFetchingMovieRatings: true,
            };
        case succesFetchMovieRatings.toString():
            return {
                ...state,
                isLoading: false,
                isFetchingMovieRatings: false,
                ratings: action.payload.data.results,
                succesMovieRatings: true,
                errorMovieRatings: null,
            };
        case errorFetchMovieRatings.toString():
            return {
                ...state,
                isLoading: false,
                isFetchingMovieRatings: false,
                ratings: {},
                succesMovieRatings: false,
                errorMovieRatings: action.payload.error,
            };
        case startFetchMovieDetail.toString():
            return{
                ...state,
                isFetchingMovieDetail: true,
            };
        case succesFetchMovieDetail.toString():
            return{
                ...state,
                succesMovieDetail: true,
                errorMovieDetail: false,
                movieDetail: action.payload,
                isFetchingMovieDetail: false,
            };
        case errorFetchMovieDetail.toString():
            return{
                ...state,
                isFetchingMovieDetail: false,
                succesMovieDetail: false,
                errorMovieDetail: action.payload.error,
                movieDetail: {},
            };
        default:
            return state;
    }
};

export default MoviesReducer;