import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

import rootReducer from '../reducers';

import api from '../middleware/api';

export default createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(api)),
);
