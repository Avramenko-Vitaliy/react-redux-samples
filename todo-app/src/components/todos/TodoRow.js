import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { List } from 'immutable';

export default class TodoRow extends PureComponent {
    static propTypes = {
        todo: ImmutablePropTypes.map.isRequired,
        onClick: PropTypes.func.isRequired,
        onClickDelete: PropTypes.func.isRequired,
    };

    handleClick = () => {
        this.props.onClick(this.props.todo);
    };

    handleClickDelete = (e) => {
        e.stopPropagation();
        this.props.onClickDelete(this.props.todo.get('id'));
    };

    render() {
        const { todo } = this.props;
        return (
            <tr onClick={this.handleClick}>
                <td>{todo.get('name')}</td>
                <td>{todo.get('description')}</td>
                <td>{todo.get('steps', List()).size}</td>
                <td>
                    <button className="btn btn-primary" onClick={this.handleClickDelete}>
                        Delete
                    </button>
                </td>
            </tr>
        );
    }
}
