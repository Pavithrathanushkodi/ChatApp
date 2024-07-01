import React, { useState , useCallback} from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {  RHFTextfield } from '../../components/hook-form';
import FormProvider from '../../components/hook-form/FormProvider';

import { Stack, Alert, Button } from '@mui/material';

const ProfileForm = () => {
  

  const ProfileSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    about: Yup.string().required('About is required'),

    avatarurl:Yup.string().required("Avatar is required").nullable(true),
  });

  const defaultValues = {
    name: "",
    about: "",
  };

  const methods = useForm({
    resolver: yupResolver(ProfileSchema), // Corrected resolver to use LoginSchema
    defaultValues,
  });

  const { reset, watch, control, setError,setValue,  handleSubmit, formState: { errors, isSubmitting, isSubmitSuccessful } } = methods;

  const values = watch() ; 

  const handleDrop = useCallback((acceptedFiles) => {

    const file = acceptedFiles[0];

    const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file)
    })

    if(file){
        setValue("avatarURL", newFile, {ShoulValidate: true});
    }

  }, [setValue])

  const onSubmit = async (data) => {
    try {
      // Handle form submission
      console.log('Data', data)
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
        <Stack spacing = {3}>
        <Stack spacing={3}>
        {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}
      </Stack>
      <Stack spacing ={3}>
      <RHFTextfield name="name" label="Name" helperText={'This name is visible to your Contacts'}/>
      <RHFTextfield muultiline rows={4} maxRows={5} name="about" label="About"/>
      </Stack>
      
 {/* Add password field and submit button here */}
 <Stack direction = "row" justifyContent="end">
 <Button color="primary" size="large" type="submit" variant= "outline">Save</Button>
 </Stack>
        </Stack>
      
 
    </FormProvider>
  );
};

export default ProfileForm;
