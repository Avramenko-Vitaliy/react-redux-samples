import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';

import films from './films';
import entities from './entities';

export default history => combineReducers({
    entities,
    films,
    router: connectRouter(history),
});
