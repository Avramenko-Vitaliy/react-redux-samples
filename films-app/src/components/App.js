import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router/immutable';

import FilmsContainer from '../containers/FilmsContainer';
import FilmContainer from '../containers/FilmContainer';

const App = ({ history }) => (
    <ConnectedRouter history={history}>
        <Switch>
            <Route path="/films/:id" component={FilmContainer} />
            <Route path="/films" component={FilmsContainer} />
            <Redirect from="/" to="/films"/>
        </Switch>
    </ConnectedRouter>
);

App.propTypes = {
    history: PropTypes.object,
};

export default App;
