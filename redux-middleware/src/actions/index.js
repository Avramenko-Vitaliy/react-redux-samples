import { CALL_API } from '../middleware/api';

export const GET_FILMS = 'GET_FILMS';

export const getFilms = (page = 1) => ({
    [CALL_API]: {
        type: GET_FILMS,
        params: { page },
        endpoint: '/movie/top_rated',
    },
});
