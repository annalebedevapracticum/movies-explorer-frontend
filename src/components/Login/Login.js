import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Login.css';


function Login({ onLogin }) {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        onLogin({ email, password }).then(() => {
            navigate('/');
        })
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }
    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    return (
        <form className="login" onSubmit={handleLogin}>
            <div className='login__wrapper'>
                <img className="header__logo" alt="Лого" src={logo} />
                <h2 className="login__welcome">Рады видеть!</h2>
                <div className='login__welcome_wrapper'>
                    <label className="login__label" htmlFor="email">Email</label>
                    <input id="email" className="login__input" value={email} onChange={handleEmailChange} name="email" type="email" />
                    <div className="divider" />
                    <label className="login__label" htmlFor="password">Пароль</label>
                    <input id="password" className="login__input" value={password} onChange={handlePasswordChange} name="password" type="password" />
                    <div className="divider" />
                </div>
            </div>
            <button type="submit" className="login__button">Войти</button>
            <div className="login__check">
                <span className="login__description">Ещё не зарегистрированы?</span>
                <Link to='/signup' className="login__entry">Регистрация</Link>
            </div>
        </form>
    )
}

export default Login;