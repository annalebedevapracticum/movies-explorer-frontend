import React from 'react';
import './SearchForm.css';
import find from '../../../images/find.svg';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';


function SearchForm() {
    return (<div className="search-form__wrapper">
        <form className="search-form">
            <input placeholder="Фильм" type="text" className="search-form__find" />
            <button className="search-form__button"><img alt="Поиск" src={find} /></button>
        </form>
        <FilterCheckbox label="Короткометражки"/>
    </div>
    )
}

export default SearchForm;