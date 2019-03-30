import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';

const TableFilms = props => (
    props.films && props.films.length &&
    <InfiniteScroll
        pageStart={1}
        hasMore={props.hasMore}
        loadMore={props.loadMore}
    >
        <table className="table table-hover">
            <thead>
            <tr>
                <th>Title</th>
                <th>Rating</th>
                <th>Release Date</th>
            </tr>
            </thead>
            <tbody>
            {
                props.films.map(item => (
                    <tr key={item.id}>
                        <td>{item.title}</td>
                        <td>{item.vote_average}</td>
                        <td>{item.release_date}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    </InfiniteScroll>
);

TableFilms.propTypes = {
    films: PropTypes.array,
    hasMore: PropTypes.bool,
    loadMore: PropTypes.func.isRequired,
};

export default TableFilms;
