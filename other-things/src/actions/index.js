import { CALL_API } from '../middleware/api';

import { normalizeEntityResponse, normalizePagingResponse } from '../utils/converters';

import schemas from '../data/schemas';

export const GET_GENRES = 'GET_GENRES';
export const GET_FILMS = 'GET_FILMS';
export const GET_FILM = 'GET_FILM';

export const getFilms = (page = 1) => ({
    page,
    [CALL_API]: {
        type: GET_FILMS,
        params: { page },
        endpoint: '/movie/top_rated',
        converter: normalizePagingResponse(schemas.FILMS),
    },
});

export const getFilm = id => ({
    [CALL_API]: {
        type: GET_FILM,
        endpoint: `/movie/${id}`,
        converter: normalizeEntityResponse(schemas.FILM),
    },
});

export const getGenres = () => ({
    [CALL_API]: {
        type: GET_GENRES,
        endpoint: '/genre/movie/list',
        converter: normalizeEntityResponse(schemas.GENRES),
    },
});
