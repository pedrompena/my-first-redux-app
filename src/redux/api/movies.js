import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const headers = {
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
    'X-RapidAPI-Key': '804a9b1506msh45e7a57adc66749p11fe1ejsn810da8efc3a3'
};

export const moviesApi = createApi({
    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://moviesdatabase.p.rapidapi.com' }),
    endpoints: (builder) => ({
        fetchMovies: builder.query({
            query: (title) => ({
                url: `/titles/search/title/${title}?info=mini_info&limit=10&page=1&titleType=movie`,
                method: 'GET',
                headers
            })
        })
    })
});

export const { useFetchMoviesQuery } = moviesApi;