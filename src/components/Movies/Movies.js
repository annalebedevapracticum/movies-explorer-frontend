import { useEffect, useState } from "react";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Preloader from "./Preloader/Preloader";
import SearchForm from "./SearchForm/SearchForm";
import './Movies.css';


function Movies() {
    const [cardsData, setCardsData] = useState();

    useEffect(() => {
        fetch('https://api.nomoreparties.co/beatfilm-movies', {
            method: 'GET'
        }).then(response => {
            return response.json();
        }).then(data => {
            setCardsData(data);
        })
    }, [])

    return (
        <div className="movies">
            <SearchForm />
            {cardsData ? <MoviesCardList data={cardsData} /> : <Preloader />}
        </div>

    )
}

export default Movies;