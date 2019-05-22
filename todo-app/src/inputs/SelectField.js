import React from 'react';
import PropTypes from 'prop-types';

const Field = ({
                   input,
                   label,
                   values,
                   meta: { touched, error },
               }) => {

    const handleBlur = (event) => {
        const { relatedTarget } = event;
        if (relatedTarget && (relatedTarget.getAttribute('type') === 'button')) {
            event.preventDefault();
        } else {
            input.onBlur(event);
        }
    };

    return (
        <div className="form-group">
            <label htmlFor={input.name}>{label}</label>
            <select id={input.name} className="form-control" {...input} onBlur={handleBlur}>
                <option value="" disabled />
                {
                    values.map(item => (
                        <option key={item.value} value={item.value}>
                            {item.name}
                        </option>
                    ))
                }
            </select>
            {
                touched && error &&
                <small className="form-text text-danger">
                    {error}
                </small>
            }
        </div>
    );
};

Field.propTypes = {
    input: PropTypes.object,
    label: PropTypes.string,
    meta: PropTypes.object,
    values: PropTypes.array.isRequired,
};

export default Field;

