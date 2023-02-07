import { request } from "./helpers";

export const useMoviesApi = () => {
    const BASE_URL = 'https://api.nomoreparties.co';

    const getMovies = () => {
        return request(`${BASE_URL}/beatfilm-movies`, {
            method: 'GET',
        })
    };


    return {
        getMovies,
    }
}

