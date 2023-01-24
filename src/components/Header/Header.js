import logo from '../../images/logo.svg';
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import NavTab from '../Main/NavTab/NavTab';


function Header({ onLogOut, email, loggedIn, isMainPage }) {
    return (
        <header className={`header ${!isMainPage ? "header-white" : ""}`}>
            <img className="header__logo" alt="Лого" src={logo} />
            {!loggedIn && <div className='header__actions'>
                <Link to="/sign-up" className="header__action-register">Регистрация</Link>
                <Link to="/" className="header__action-entry">Войти</Link>
            </div>}
            {loggedIn && <NavTab />}
        </header >
    )
}

export default Header;
