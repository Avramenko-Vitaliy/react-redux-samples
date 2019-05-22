import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { reduxForm } from 'redux-form/immutable';
import { Field, FieldArray } from 'redux-form/immutable';

import TextField from '../../inputs/TextField';
import SelectField from '../../inputs/SelectField';

import { required } from '../../validators/validationInputFields';

import { TYPE_OF_TASKS } from '../../data';

@reduxForm({ form: 'todo' })
export default class Todo extends PureComponent {
    static propTypes = {
        todo: ImmutablePropTypes.map,
        submitting: PropTypes.bool.isRequired,
        initialize: PropTypes.func.isRequired,
        onClickSave: PropTypes.func.isRequired,
        onClickCancel: PropTypes.func.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        goBack: PropTypes.func.isRequired,
    };

    componentWillMount() {
        this.props.initialize(this.props.todo);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.submitSucceeded && !this.props.submitSucceeded) {
            nextProps.goBack();
        } else if (this.props.todo !== nextProps.todo) {
            nextProps.initialize(nextProps.todo);
        }
    }

    addStep = (fields) => () => fields.push('');

    deleteStep = (fields, index) => () => fields.splice(index, 1);

    renderSteps = ({ fields }) => (
        <Fragment>
            <div className="row">
                <button type="button" className="col-xs-12 btn btn-success" onClick={this.addStep(fields)}>
                    Add Step
                </button>
            </div>
            <br />
            {
                fields.map((item, index) => (
                    <div className="row" key={index}>
                        <Field className="col-xs-8" name={item} component={TextField} />
                        <br />
                        <button
                            type="button"
                            className="form-group col-xs-4 btn btn-danger"
                            onClick={this.deleteStep(fields, index)}
                        >
                            Delete
                        </button>
                    </div>
                ))
            }
        </Fragment>
    );

    render() {
        return (
            <form className="container-fluid" onSubmit={this.props.handleSubmit(this.props.onClickSave)}>
                <div className="row">
                    <div className="col-xs-12">
                        <h4 className="text-center"><strong>Create New Task</strong></h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-4 col-xs-push-4">
                        <div className="row">
                            <Field
                                name="name"
                                component={TextField}
                                validate={required}
                                label="Task Name"
                            />
                        </div>
                        <div className="row">
                            <Field
                                name="description"
                                component={TextField}
                                label="Description"
                            />
                        </div>
                        <div className="row">
                            <Field
                                name="type"
                                component={SelectField}
                                label="Type"
                                validate={required}
                                values={TYPE_OF_TASKS}
                            />
                        </div>
                        <FieldArray name="steps" component={this.renderSteps} />
                        <div className="row">
                            <button
                                type="submit"
                                className="col-xs-4 btn btn-primary"
                                disabled={this.props.submitting}
                            >
                                Submit
                            </button>
                            <button
                                type="button"
                                className="col-xs-4 col-xs-push-4 btn btn-default"
                                    onClick={this.props.onClickCancel}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}
