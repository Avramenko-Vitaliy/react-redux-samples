import { ALL_ACTIONS, CANCEL_DELETE_BTN, DELETE_BTN, DETACHED_TASK, RESET_STATE } from '../actions';
import { startAction, successAction } from '../actions/actionTypes';

const defaultState = { message: '', btn: 1 };

export default function example(state = defaultState, action) {
    switch (action.type) {
        case DELETE_BTN:
            return { ...state, btn: 2 };
        case successAction(DELETE_BTN):
            return { ...state, btn: 0 };
        case successAction(CANCEL_DELETE_BTN):
            return { ...state, btn: 1 };
        case successAction(DETACHED_TASK):
            return { ...state, message: 'A detached task has been finished!' };
        case startAction(DETACHED_TASK):
            return { ...state, message: 'A detached task has been started!' };
        case DETACHED_TASK:
            return { ...state, message: 'Wait finish detached task!' };
        case RESET_STATE:
            return defaultState;
        case ALL_ACTIONS:
            return { ...state, message: 'All actions has been called!' };
        default:
            return state;
    }
}
