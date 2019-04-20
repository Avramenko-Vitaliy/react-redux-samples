import axios from 'axios';

import { failAction, startAction, successAction } from '../actions/actionTypes';

import settings from '../settings';

const instance = axios.create({
    timeout: 30000,
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: settings.apiKey,
    },
});

export const callApi = (method = 'get', endpoint, body, params = {}, responseType = 'json') =>
    instance({
        url: endpoint, method, data: body, params, responseType,
    });

export const CALL_API = Symbol('CALL_API');

export default store => next => (action) => {
    const callAPI = action[CALL_API];

    if (typeof callAPI === 'undefined') {
        return next(action);
    }

    let { endpoint } = callAPI;
    const {
        type, method = 'get', body = {}, params, converter = response => response, responseType,
    } = callAPI;

    if (typeof endpoint === 'function') {
        endpoint = endpoint(store.getState());
    }

    if (typeof endpoint !== 'string') {
        throw new Error('Specify a string endpoint URL.');
    }

    if (typeof type !== 'string') {
        throw new Error('Expected action type to be string.');
    }

    const actionWith = (data) => {
        const finalAction = {
            ...action,
            ...data,
        };

        delete finalAction[CALL_API];

        return finalAction;
    };

    store.dispatch(actionWith({
        type: startAction(type),
    }));

    return callApi(method, endpoint, body, params, responseType).then(
        response => store.dispatch(actionWith({
            response: converter(response),
            type: successAction(type),
        })),
        (error) => store.dispatch(actionWith({
            type: failAction(type),
            response: error.response,
            error: (error.response && error.response.data) || 'Error happened during API call',
        })),
    );
};
