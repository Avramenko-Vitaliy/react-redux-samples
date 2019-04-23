import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import InfiniteScroll from 'react-infinite-scroller';

import FilmRow from './FilmRow';

const TableFilms = props => (
    props.films && !props.films.isEmpty() &&
    <InfiniteScroll
        pageStart={1}
        hasMore={props.hasMore}
        loadMore={props.loadMore}
    >
        <table className="table table-hover">
            <thead>
            <tr>
                <th>Title</th>
                <th>Genres</th>
                <th>Rating</th>
                <th>Release Date</th>
            </tr>
            </thead>
            <tbody>
            {
                props.films.map(item => (
                    <FilmRow key={item.get('id')} film={item} onClick={props.onClickFilm} />
                ))
            }
            </tbody>
        </table>
    </InfiniteScroll>
);

TableFilms.propTypes = {
    hasMore: PropTypes.bool,
    films: ImmutablePropTypes.list,
    loadMore: PropTypes.func.isRequired,
    onClickFilm: PropTypes.func.isRequired,
};

export default TableFilms;
