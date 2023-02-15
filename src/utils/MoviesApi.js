import { moviesRequest } from "./helpers";

export const useMoviesApi = () => {
    const getMovies = () => {
        return moviesRequest(`/beatfilm-movies`, {
            method: 'GET',
        })
    };


    return {
        getMovies,
    }
}

