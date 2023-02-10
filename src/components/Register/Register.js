import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../images/logo.svg';
import { validateRegistrationForm } from "../../utils/validate";
import '../Login/Login.css';
import '../Register/Register.css';



function Register({ onRegister }) {
    const [error, setError] = useState();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const errors = validateRegistrationForm({ email, password, name });
        if (errors) {
            setError(errors);
        } else {
            onRegister({ email, password, name }).then(() => {
                navigate('/movies');
            }).catch(error => {
                setError({ api: error.message });
            })
        }
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
        <form className="login" onSubmit={handleRegister} noValidate>
            <div className='login__wrapper'>
                <Link to="/"><img className="header__logo" alt="Лого" src={logo} /></Link>
                <h2 className="login__welcome">Добро пожаловать!</h2>
                <div className='login__welcome_wrapper'>
                    <label className="login__label" htmlFor="name">Имя</label>
                    <input id="name" className="login__input" value={name} onChange={handleNameChange} name="name" type="text" />
                    <div className="divider" />
                    {error?.name && <div className="login__error">{error.name.slice(-1)[0]}</div>}
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
            <button type="submit" className="register__button login__button">Зарегистрироваться</button>
            <div className="login__check">
                <span className="login__description">Уже зарегистрированы?</span>
                <Link to='/signin' className="login__entry">Войти</Link>
            </div>
        </form>
    )
}

export default Register;

