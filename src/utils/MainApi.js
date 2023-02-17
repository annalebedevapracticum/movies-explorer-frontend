import { TOKEN_KEY } from "./constants";
import { mainRequest } from "./helpers";

export const useMainApi = () => {
    const getHeaders = () => {
        return {
            'Content-Type': 'application/json',
            authorization: localStorage.getItem(TOKEN_KEY),
          }
    }

    const getUserInfo = () => {
        return mainRequest(`/users/me`, {
            method: 'GET',
            headers: getHeaders(),
        })
    };

    const updateUserInfo = ({ email, name }) => {
        return mainRequest(`/users/me`, {
            method: 'PATCH',
            headers: getHeaders(),
            body: JSON.stringify({
                email,
                name
            })
        })
    };

    const getMoviesInfo = () => {
        return mainRequest(`/movies`, {
            method: 'GET',
            headers: getHeaders(),
        })
    };

    const addMovie = ({ country, director, duration, year, description, image, trailerLink, nameRU, nameEN, thumbnail, movieId }) => {
        return mainRequest(`/movies`, {
            method: 'POST',
            headers: getHeaders(),
            body: JSON.stringify({
                country, director, duration, year, description, image, trailerLink, nameRU, nameEN, thumbnail, movieId
            })
        })
    };

    const removeMovie = (movieId) => {
        return mainRequest(`/movies/${movieId}`, {
            method: 'DELETE',
            headers: getHeaders(),
        })
    };

    const register = ({ email, password, name }) => {
        return mainRequest(`/signup`, {
            method: 'POST',
            headers: getHeaders(),
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
            headers: getHeaders(),
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

