import React, { useState } from 'react';
import MoviesCard from './MoviesCard/MoviesCard';
import './MoviesCardList.css';

const baseUrl = 'https://api.nomoreparties.co';

function MoviesCardList({ data }) {
    const [cardsCount, setCardsCount] = useState(12);

    const handleMoreClick = () => {
        setCardsCount(cardsCount + 6);
    }

    const getCards = () => {
        return data.slice(0, cardsCount);
    }

    return (<>
        <div className='movies-cards'>
            {data.length
                ? getCards().map((item, index) => <MoviesCard link={baseUrl + item.image.url} name={item.nameRU} duration={item.duration} isLiked={index % 3 === 0} hasDelete={index % 5 === 0} />)
                : <div className='movies-cards__not-found'>По вашему запросу ничего не найдено</div>}
        </div>
        {cardsCount < data.length && <div className='movies-cards__wrapper'>
            <button className='movies-cards__button' onClick={handleMoreClick}>Ещё</button>
        </div>}
    </>
    )
}

export default MoviesCardList;