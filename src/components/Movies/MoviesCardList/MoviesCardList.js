import React, { useEffect, useMemo, useState } from 'react';
import MoviesCard from './MoviesCard/MoviesCard';
import './MoviesCardList.css';

const baseUrl = 'https://api.nomoreparties.co';

const DESCTOP_SIZE = 1280;
const TABLET_SIZE = 768;
const MOBILE_SIZE = 480;

const VIEW_DATA = {
    MOBILE: {
        count: 1,
        add: 2,
    },
    TABLET: {
        count: 2,
        add: 2,
    },
    DESCTOP: {
        count: 3,
        add: 3,
    },
}

function MoviesCardList({ data, error }) {
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
        return data.slice(0, cardsCount);
    }

    return (<>
        <div className='movies-cards'>
            {data.length
                ? getCards().map((item, index) => <MoviesCard {...item} link={baseUrl + item.image.url} name={item.nameRU} duration={item.duration} isLiked={index % 3 === 0} hasDelete={index % 5 === 0} key={index} />)
                : <div className='movies-cards__not-found'>{error || 'По вашему запросу ничего не найдено'}</div>}
        </div>
        {cardsCount < data.length && <div className='movies-cards__wrapper'>
            <button className='movies-cards__button' onClick={handleMoreClick}>Ещё</button>
        </div>}
    </>
    )
}

export default MoviesCardList;