import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import account from '../../images/account.svg';

function Navigation() {
    return (
        <div className="navigation">
            <div>
                <Link to="/movies" className="navigation__movies">Фильмы </Link>
                <Link to="/saved-movies" className="navigation__movies navigation__saved-movies">Сохранённые фильмы</Link>
            </div>
            <button className='account-button'>
                Аккаунт
                <div className='icon-wrapper'>
                    <img alt="Аккаунт" src={account} />
                </div>
            </button>

        </div >
    )
}

export default Navigation;




