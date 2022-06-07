import { useParams } from "react-router-dom";
import moviesImage from "../../img/movie-theater.png"
import { useFetchMoviesQuery } from "../../redux/api/movies";
import Loading from "../../components/Loading";
import List from "./components/List";
import { useNavigate } from "react-router-dom";

const Results = () => {
    const { title } = useParams();
    const { data: movies, isLoading, isSuccess, isFetching, error } = useFetchMoviesQuery(title);
    const navigate = useNavigate();

    const handleListItemClick = (movieId) => {
        navigate(`/detail/${movieId}`);
    };

    const rederContent = () => {
        if (error)
            return (
                <div className="flex items-center justify-center h-full">
                    <p className="text-xl">{error.error}</p>
                </div>
            );
        else if (isLoading || isFetching)
            return <Loading message="Buscando peliculas..." />;
        else if (isSuccess && movies?.results)
            return <List data={movies?.results} onListItemClick={handleListItemClick} />;
    };

    return (
        <div className="flex flex-row">
            <div className="w-3/5 h-screen overflow-y-auto p-10">
                {rederContent()}
            </div>
            <div className="w-2/5">
                <img src={moviesImage} alt="Movies" className="w-full h-screen object-cover" />
            </div>
        </div>
    );
};

export default Results;