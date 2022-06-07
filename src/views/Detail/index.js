import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"; 
import { fetchMovieDetail, fetchMovieRatings } from "../../redux/actions/movies";
import yellowStar from "../../img/yellow-star.png"
import Loading from "../../components/Loading";

const Detail = () => {
    const { movieId } = useParams();
    const dispatch = useDispatch();
    const { 
        isFetchingMovieRatings,
        isFetchingMovieDetail,
        isLoading,
        errorMovieRatings,
        errorMovieDetail,
        ratings,
        movieDetail,
    } = useSelector((state) => state.moviesReducerSlice);


    useEffect(() => {
        dispatch(fetchMovieRatings(movieId));
    }, [dispatch, movieId]);

    useEffect(() => {
        dispatch(fetchMovieDetail(movieId));
    }, [dispatch, movieId]);

    const renderContent = () => {
        if (isLoading || isFetchingMovieDetail || isFetchingMovieRatings) {
            return <Loading message="Obteniendo informacion de la pelicula..." />;
        } else if (errorMovieDetail || errorMovieRatings) {
            return <p>Ha ocurrido un error al obtener la informacion de la pelicula.</p>;
        }

        return (
            <>
                <div className="w-1/3 flex justify-center">
                    <img src={movieDetail?.details?.results?.primaryImage?.url} className="w-80" alt="movie-detail"/>
                </div>
                <div className="flex felx-col w-2/3 items-start overflow-auto my-16 justify-center">
                    <h2 className="text-4xl font-bold my-1">{movieDetail?.details?.results?.titleText?.text} ({movieDetail?.details?.results?.releaseDate?.year})</h2>
                    <div className="flex flex-row my-1 items-center">
                    <span className="text-xl font-bold w-full">{ratings?.averageRating}</span>
                    <img src={yellowStar} alt="rating-star" className="ml-1 w-6 h-6" />
                    </div>
                </div>
            </>
        );
    };


    return (
        <div className="flex flex-row px-16 h-screen items-center justify-center">
            {renderContent()}
        </div>
    );
};

export default Detail;