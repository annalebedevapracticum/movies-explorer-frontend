import { useEffect, useState } from "react";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Preloader from "./Preloader/Preloader";
import SearchForm from "./SearchForm/SearchForm";
import { useMoviesApi } from '../../utils/MoviesApi';
import './Movies.css';


function Movies() {
    const movieApi = useMoviesApi();
    const [moviesData, setMoviesData] = useState();
    const [visibleMovies, setVisibleMovies] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        movieApi.getMovies().then(data => {
            setMoviesData(data);
        }).catch(() => {
            setError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
        }
        )
    }, [])

    const handleSearch = ({ errors, search, isShortMovies }) => {
        localStorage.setItem('searchParams', JSON.stringify({ search, isShortMovies }));
        if (errors) {
            setError(errors.search[0]);
        } else {
            if (moviesData) {
                const searchedMovies = moviesData.filter((item) => {
                    const shortMovieFilter = isShortMovies
                        ? item.duration <= 40
                        : true;
                    return (item.nameRU.toLowerCase().includes(search.toLowerCase()) || item.nameEN.toLowerCase().includes(search.toLowerCase())) && shortMovieFilter;
                });
                setVisibleMovies(searchedMovies);
            }
        }
    }

    return (
        <div className="movies">
            <SearchForm onSearch={handleSearch} moviesData={moviesData} />
            {moviesData || error ? <MoviesCardList data={visibleMovies} error={error} /> : <Preloader />}
        </div>

    )
}

export default Movies;