import { useEffect, useState } from "react";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Preloader from "./Preloader/Preloader";
import SearchForm from "./SearchForm/SearchForm";
import { useMoviesApi } from '../../utils/MoviesApi';
import './Movies.css';
import { useMainApi } from "../../utils/MainApi";
import { getSearchedMovies } from "../../utils/helpers";
import { moviesBaseUrl, SEARCH_KEY } from "../../utils/constants";


function Movies() {
    const movieApi = useMoviesApi();
    const mainApi = useMainApi();
    const [moviesData, setMoviesData] = useState();
    const [myMoviesData, setMyMoviesData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [visibleMovies, setVisibleMovies] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        setIsLoading(true);
        Promise.all([movieApi.getMovies(), mainApi.getMoviesInfo()]).then(([data, myData]) => {
            setMoviesData(data);
            setMyMoviesData(myData);
            setIsLoading(false);
        }).catch(() => {
            setIsLoading(false);
            setError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
        })
    }, [])

    const handleSearch = ({ errors, search, isShortMovies }) => {
        localStorage.setItem(SEARCH_KEY, JSON.stringify({ search, isShortMovies }));
        if (errors) {
            setError(errors.search[0]);
        } else {
            setError(undefined);
            if (moviesData) {
                const searchedMovies = getSearchedMovies({ moviesData, isShortMovies, search });
                setVisibleMovies(searchedMovies);
            }
        }
    }

    const handleCardLike = (movie) => {
        const thumbnail =  moviesBaseUrl + movie.image.formats.thumbnail.url;
        const image =  moviesBaseUrl + movie.image.url;
        mainApi.addMovie({ ...movie, image, thumbnail }).then(newMovie => {
            setMyMoviesData([...myMoviesData, newMovie]);
        });
    }
    const handleCardDelete = (movieId) => {
        mainApi.removeMovie(movieId).then(removedMovie => {
            setMyMoviesData(myMoviesData.filter(item => item.movieId !== removedMovie.movieId));
        });

    }

    return (
        <div className="movies">
            <SearchForm onSearch={handleSearch} moviesData={moviesData} />
            {!isLoading ? <MoviesCardList
                data={visibleMovies}
                myData={myMoviesData}
                error={error}
                handleCardLike={handleCardLike}
                handleCardDelete={handleCardDelete}
            /> : <Preloader />}
        </div>

    )
}

export default Movies;