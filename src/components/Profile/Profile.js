import React, { useState } from 'react';
import './Profile.css';
import '../Login/Login.css'


function Profile({ }) {
    const basename = 'Виталий';
    const baseemail = 'pochta@yandex.ru';

    const [email, setEmail] = useState(baseemail);
    const [name, setName] = useState(basename);

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    const [isEditMode, setisEditMode] = useState(false);

    function handleEditModeClick(e) {
        e.preventDefault();
        if (!isEditMode) {
            setisEditMode(true);
        } else {
            // handle save
            // .then
            setisEditMode(false);
        }
    }


    return (
        <form className="profile">
            <h2 className="profile__welcome">Привет, {name}!</h2>
            <div className='profile__wrapper profile__wrapper_border'>
                <label className="profile__label" htmlFor="name">Имя</label>
                {isEditMode ? <input id="name" className="profile__field" value={name} name="name" type="text" onChange={handleNameChange} /> : <div className="profile__field">{name}</div>}
            </div>
            <div className='profile__wrapper'>
                <label className="profile__label" htmlFor="email">E-mail</label>
                {isEditMode ? <input id="email" className="profile__field" value={email} name="email" type="email" onChange={handleEmailChange} /> : <div className="profile__field">{email}</div>}
            </div>
            {!isEditMode ? <button type="submit" className="profile__button" onClick={handleEditModeClick}> Редактировать </button> : <button  className="profile__button-save"> Сохранить </button>}
            {!isEditMode && <button type="submit" className="profile__button_exit">Выйти из аккаунта</button>}
        </form>
    )
}

export default Profile;