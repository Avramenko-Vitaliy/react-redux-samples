import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router/immutable';

import TodosContainer from '../containers/TodosContainer';
import TodoContainer from '../containers/TodoContainer';

const App = ({ history }) => (
    <ConnectedRouter history={history}>
        <Switch>
            <Route path="/todos/new" component={TodoContainer} />
            <Route path="/todos/:id" component={TodoContainer} />
            <Route path="/todos" component={TodosContainer} />
            <Redirect from="/" to="/todos"/>
        </Switch>
    </ConnectedRouter>
);

App.propTypes = {
    history: PropTypes.object,
};

export default App;
