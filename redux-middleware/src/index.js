import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import App from './containers/App';

ReactDOM.render(
    <Provider store={store}>
        <App history={history} />
    </Provider>,
    document.getElementById('app'),
);
