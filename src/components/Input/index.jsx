import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

export const Input = props => {
  const {
    error,
    onChange,
    value,
    type,
    helperText,
    id,
    label,
    autoComplete,
    autoFocus
  } = props;

  return (
    <TextField
      error={error}
      onChange={onChange}
      value={value}
      type={type}
      variant="outlined"
      margin="normal"
      helperText={helperText}
      fullWidth
      id={id}
      label={label}
      name={id}
      autoComplete={autoComplete || ''}
      autoFocus={autoFocus || false}
    />
  );
};
Input.defaultProps = {
  helperText: '',
  error: false,
  value: '',
  autoComplete: '',
  autoFocus: false
};

Input.propTypes = {
  error: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  type: PropTypes.string.isRequired,
  helperText: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  autoComplete: PropTypes.string,
  autoFocus: PropTypes.bool
};
