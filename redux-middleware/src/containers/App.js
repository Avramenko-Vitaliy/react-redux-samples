import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getFilms } from '../actions';

import TableFilms from 'components/TableFilms';

const mapStateToProps = state => ({
    currentPage: state.films.page,
    totalPages: state.films.totalPages,
    films: state.films.films,
    hasNext: state.films.page < state.films.totalPages,
});

@connect(mapStateToProps, { getFilms })
export default class App extends PureComponent {
    static propTypes = {
        currentPage: PropTypes.number,
        totalPages: PropTypes.number,
        films: PropTypes.array,
        hasNext: PropTypes.bool,
        getFilms: PropTypes.func.isRequired,
    };

    componentWillMount() {
        this.props.getFilms();
    }

    handleReadNext = () => {
        this.props.getFilms(this.props.currentPage + 1);
    };

    render() {
        return (
            <TableFilms
                films={this.props.films}
                hasMore={this.props.hasNext}
                loadMore={this.handleReadNext}
            />
        );
    }
}
