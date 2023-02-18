import React, { useEffect, useMemo, useState } from 'react';
import { MOBILE_SIZE, moviesBaseUrl, TABLET_SIZE, VIEW_DATA } from '../../../utils/constants';
import MoviesCard from './MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ data, error, myData, handleCardLike, handleCardDelete }) {
    const cardsData = data || myData;
    const IS_SAVED_MOVIES_PAGE = !data;
    const [cardsCount, setCardsCount] = useState(0);
    const [addCardsCount, setAddCardsCount] = useState(0);
    const [viewType, setViewType] = useState('MOBILE');
    const timerObj = useMemo(() => ({ timer: undefined }), [])

    useEffect(() => {
        if (cardsCount < VIEW_DATA[viewType].count) {
            setCardsCount(VIEW_DATA[viewType].count);
        }
        setAddCardsCount(VIEW_DATA[viewType].add);
    }, [viewType])

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    const getViewType = () => {
        if (document.body.offsetWidth <= MOBILE_SIZE) {
            setViewType("MOBILE");
            return;
        }
        if (document.body.offsetWidth <= TABLET_SIZE) {
            setViewType("TABLET");
            return;
        }
        setViewType("DESCTOP");
    }

    const handleResize = () => {
        if (!timerObj.timer) {
            const timer = setTimeout(() => {
                getViewType();
                timerObj.timer = undefined;
            }, 1000);
            timerObj.timer = timer;
        }
    }

    const handleMoreClick = () => {
        setCardsCount(cardsCount + addCardsCount);
    }

    const getCards = () => {
        return cardsData.slice(0, cardsCount);
    }

    return (<>
        <div className='movies-cards'>
            {cardsData.length && !error
                ? getCards().map((item) => {
                    let myFilm = item;
                    if (!IS_SAVED_MOVIES_PAGE) {
                        myFilm = myData.find(film => film.movieId === item.id);
                    }
                    return <MoviesCard
                        {...item}
                        link={IS_SAVED_MOVIES_PAGE ? item.image : moviesBaseUrl + item.image.url}
                        name={item.nameRU}
                        duration={item.duration}
                        hasDelete={IS_SAVED_MOVIES_PAGE}
                        isLiked={!!myFilm}
                        key={IS_SAVED_MOVIES_PAGE ? item._id : item.id}
                        onCardDelete={() => handleCardDelete(myFilm._id)}
                        onCardLike={() => handleCardLike({ ...item, movieId: item.id })}
                    />
                })
                : <div className='movies-cards__not-found'>{error || 'По вашему запросу ничего не найдено'}</div>}
        </div>
        {cardsCount < cardsData.length && !error && <div className='movies-cards__wrapper'>
            <button className='movies-cards__button' onClick={handleMoreClick}>Ещё</button>
        </div>}
    </>
    )
}

export default MoviesCardList;