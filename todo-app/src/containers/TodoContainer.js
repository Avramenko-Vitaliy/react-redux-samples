import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { push } from 'connected-react-router/immutable';

import { getTodos, createTodo, updateTodo } from '../actions/todo';

import { findTodoById } from '../selectors/todos';

import Todo from '../components/todos/Todo';

const mapStateToProps = (state, ownProps) => ({
    todo: findTodoById(state, ownProps.match && ownProps.match.params.id),
});

@connect(mapStateToProps, { getTodos, createTodo, updateTodo, push })
export default class TodoContainer extends PureComponent {
    static propTypes = {
        todo: ImmutablePropTypes.map,
        push: PropTypes.func.isRequired,
        getTodos: PropTypes.func.isRequired,
        createTodo: PropTypes.func.isRequired,
        updateTodo: PropTypes.func.isRequired,
    };

    componentWillMount() {
        this.props.getTodos();
    }

    handleClickCancel = () => {
        this.props.push('/todos');
    };

    handleClickSave = value => {
        if (value.get('id')) {
            this.props.updateTodo(value);
        } else {
            this.props.createTodo(value);
        }
    };

    render() {
        return (
            <Todo
                todo={this.props.todo}
                goBack={this.handleClickCancel}
                onClickSave={this.handleClickSave}
                onClickCancel={this.handleClickCancel}
            />
        );
    }
}
