import React from "react";
import { SHORT_MOVIES_TIME } from "./constants";

export const request = (url, params) => fetch(url, {
  ...params,
  headers: {
    'Content-Type': 'application/json',
    authorization: localStorage.getItem('token'),
  }
})
  .then(async res => {
    const responseData = await res.json();
    if (res.ok) {
      return responseData.data ? responseData.data : responseData;
    }
    return Promise.reject(responseData);
  });


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