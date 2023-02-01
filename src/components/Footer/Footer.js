import React from 'react';
import './Footer.css';


function Footer() {
    return (
        <footer className="footer">
            <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
            <div className="footer__info">
                <p className="footer__year">&copy; 2023</p>
                <div className='footer__wrapper'>
                    <a className="footer__link" target="_blank" href='https://practicum.yandex.ru/' rel="noreferrer">Яндекс.Практикум</a>
                    <a className="footer__link" target="_blank" href='https://github.com/annalebedevapracticum' rel="noreferrer">Github</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;