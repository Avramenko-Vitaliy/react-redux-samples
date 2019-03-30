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
                page: action.payload.page,
                totalPages: action.payload.totalPages,
                films: [...state.films, ...action.payload.films],
            };
        default:
            return state;
    }
}
