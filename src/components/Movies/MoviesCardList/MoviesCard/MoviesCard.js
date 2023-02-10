// import { CurrentUserContext } from "../contexts/CurrentUserContext";
import React from "react";
import './MoviesCard.css';
import iconRemove from '../../../../images/delete.svg';
import save from '../../../../images/add.svg';

function MoviesCard({ link, name, duration, isLiked, hasDelete, onCardLike, onCardDelete, trailerLink }) {

    const getFilmDuration = () => {
        const hours = Math.trunc(duration / 60);
        const minutes = duration - hours * 60;
        return `${hours}ч ${minutes}м`;
    }
    // const { currentUser } = React.useContext(CurrentUserContext);
    // const getIsLiked = () => likes.some((item) => {
    //     return item._id === currentUser._id;
    // })

    // const isOwner = owner._id === currentUser._id;
    return (
        <div className="movies-card">
            <a href={trailerLink} target="_blank" rel="noreferrer"><img className="movies-card__image" alt="Постер" src={link} /></a>
            {hasDelete && <button type="button" onClick={onCardDelete} className="movies-card__toogl"><img alt="Удалить" src={iconRemove} /></button>}
            {!hasDelete && isLiked && <button type="button" onClick={onCardDelete} className="movies-card__toogl"><img alt="Удалить" src={save} /></button>}
            {!hasDelete && !isLiked && <button type="button" onClick={onCardDelete} className="movies-card__save">Сохранить</button>}
            <div className="movies-card__wrapper">
                <p className="movies-card__title">{name}</p>
                <div className="movies-card__duration">{getFilmDuration()}</div>
            </div>
        </div>
    )
}

export default MoviesCard;
