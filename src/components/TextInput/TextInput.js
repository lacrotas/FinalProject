import React from 'react';
import { ErrorMessage, useField } from 'formik';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';

import './TextInput.scss';

export const Inputs = ({ label, ...props }) => {
  const [field] = useField(props);
  return (
    <div className="inputError">
      <TextField
        id="outlined-required"
        className="inputError__input"
        label={label}
        {...field}
        {...props}
        autoComplete="off"
      />
      <ErrorMessage className="inputError__error" component="div" name={field.name} />
    </div>
  );
};
Inputs.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
export default Inputs;
