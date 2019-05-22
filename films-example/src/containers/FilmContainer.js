import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { readFilm } from '../selectors/films';

import { getFilm } from '../actions';

import Film from '../components/Film';

const mapStateToProps = (state, ownProps) => ({
    film: readFilm(state)(ownProps.match.params.id),
});

@connect(mapStateToProps, { getFilm })
export default class FilmContainer extends PureComponent {
    static propTypes = {
        film: ImmutablePropTypes.map,
        match: PropTypes.object,
        getFilm: PropTypes.func.isRequired,
    };

    componentWillMount() {
        this.props.getFilm(this.props.match.params.id);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.id !== this.props.match.params.id) {
            nextProps.getFilm(nextProps.match.params.id);
        }
    }

    render() {
        if (!this.props.film) {
            return null;
        }
        return <Film film={this.props.film} />;
    }
}
