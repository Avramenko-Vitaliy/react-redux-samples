import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { connect } from 'react-redux';
import { push } from 'connected-react-router/immutable';

import { getTodos, deleteTodo } from '../actions/todo';

import { readTodos } from '../selectors/todos';

import Todos from '../components/todos/Todos';

const mapStateToProps = state => ({
    todos: readTodos(state),
});

@connect(mapStateToProps, { getTodos, deleteTodo, push })
export default class TodosContainer extends PureComponent {
    static propTypes = {
        todos: ImmutablePropTypes.list,
        push: PropTypes.func.isRequired,
        getTodos: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired,
    };

    componentWillMount() {
        this.props.getTodos();
    }

    handleClickRow = value => this.props.push(`/todos/${value.get('id')}`);

    handleClickAdd = () => this.props.push('/todos/new');

    render() {
        return (
            <Todos
                todos={this.props.todos}
                onClick={this.handleClickRow}
                onClickAdd={this.handleClickAdd}
                onClickDelete={this.props.deleteTodo}
            />
        );
    }
}
