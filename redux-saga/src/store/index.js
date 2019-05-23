import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

import rootSaga from '../sagas';

import rootReducer from '../reducers';

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();

    const middlewares = [
        sagaMiddleware,
    ];

    const enhancers = [
        composeWithDevTools(applyMiddleware(...middlewares)),
    ];

    const store = createStore(
        rootReducer,
        {},
        compose(...enhancers),
    );

    sagaMiddleware.run(rootSaga);

    return store;
}
