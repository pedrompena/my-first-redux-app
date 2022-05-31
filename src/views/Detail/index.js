import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"; 
import { fetchMovieDetail, fetchMovieRatings } from "../../redux/actions/movies";

const Detail = () => {
    const { movieId } = useParams();
    const dispatch = useDispatch();
    const { succes, error, isFetching, isLoading, ratings} = useSelector((state) => state.moviesReducer);

    useEffect(() => {
        dispatch(fetchMovieRatings(movieId));
    }, [dispatch, movieId]);

    useEffect(() => {
        dispatch(fetchMovieDetail(movieId));
    }, [dispatch, movieId]);

    return <div>Detail</div>;
};

export default Detail;