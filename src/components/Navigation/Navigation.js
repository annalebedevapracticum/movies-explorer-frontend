import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import account from '../../images/account.svg';
function Navigation() {
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

    useEffect(() => {
        setMobileMenuVisible(false);
    }, [window.location.pathname]);

    const handleBurgerChange = () => {
        setMobileMenuVisible(!mobileMenuVisible);
    }

    return (
        <section className="navigation">
            <div className='navigation navigation__desctop'>
                <div>
                    <Link to="/movies" className="navigation__movies">Фильмы</Link>
                    <Link to="/saved-movies" className="navigation__movies navigation__saved-movies">Сохранённые фильмы</Link>
                </div>
                <Link to="/profile" className='account-button__wrapper'><button className='account-button'>
                    Аккаунт
                    <div className='icon-wrapper'>
                        <img alt="Аккаунт" src={account} />
                    </div>
                </button></Link>
            </div>
            <div className="hamburger-menu">
                <input id="menu__toggle" type="checkbox" checked={mobileMenuVisible} onChange={handleBurgerChange} />
                <label className="menu__btn" htmlFor="menu__toggle">
                    <span />
                </label>
                <div className='menu__background' />
                <ul className="menu__box">
                    <li><Link to="/" className="hamburger-menu__navigation">Главная </Link></li>
                    <li><Link to="/movies" className="hamburger-menu__navigation">Фильмы </Link></li>
                    <li><Link to="/saved-movies" className="hamburger-menu__navigation">Сохранённые фильмы</Link></li>
                    <li>
                        <Link to="/profile" className='account-button__wrapper'>
                            <button className='account-button'>
                                Аккаунт
                                <div className='icon-wrapper'>
                                    <img alt="Аккаунт" src={account} />
                                </div>
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </section >
    )
}

export default Navigation;




