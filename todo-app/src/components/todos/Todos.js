import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

import TodoRow from './TodoRow';

export default class Todos extends Component {
    static propTypes = {
        todos: ImmutablePropTypes.list,
        onClick: PropTypes.func.isRequired,
        onClickAdd: PropTypes.func.isRequired,
        onClickDelete: PropTypes.func.isRequired,
    };

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12">
                        <h1 className="text-center">TODO List</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2">
                        <button className="btn btn-success" onClick={this.props.onClickAdd}>Add new</button>
                    </div>
                </div>
                {
                    !this.props.todos || this.props.todos.isEmpty() ?
                        (
                            <div className="row">
                                <div className="col-xs-12">
                                    <h4 className="text-center text-muted">
                                        You have no plans
                                    </h4>
                                </div>
                            </div>
                        ) : (
                            <table className="table table-hover">
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Steps</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    this.props.todos.map(item => (
                                        <TodoRow
                                            key={item.get('id')}
                                            todo={item}
                                            onClick={this.props.onClick}
                                            onClickDelete={this.props.onClickDelete}
                                        />
                                    ))
                                }
                                </tbody>
                            </table>
                        )
                }
            </div>
        );
    }
}
