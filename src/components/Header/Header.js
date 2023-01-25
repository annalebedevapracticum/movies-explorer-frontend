import logo from '../../images/logo.svg';
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';


function Header({ onLogOut, email, loggedIn, isMainPage }) {
    return (
        <header className={`header ${!isMainPage ? "header-white" : ""}`}>
            <img className="header__logo" alt="Лого" src={logo} />
            {isMainPage && <div className='header__actions'>
                <Link to="/sign-up" className="header__action-register">Регистрация</Link>
                <Link to="/" className="header__action-entry">Войти</Link>
            </div>}
            {loggedIn && !isMainPage && <Navigation />}
        </header >
    )
}

export default Header;
