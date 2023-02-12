import React, { useEffect, useState } from 'react';
import './SearchForm.css';
import find from '../../../images/find.svg';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import { validateSearch } from '../../../utils/validate';


function SearchForm({ onSearch, moviesData, isSavedPage }) {
    const [search, setSearch] = useState('');
    const [isShortMovies, setIsShortMovies] = useState(false);

    useEffect(() => {
        if (!isSavedPage) {
            const searchParams = JSON.parse(localStorage.getItem('searchParams'));
            if (searchParams) {
                setSearch(searchParams.search);
                setIsShortMovies(searchParams.isShortMovies);
            }
        }
    }, [])

    useEffect(() => {
        if (moviesData) {
            onSearch({ search: search || "", isShortMovies });
        }
    }, [moviesData, isShortMovies])

    const handleSearch = (e) => {
        e.preventDefault();
        const errors = validateSearch({ search });
        onSearch({ errors, search, isShortMovies });
    }

    function handleSearchChange(e) {
        setSearch(e.target.value);
    }
    function handleShortChange(e) {
        setIsShortMovies(e.target.checked);
    }

    return (<div className="search-form__wrapper">
        <form className="search-form" onSubmit={handleSearch}>
            <input placeholder="Фильм" type="text" className="search-form__find" value={search} onChange={handleSearchChange} name="search" />
            <button type="submit" className="search-form__button"><img alt="Поиск" src={find} /></button>
        </form>
        <FilterCheckbox label="Короткометражки" checked={isShortMovies} onChange={handleShortChange} />
    </div>
    )
}

export default SearchForm;