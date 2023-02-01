import React from 'react';
import './AboutMe.css';
import photo from '../../../images/photo.jpg';


function AboutMe() {
    return (
        <section className="about-me">
            <h2 className="section-title">Студент</h2>
            <div className="about-me__wrapper">
                <div>
                    <h3 className="about-me__name">Анна</h3>
                    <p className="about-me__profession">Фронтенд-разработчик, 25 лет</p>
                    <p className="about-me__description">Я родилась и живу в городе Рязань, закончила Рязанский государственный радиотехнический университет им. В.Ф. Уткина. Люблю спорт, музыку и путешествия. Долгое время работала бухгалтером, пока не решила пройти курс по веб-разработке и связать свою жизнь с программированием. </p>
                    <a className="about-me__info" target="_blank" href='https://github.com/annalebedevapracticum' rel="noreferrer">Github</a>
                </div>
                <img className="about-me__image" alt="Фото" src={photo} />
            </div>
        </section>
    )
}

export default AboutMe;