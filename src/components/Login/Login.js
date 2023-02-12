import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { validateLoginForm } from '../../utils/validate';
import './Login.css';


function Login({ onLogin }) {
    const [error, setError] = useState();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const errors = validateLoginForm({ email, password });
        if (!email && !password) {
            setError({});
        } else {
            setError(errors);
        }
    }, [email, password]);

    const handleLogin = (e) => {
        e.preventDefault();
        onLogin({ email, password }).then(() => {
            navigate('/movies');
        }).catch(error => {
            setError({ api: error.message });
        })
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }
    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    return (
        <form className="login" onSubmit={handleLogin} noValidate>
            <div className='login__wrapper'>
                <Link to="/"><img className="header__logo" alt="Лого" src={logo} /></Link>
                <h2 className="login__welcome">Рады видеть!</h2>
                <div className='login__welcome_wrapper'>
                    <label className="login__label" htmlFor="email">Email</label>
                    <input id="email" className="login__input" value={email} onChange={handleEmailChange} name="email" type="email" />
                    <div className="divider" />
                    {error?.email && <div className="login__error">{error.email.slice(-1)[0]}</div>}
                    <label className="login__label" htmlFor="password">Пароль</label>
                    <input id="password" className="login__input" value={password} onChange={handlePasswordChange} name="password" type="password" />
                    <div className="divider" />
                    {error?.password && <div className="login__error">{error.password.slice(-1)[0]}</div>}
                    {error?.api && <div className="login__error">{error.api}</div>}
                </div>
            </div>
            <button type="submit" className="login__button" disabled={!!error}>Войти</button>
            <div className="login__check">
                <span className="login__description">Ещё не зарегистрированы?</span>
                <Link to='/signup' className="login__entry">Регистрация</Link>
            </div>
        </form>
    )
}

export default Login;