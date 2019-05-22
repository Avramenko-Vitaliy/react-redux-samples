import { fromJS } from 'immutable';

import { successAction } from '../actions/actionTypes';
import { GET_TODOS, CREATE_TODO, UPDATE_TODO, DELETE_TODO } from '../actions/todo';

const defaultState = fromJS([]);

export default function todos(state = defaultState, action) {
    switch (action.type) {
        case successAction(GET_TODOS):
        case successAction(CREATE_TODO):
        case successAction(UPDATE_TODO):
        case successAction(DELETE_TODO):
            return fromJS(action.todos);
        default:
            return state;
    }
}
