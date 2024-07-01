import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'; // Import Yup correctly
import { Alert, Stack, IconButton , Link, Button, InputAdornment} from '@mui/material';
import { Eye, EyeSlash } from 'phosphor-react';
import { RHFTextfield } from '../../components/hook-form';
import FormProvider from '../../components/hook-form/FormProvider';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  // Define your schema using yup
  const LoginSchema = yup.object().shape({
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last name is required'),
    email: yup.string().required('Email is required').email('Email must be a valid email address'),
    password: yup.string().required('Password is required'),
  });

  const defaultValues = {
    firstName: '',
    lastName: '',
    email: 'demo@tawk.com',
    password: 'demo@123',
  };

  // useForm hook should be within the component
  const methods = useForm({
    resolver: yupResolver(LoginSchema), // Use LoginSchema as resolver
    defaultValues,
  });

  const { reset, setError, handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = methods;

  const onSubmit = async (data) => {
    try {
      // Handle form submission
    } catch (error) {
      console.log(error);
      reset();
      setError('afterSubmit', {
        type: 'manual',
        message: error.message,
      });
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.message}</Alert> // Corrected 'error' to 'errors'
        )}
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <RHFTextfield name="firstName" label="First Name" />
          <RHFTextfield name="lastName" label="Last Name" />
        </Stack>
        <RHFTextfield name="email" label="Email" />
        <RHFTextfield name="password" label="Password" type = {showPassword ? "text" : "password"} InputProps = {{
          endAdornment: (
            <InputAdornment>
            <IconButton onClick={() =>{
                setShowPassword(!showPassword);
            }} >
                {showPassword ? <Eye /> : <EyeSlash /> }
            </IconButton>
            </InputAdornment>
          )
      }} />
      <Button
  fullWidth
  color="inherit"
  size="large"
  type="submit"
  variant="contained"
  sx={{
    bgcolor: 'text.primary',
    color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
    '&:hover': {
      bgcolor: 'text.primary',
      color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
    },
  }}
>
  Create Account
</Button>
      </Stack>
  
      
    </FormProvider>
  );
};

export default LoginForm;
