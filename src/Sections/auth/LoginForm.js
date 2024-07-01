import React, { useState } from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import FormProvider from '../../components/hook-form/FormProvider';
import { RHFTextfield } from '../../components/hook-form';
import { Stack, Alert, InputAdornment, IconButton, Link, Button } from '@mui/material';
import { EyeSlash, Eye } from 'phosphor-react';
import {Link as RouterLink} from 'react-router-dom'
const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
    password: Yup.string().required('Password is required'),
  });

  const defaultValues = {
    email: 'demo@tawk.com',
    password: 'demo@123',
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema), // Corrected resolver to use LoginSchema
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
        type: 'manual', // Set type as 'manual' when setting errors manually
        message: error.message,
      });
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}
      </Stack>
      <Stack spacing ={3}>
      <RHFTextfield name="email" label="Email address" />
      <RHFTextfield name="password" label="password" type = {showPassword ? "text" : "password"} InputProps = {{
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
      </Stack>
      <Stack alignItems = {"flex-end"} sx={{my:2}}>
        
       <Link component={RouterLink} to = "/auth/Reset-Password"variant = "body2" color="inherit" underline="always">
       Forgot Password ? </Link>
      </Stack>
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
  Login
</Button>

        
      {/* Add password field and submit button here */}
    </FormProvider>
  );
};

export default LoginForm;
