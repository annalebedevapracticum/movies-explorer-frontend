import React from 'react';
import './Footer.css';


function Footer() {
    return (
        <footer className="footer">
            <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
            <div className="footer__info">
                <p className="footer__year">&copy; 2023</p>
                <div>
                    <a className="footer__link" href='#'>Яндекс.Практикум</a>
                    <a className="footer__link" href='#'>Github</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;