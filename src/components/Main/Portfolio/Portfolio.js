import React from 'react';
import './Portfolio.css';
import arrow from '../../../images/followthelink.svg';


function Portfolio() {
    return (
        <div className="portfolio">
            <h3 className="portfolio__title">Портфолио</h3>
            <a className="portfolio__wrapper" href='#'>
                <span className="portfolio__info">Статичный сайт</span>
                <img className="portfolio__arrow" alt="Фото" src={arrow} />
            </a>
            <a className="portfolio__wrapper" href='#'>
                <span className="portfolio__info">Адаптивный сайт</span>
                <img className="portfolio__arrow" alt="Фото" src={arrow} />
            </a>
            <a className="portfolio__wrapper" href='#'>
                <span className="portfolio__info">Одностраничное приложение</span>
                <img className="portfolio__arrow" alt="Фото" src={arrow} />
            </a>
        </div>
    )
}

export default Portfolio;