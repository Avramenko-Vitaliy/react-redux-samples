import { fromJS } from 'immutable';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router/immutable';
import createSagaMiddleware from 'redux-saga';

import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

import rootSaga from '../sagas';

import rootReducer from '../reducers';

import todos from '../middleware/todos';

export default function configureStore(history) {
    // const sagaMiddleware = createSagaMiddleware();

    const middlewares = [
        // sagaMiddleware,
        todos,
        routerMiddleware(history),
    ];

    const enhancers = [
        composeWithDevTools(applyMiddleware(...middlewares)),
    ];

    const store = createStore(
        rootReducer(history),
        fromJS({}),
        compose(...enhancers),
    );

    // sagaMiddleware.run(rootSaga);

    return store;
}
