import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form/immutable';
import { connectRouter } from 'connected-react-router/immutable';

import todos from './todos';

export default history => combineReducers({
    form,
    todos,
    router: connectRouter(history),
});
