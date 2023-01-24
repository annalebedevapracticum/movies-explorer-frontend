import React from 'react';
import { Link } from 'react-router-dom';
import './NavTab.css';
import account from '../../../images/account.svg';

function NavTab() {
    return (
        <div className="nav-tab">
            <div>
                <Link to="/movies" className="nav-tab__movies">Фильмы </Link>
                <Link to="/saved-movies" className="nav-tab__movies nav-tab__saved-movies">Сохранённые фильмы</Link>
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

export default NavTab;




