import { SET_PHRASE } from '../actions';

export default function hello(state = 'Hello world!', action) {
    switch (action.type) {
        case SET_PHRASE:
            return action.payload;
        default:
            return state;
    }
}
