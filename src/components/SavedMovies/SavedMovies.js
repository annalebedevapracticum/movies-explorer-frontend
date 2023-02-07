import { useState } from "react";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Preloader from "../Movies/Preloader/Preloader";
import SearchForm from "../Movies/SearchForm/SearchForm";
import './SavedMovies.css';


function SavedMovies() {
    const [cardsData, setCardsData] = useState([]);

    return (
        <div className="saved-movies">
            <SearchForm />
            {cardsData ? <MoviesCardList data={cardsData} /> : <Preloader />}
        </div>

    )
}

export default SavedMovies;