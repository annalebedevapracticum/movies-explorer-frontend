import logo from '../../images/logo.svg';
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './Header.css';


function Header({ onLogOut, email }) {
    return (
        <header className="header">
            <img className="header__logo" alt="Лого" src={logo} />
            <div>
                <Routes>
                    <Route path="/" element={<div className='header__action-logged'>
                        <Link to="/sign-up" className="header__action-register">Регистрация</Link>
                        <Link to="/" className="header__action-entry">Войти</Link>
                    </div>} />
                    <Route path="/sign-in" element={ <Link onClick={onLogOut} to="/sign-in">Аккаунт</Link>} />
                </Routes>
            </div>
        </header>
    )
}

export default Header;