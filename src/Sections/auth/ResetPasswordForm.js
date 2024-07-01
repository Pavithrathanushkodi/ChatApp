import React, { useState } from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import FormProvider from '../../components/hook-form/FormProvider';
import { RHFTextfield } from '../../components/hook-form';
import { Stack, Alert, Button } from '@mui/material';

const ResetPasswordForm = () => {
 

  const ResetPasswordSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
    
  });

  const defaultValues = {
    email: 'demo@tawk.com',
    
  };

  const methods = useForm({
    resolver: yupResolver(ResetPasswordSchema), // Corrected resolver to use LoginSchema
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
  Send Request
</Button>

      
      </Stack>
      
      
        
      {/* Add password field and submit button here */}
    </FormProvider>
  );
};

export default ResetPasswordForm;
