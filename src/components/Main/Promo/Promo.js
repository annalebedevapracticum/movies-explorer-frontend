import React from 'react';
import promoimg from '../../../images/promo.svg';
import './Promo.css';

function Promo() {
    return (
        <section className="promo">
            <div className="promo__wrapper">
                <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
                <p className="promo__info">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                <a href='#about-project'><button className="promo__button">Узнать больше</button></a>
            </div>
            <img className="promo__image" alt="Промо" src={promoimg} />
        </section>

    )
}

export default Promo;