import React, { useState } from 'react';
import MoviesCard from './MoviesCard/MoviesCard';
import './MoviesCardList.css';
import data from '../../../moviesData.json';

const baseUrl = 'https://api.nomoreparties.co';

function MoviesCardList() {
    const [cardsCount, setCardsCount] = useState(12);

    const handleMoreClick = () => {
        setCardsCount(cardsCount + 6);
    }

    const getCards = () => {
        return data.slice(0, cardsCount);
    }

    return (<>
        <div className='movies-cards'>
            {getCards().map((item, index) => <MoviesCard link={baseUrl + item.image.url} name={item.nameRU} duration={item.duration} isLiked={index % 3 === 0} hasDelete={index % 5 === 0}/>)}
        </div>
        <div className='movies-cards__wrapper'>
            <button className='movies-cards__button' onClick={handleMoreClick}>Ещё</button>
        </div>
    </>
    )
}

export default MoviesCardList;