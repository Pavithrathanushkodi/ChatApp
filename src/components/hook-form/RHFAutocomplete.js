// RHFAutocomplete.js

import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { Autocomplete, TextField } from "@mui/material";

const RHFAutocomplete = ({ name, label, helperText, options, ...other }) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Autocomplete
          {...field}
          {...other}
          options={options}
          getOptionLabel={(option) => option}
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              error={!!error}
              helperText={error ? error.message : helperText}
            />
          )}
          onChange={(event, value) => field.onChange(value)}
        />
      )}
    />
  );
};

RHFAutocomplete.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  helperText: PropTypes.string,
  options: PropTypes.array.isRequired,
};

export default RHFAutocomplete;
