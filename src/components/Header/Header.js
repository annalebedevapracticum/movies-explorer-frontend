import logo from '../../images/logo.svg';
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';


function Header({ onLogOut, email, loggedIn, isMainPage }) {
    return (
        <header className={`header ${!isMainPage ? "header-white" : ""}`}>
            <Link to="/"><img className="header__logo" alt="Лого" src={logo} /></Link>
            {loggedIn ? <Navigation /> : <div className='header__actions'>
                <Link to="/signup" className="header__action-register">Регистрация</Link>
                <Link to="/signin" className="header__action-entry">Войти</Link>
            </div>}
        </header >
    )
}

export default Header;
