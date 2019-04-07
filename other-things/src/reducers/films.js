import { fromJS } from 'immutable';

import { successAction } from '../actions/actionTypes';
import { GET_FILMS } from '../actions';

const defaultState = fromJS({
    page: 1,
    totalPages: 0,
    films: [],
});

export default function films(state = defaultState, action) {
    switch (action.type) {
        case successAction(GET_FILMS):
            const { page, total_pages, results } = action.response.data;
            return state.merge(fromJS({
                page,
                totalPages: total_pages,
                films: page === 1 ? results : state.get('films').concat(fromJS(results)),
            }));
        default:
            return state;
    }
}
