import { mainRequest } from "./helpers";

export const useMainApi = () => {
    const getUserInfo = () => {
        return mainRequest(`/users/me`, {
            method: 'GET',
        })
    };

    const updateUserInfo = ({ email, name }) => {
        return mainRequest(`/users/me`, {
            method: 'PATCH',
            body: JSON.stringify({
                email,
                name
            })
        })
    };

    const getMoviesInfo = () => {
        return mainRequest(`/movies`, {
            method: 'GET',
        })
    };

    const addMovie = ({ country, director, duration, year, description, image, trailerLink, nameRU, nameEN, thumbnail, movieId }) => {
        return mainRequest(`/movies`, {
            method: 'POST',
            body: JSON.stringify({
                country, director, duration, year, description, image, trailerLink, nameRU, nameEN, thumbnail, movieId
            })
        })
    };

    const removeMovie = (movieId) => {
        return mainRequest(`/movies/${movieId}`, {
            method: 'DELETE',
        })
    };

    const register = ({ email, password, name }) => {
        return mainRequest(`/signup`, {
            method: 'POST',
            body: JSON.stringify({
                email,
                password,
                name
            })
        })
    };

    const authorize = ({ email, password }) => {
        return mainRequest(`/signin`, {
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

