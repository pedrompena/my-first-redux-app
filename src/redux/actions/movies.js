import { createAction } from "@reduxjs/toolkit";

const BASE_URL = "https://moviesdatabase.p.rapidapi.com/titles";
const headers = {
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
        'X-RapidAPI-Key': '804a9b1506msh45e7a57adc66749p11fe1ejsn810da8efc3a3',
};


export const startFetchMovieRatings = createAction('START_FETCH_MOVIE_RATINGS');
export const succesFetchMovieRatings = createAction('SUCCES_FETCH_MOVI_RATINGS');
export const errorFetchMovieRatings = createAction('ERROR_FETCH_MOVIE_RATINGS');

export const fetchMovieRatings = (movieId) => async (dispatch) => {
    try {
        dispatch(startFetchMovieRatings());

        const response = await fetch(`${BASE_URL}/${movieId}/ratings`, { headers });
        const data = await response.json();
        
        dispatch(succesFetchMovieRatings({ data }));
    } catch (error) {
        dispatch(errorFetchMovieRatings({ error }));
    }
};

export const startFetchMovieDetail = createAction('START_FETCH_MOVIE_DETAIL');
export const succesFetchMovieDetail = createAction('SUCCES_FETCH_MOVIE_DETAIL');
export const errorFetchMovieDetail = createAction('ERROR_FETCH_MOVIE_DETAIL');


export const fetchMovieDetail = (movieId) => async (dispatch) => {
    try {
        dispatch(startFetchMovieDetail());

        const titleResponse = await fetch(`${BASE_URL}/${movieId}?info=mini_info`, { headers })
        const titleData = await titleResponse.json();

        dispatch(succesFetchMovieDetail({ details: titleData }));
    } catch (error) { 
        dispatch(errorFetchMovieDetail({ error }));
    }
};