import { fromJS } from 'immutable';

import { successAction } from '../actions/actionTypes';
import { GET_FILMS } from '../actions';

const defaultState = fromJS({
    page: 1,
    totalPages: 0,
    ids: [],
});

export default function films(state = defaultState, action) {
    switch (action.type) {
        case successAction(GET_FILMS):
            let ids = fromJS([]);
            if (action.page > 1) {
                ids = state.get('ids');
            }
            const newIds = fromJS(action.response.normalizedData.result).filter(r => ids.indexOf(r) === -1);
            ids = ids.concat(newIds);
            return state
                .set('ids', ids)
                .set('page', action.response.data.page)
                .set('totalPages', action.response.data.total_pages);
        default:
            return state;
    }
}
