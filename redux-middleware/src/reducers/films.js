import { successAction } from '../actions/actionTypes';
import { GET_FILMS } from '../actions';

const defaultState = {
    page: 1,
    totalPages: 0,
    films: [],
};

export default function films(state = defaultState, action) {
    switch (action.type) {
        case successAction(GET_FILMS):
            return {
                ...state,
                page: action.response.data.page,
                totalPages: action.response.data.total_pages,
                films: [...state.films, ...action.response.data.results],
            };
        default:
            return state;
    }
}
