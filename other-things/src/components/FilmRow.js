import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { List } from 'immutable';

export default class FilmRow extends PureComponent {
    static propTypes = {
        film: ImmutablePropTypes.map.isRequired,
        onClick: PropTypes.func.isRequired,
    };

    handleClick = () => {
        this.props.onClick(this.props.film.get('id'));
    };

    render() {
        const { film } = this.props;

        return (
            <tr key={film.get('id')} onClick={this.handleClick}>
                <td>{film.get('title')}</td>
                <td>{film.get('genres', List()).filter(item => !!item).map(item => item.get('name')).join(', ')}</td>
                <td>{film.get('vote_average')}</td>
                <td>{film.get('release_date')}</td>
            </tr>
        );
    }
}
