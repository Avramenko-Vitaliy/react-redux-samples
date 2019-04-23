import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { push } from 'connected-react-router/immutable';

import { getGenres, getFilms } from '../actions';

import TableFilms from '../components/TableFilms';

import { readFilms, readPage, hasMore, readTotalPages } from '../selectors/films';

const mapStateToProps = state => ({
    currentPage: readPage(state),
    totalPages: readTotalPages(state),
    films: readFilms(state),
    hasNext: hasMore(state),
});

@connect(mapStateToProps, { getFilms, getGenres, push })
export default class FilmsContainer extends PureComponent {
    static propTypes = {
        currentPage: PropTypes.number,
        totalPages: PropTypes.number,
        hasNext: PropTypes.bool,
        films: ImmutablePropTypes.list,
        push: PropTypes.func.isRequired,
        getGenres: PropTypes.func.isRequired,
        getFilms: PropTypes.func.isRequired,
    };

    componentWillMount() {
        this.props.getGenres();
        this.props.getFilms();
    }

    handleReadNext = () => {
        this.props.getFilms(this.props.currentPage + 1);
    };

    handleClickFilm = (id) => {
        this.props.push(`/films/${id}`);
    };

    render() {
        return (
            <TableFilms
                films={this.props.films}
                hasMore={this.props.hasNext}
                loadMore={this.handleReadNext}
                onClickFilm={this.handleClickFilm}
            />
        );
    }
}
