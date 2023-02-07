import { useEffect, useState } from "react";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Preloader from "./Preloader/Preloader";
import SearchForm from "./SearchForm/SearchForm";
import { useMoviesApi } from '../../utils/MoviesApi';
import './Movies.css';


function Movies() {
    const movieApi = useMoviesApi();
    const [moviesData, setMoviesData] = useState();

    useEffect(() => {
        movieApi.getMovies().then(data => {
            setMoviesData(data);
        })
    }, [])

    return (
        <div className="movies">
            <SearchForm />
            {moviesData ? <MoviesCardList data={moviesData} /> : <Preloader />}
        </div>

    )
}

export default Movies;