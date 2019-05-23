import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { firstAction, secondAction, thirdAction, reset, detachedTask, deleteBtn, cancelDeleteBtn } from '../actions';

import { readMessage, readBtnState } from '../selectors';

const mapStateToProps = state => ({
    message: readMessage(state),
    btn: readBtnState(state),
});

const mapDispatchToProps = {
    firstAction,
    secondAction,
    thirdAction,
    reset,
    detachedTask,
    deleteBtn,
    cancelDeleteBtn,
};

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends PureComponent {
    static propTypes = {
        message: PropTypes.string,
        btn: PropTypes.number,
        reset: PropTypes.func.isRequired,
        deleteBtn: PropTypes.func.isRequired,
        cancelDeleteBtn: PropTypes.func.isRequired,
        firstAction: PropTypes.func.isRequired,
        secondAction: PropTypes.func.isRequired,
        thirdAction: PropTypes.func.isRequired,
    };

    renderDeleteBtn = () => {
        switch (this.props.btn) {
            case 1:
                return (
                    <div className="row">
                        <button className="col-xs-4 col-xs-push-4 btn btn-primary" onClick={this.props.deleteBtn}>
                            Delete button
                        </button>
                    </div>
                );
            case 2:
                return (
                    <div className="row">
                        <button className="col-xs-4 col-xs-push-4 btn btn-warning" onClick={this.props.cancelDeleteBtn}>
                            Cancel delete
                        </button>
                    </div>
                );
            default:
                return null;
        }
    };

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12 text-center">
                        <h4>{this.props.message}</h4>
                    </div>
                </div>
                <div className="row">
                    <button className="col-xs-2 col-xs-push-1 btn btn-primary" onClick={this.props.firstAction}>
                        First Action
                    </button>
                    <button className="col-xs-2 col-xs-push-3 btn btn-success" onClick={this.props.secondAction}>
                        Second Action
                    </button>
                    <button className="col-xs-2 col-xs-push-5 btn btn-default" onClick={this.props.thirdAction}>
                        Third Action
                    </button>
                </div>
                <br />
                <div className="row">
                    <button className="col-xs-4 col-xs-push-4 btn btn-primary" onClick={this.props.detachedTask}>
                        Start detached task
                    </button>
                </div>
                <br />
                {this.renderDeleteBtn()}
                <br />
                <div className="row">
                    <button className="col-xs-4 col-xs-push-4 btn btn-danger" onClick={this.props.reset}>
                        Reset
                    </button>
                </div>
            </div>
        );
    }
}
