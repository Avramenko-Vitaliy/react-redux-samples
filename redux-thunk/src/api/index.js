import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: '2d5baee3bdc854638c94f95989566db2'
    },
    timeout: 3000
});

export function getTopFilms(page = 1) {
    return instance.get('/movie/top_rated', {
        params: { page }
    });
}