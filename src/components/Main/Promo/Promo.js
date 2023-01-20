import React from 'react';
import promoimg from '../../../images/promo.svg';
import './Promo.css';

function Promo() {
    return (
        <section className="promo">
            <div className="promo__wrapper">
                <h1 className="promo__title">Учебный проект студента факультета <br/> Веб-разработки.</h1>
                <p className="promo__info">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                <button className="promo__button">Узнать больше</button>
            </div>
            <img className="promo__image" alt="Промо" src={promoimg} />
        </section>

    )
}

export default Promo;