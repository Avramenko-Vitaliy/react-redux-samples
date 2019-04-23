import { fromJS } from 'immutable';
import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { routerMiddleware } from 'connected-react-router/immutable';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

import api from '../middleware/api';

export default function configureStore(history) {
    const middlewares = [
        api,
        routerMiddleware(history),
        thunk,
    ];

    const enhancers = [
        composeWithDevTools(applyMiddleware(...middlewares)),
    ];

    return createStore(
        rootReducer(history),
        fromJS({}),
        compose(...enhancers),
    );
}
