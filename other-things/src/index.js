import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';

import configureStore from './store';

import App from './containers/App';

const history = createHistory();
const store = configureStore(history);

ReactDOM.render(
    <Provider store={store}>
        <App history={history} />
    </Provider>,
    document.getElementById('app'),
);
