import React from 'react';
import { TextField } from '@mui/material';
import { useController } from 'react-hook-form';

const RHFTextfield = ({ name, ...other }) => {
  const { field, fieldState: { error } } = useController({ name });
  return (
    <TextField
      {...field}
      {...other}
      error={!!error}
      helperText={error ? error.message : other.helperText}
    />
  );
};

export default RHFTextfield;
