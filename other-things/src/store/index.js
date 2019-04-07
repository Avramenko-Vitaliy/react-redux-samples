import { Map } from 'immutable';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { routerMiddleware } from 'connected-react-router';

import rootReducer from '../reducers';

import api from '../middleware/api';

export default function configureStore(history) {
    const middlewares = [
        api,
        routerMiddleware(history),
    ];

    const enhancers = [
        composeWithDevTools(applyMiddleware(...middlewares)),
    ];

    return createStore(
        rootReducer(history),
        Map(),
        compose(...enhancers),
    );
}
