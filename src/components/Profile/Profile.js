import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import '../Login/Login.css'
import { useContext } from 'react';
import { CurrentUserContext } from '../../utils/helpers';
import { validateProfileForm } from '../../utils/validate';


function Profile({ onLogout, onSave }) {
    const [error, setError] = useState();
    const user = useContext(CurrentUserContext);
    const [email, setEmail] = useState(user.email);
    const [name, setName] = useState(user.name);
    const [isEditMode, setisEditMode] = useState(false);


    const handleSaveProfile = (e) => {
        e.preventDefault();
        const errors = validateProfileForm({ email, name });
        if (errors) {
            setError(errors);
        } else {
            if (user.name === name && user.email === email) {
                setisEditMode(false);
            } else {
                onSave({ email, name }).then(() => {
                    setisEditMode(false);
                }).catch(error => {
                    setError({ api: error.message });
                })
            }
        }
    }


    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handleEditModeClick(e) {
        e.preventDefault();
        setisEditMode(true);
    }


    return (
        <form className="profile" onSubmit={handleSaveProfile} noValidate>
            <h2 className="profile__welcome">Привет, {user.name}!</h2>
            <div className='profile__wrapper profile__wrapper_border'>
                <label className="profile__label" htmlFor="name">Имя</label>
                {isEditMode ? <input id="name" className="profile__field" value={name} name="name" type="text" onChange={handleNameChange} /> : <div className="profile__field">{name}</div>}
            </div>
            {error?.name && <div className="login__error">{error.name.slice(-1)[0]}</div>}
            <div className='profile__wrapper'>
                <label className="profile__label" htmlFor="email">E-mail</label>
                {isEditMode ? <input id="email" className="profile__field" value={email} name="email" type="email" onChange={handleEmailChange} /> : <div className="profile__field">{email}</div>}
            </div>
            {error?.email && <div className="login__error">{error.email.slice(-1)[0]}</div>}
            {error?.api && <div className="login__error">{error.api}</div>}
            {!isEditMode
                ? <button className="profile__button" onClick={handleEditModeClick}> Редактировать </button>
                : <button type="submit" className="profile__button-save"> Сохранить </button>}
            {!isEditMode && <Link to="/"><button type="submit" className="profile__button_exit" onClick={onLogout}>Выйти из аккаунта</button></Link>}
        </form>
    )
}

export default Profile;