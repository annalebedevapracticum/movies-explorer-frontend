import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../images/logo.svg';
import '../Login/Login.css';
import '../Register/Register.css';



function Register({ onRegister }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        onRegister({ email, password, name }).then(() => {
            navigate('/sign-in');
        })
    }
    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }
    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }



    return (
        <form className="login" onSubmit={handleRegister}>
            <div className='login__wrapper'>
                <img className="header__logo" alt="Лого" src={logo} />
                <h2 className="login__welcome">Добро пожаловать!</h2>
                <div className='login__welcome_wrapper'>
                    <label className="login__label" htmlFor="name">Имя</label>
                    <input id="name" className="login__input" value={name} onChange={handleNameChange} name="name" type="text" />
                    <div className="divider" />
                    <label className="login__label" htmlFor="email">Email</label>
                    <input id="email" className="login__input" value={email} onChange={handleEmailChange} name="email" type="email" />
                    <div className="divider" />
                    <label className="login__label" htmlFor="password">Пароль</label>
                    <input id="password" className="login__input" value={password} onChange={handlePasswordChange} name="password" type="password" />
                    <div className="divider" />
                </div>
            </div>
            <button type="submit" className="register__button login__button">Зарегистрироваться</button>
            <div className="login__check">
                <span className="login__description">Уже зарегистрированы?</span>
                <Link to='/signin' className="login__entry">Войти</Link>
            </div>
        </form>
    )
}

export default Register;

