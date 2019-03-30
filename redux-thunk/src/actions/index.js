import { successAction, failAction } from 'actions/actionTypes';

import { getTopFilms } from '../api';

export const GET_FILMS = 'GET_FILMS';

const receiveFilms = (page, result) => ({
    type: successAction(GET_FILMS),
    payload: {
        films: result.data.results,
        totalPages: result.data.total_pages,
        page,
    },
});

export const getFilms = (page = 1) => (dispatch) => {
    getTopFilms(page).then(
        result => dispatch(receiveFilms(page, result)),
        error => {
            console.error(error);
            dispatch({ type: failAction(GET_FILMS), error });
        },
    );
};
