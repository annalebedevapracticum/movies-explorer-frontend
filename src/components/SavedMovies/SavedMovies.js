import { useEffect, useState } from "react";
import { getSearchedMovies } from "../../utils/helpers";
import { useMainApi } from "../../utils/MainApi";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Preloader from "../Movies/Preloader/Preloader";
import SearchForm from "../Movies/SearchForm/SearchForm";
import './SavedMovies.css';


function SavedMovies() {
    const [myMoviesData, setMyMoviesData] = useState();
    const [isLoading, setIsLoading] = useState();
    const [visibleMovies, setVisibleMovies] = useState([]);
    const [error, setError] = useState('');
    const mainApi = useMainApi();


    useEffect(() => {
        setIsLoading(true);
        mainApi.getMoviesInfo().then((myData) => {
            setMyMoviesData(myData);
            setIsLoading(false);
        }).catch(() => {
            setIsLoading(false);
            setError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
        })
    }, [])

    const handleSearch = ({ search, isShortMovies }) => {
        const searchedMovies = getSearchedMovies({ moviesData: myMoviesData, isShortMovies, search });
        setVisibleMovies(searchedMovies);
    }

    const handleCardDelete = (movieId) => {
        mainApi.removeMovie(movieId).then(removedMovie => {
            setMyMoviesData(myMoviesData.filter(item => item._id !== removedMovie._id));
        });
    }

    return (
        <div className="saved-movies">
            <SearchForm onSearch={handleSearch} myMoviesData={myMoviesData}/>
            {!isLoading ? <MoviesCardList
                myData={visibleMovies}
                error={error}
                handleCardDelete={handleCardDelete}
            /> : <Preloader />}
        </div>

    )
}

export default SavedMovies;