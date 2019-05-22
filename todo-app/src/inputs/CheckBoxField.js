import React from 'react';
import PropTypes from 'prop-types';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

/* eslint-disable react/jsx-no-bind */

const Field = ({
    input,
    label,
    color,
    meta: { touched, error },
    innerError,
    className,
    ...custom
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
        <FormGroup className={className}>
            <FormControlLabel
                control={
                    <Checkbox
                        {...input}
                        color={color}
                        value={`${input.value}`}
                        checked={input.value}
                        onBlur={handleBlur}
                    />
                }
                label={label}
                {...custom}
            />
            {
                touched && (!!error || !!innerError) &&
                <FormHelperText>{error || innerError}</FormHelperText>
            }
        </FormGroup>
    );
};

Field.propTypes = {
    input: PropTypes.object, // eslint-disable-line
    label: PropTypes.string,
    className: PropTypes.string,
    meta: PropTypes.object, // eslint-disable-line
};

export default Field;

