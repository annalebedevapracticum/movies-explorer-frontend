import React from "react";
import { SHORT_MOVIES_TIME } from "./constants";

export const getRequestFunc = (baseUrl, fixedParams) => {
  return (url, params) => fetch(baseUrl + url, {
    ...fixedParams,
    ...params,
  })
    .then(async res => {
      const responseData = await res.json();
      if (res.ok) {
        return responseData.data ? responseData.data : responseData;
      }
      return Promise.reject(responseData);
    });
}

export const mainRequest = getRequestFunc('https://api.lebedeva-films.nomoredomains.rocks', {
  headers: {
    'Content-Type': 'application/json',
    authorization: localStorage.getItem('token'),
  }
});

export const moviesRequest = getRequestFunc('https://api.nomoreparties.co');


export const CurrentUserContext = React.createContext();

export const getSearchedMovies = ({ moviesData, search, isShortMovies }) => {
  const searchedMovies = moviesData.filter((item) => {
    const shortMovieFilter = isShortMovies
      ? item.duration <= SHORT_MOVIES_TIME
      : true;
    return (item.nameRU.toLowerCase().includes(search.toLowerCase()) || item.nameEN.toLowerCase().includes(search.toLowerCase())) && shortMovieFilter;
  });
  return searchedMovies;
}