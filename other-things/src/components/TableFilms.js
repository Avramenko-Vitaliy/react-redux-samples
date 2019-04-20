import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { List } from 'immutable';
import InfiniteScroll from 'react-infinite-scroller';

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
                    <tr key={item.get('id')}>
                        <td>{item.get('title')}</td>
                        <td>{item.get('genres', List()).map(item => item.get('name')).join(', ')}</td>
                        <td>{item.get('vote_average')}</td>
                        <td>{item.get('release_date')}</td>
                    </tr>
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
};

export default TableFilms;
