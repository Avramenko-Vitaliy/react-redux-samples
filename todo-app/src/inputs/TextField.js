import React from 'react';
import PropTypes from 'prop-types';

const Field = ({
                   input,
                   label,
                   className,
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
        <div className={`form-group ${className}`}>
            <label htmlFor={input.name}>{label}</label>
            <input id={input.name} className="form-control" {...input} onBlur={handleBlur} />
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
    className: PropTypes.string,
    meta: PropTypes.object,
};

export default Field;
