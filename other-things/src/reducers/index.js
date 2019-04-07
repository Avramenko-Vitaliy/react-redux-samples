import { combineReducers } from 'redux';

import films from './films';
import entities from './entities';

export default combineReducers({
    entities,
    films,
});
