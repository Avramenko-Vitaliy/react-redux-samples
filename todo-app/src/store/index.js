import { fromJS } from 'immutable';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router/immutable';

import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

import rootReducer from '../reducers';

import todos from '../middleware/todos';

export default function configureStore(history) {
    const middlewares = [
        todos,
        routerMiddleware(history),
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
