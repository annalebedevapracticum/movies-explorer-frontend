import { request } from "./helpers";

export const useMainApi = () => {
    const BASE_URL = 'https://api.lebedeva-films.nomoredomains.rocks';
    const getUserInfo = () => {
        return request(`${BASE_URL}/users/me`, {
            method: 'GET',
        })
    };

    const updateUserInfo = ({ email, name }) => {
        return request(`${BASE_URL}/users/me`, {
            method: 'PATCH',
            body: JSON.stringify({
                email,
                name
            })
        })
    };

    const getMoviesInfo = () => {
        return request(`${BASE_URL}/movies`, {
            method: 'GET',
        })
    };

    const addMovie = ({ country, director, duration, year, description, image, trailerLink, nameRU, nameEN, thumbnail, movieId }) => {
        return request(`${BASE_URL}/movies`, {
            method: 'POST',
            body: JSON.stringify({
                country, director, duration, year, description, image, trailerLink, nameRU, nameEN, thumbnail, movieId
            })
        })
    };

    const removeMovie = (movieId) => {
        return request(`${BASE_URL}/movies/${movieId}`, {
            method: 'DELETE',
        })
    };

    const register = ({ email, password, name }) => {
        return request(`${BASE_URL}/signup`, {
            method: 'POST',
            body: JSON.stringify({
                email,
                password,
                name
            })
        })
    };

    const authorize = ({ email, password }) => {
        return request(`${BASE_URL}/signin`, {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            })
        })
    };

    return {
        getUserInfo, updateUserInfo, getMoviesInfo, addMovie, removeMovie, register, authorize
    }
}

