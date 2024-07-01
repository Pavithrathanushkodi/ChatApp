import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, Slide, Stack, Button } from '@mui/material';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import FormProvider from '../../components/hook-form/FormProvider';
import { RHFTextfield } from '../../components/hook-form';
import RHFAutocomplete from '../../components/hook-form/RHFAutocomplete';

const MEMBERS = ["Name1", "Name2", "Name3"];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CreateGroupForm = ({ handleClose }) => {
  const NewGroupSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    members: Yup.array().min(2, "Must have at least 2 members"),
  });

  const defaultValues = {
    title: "",
    members: [],
  };

  const methods = useForm({
    resolver: yupResolver(NewGroupSchema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data) => {
    try {
      console.log("Form data:", data);
      // You can perform API calls or further actions here
      handleClose(); // Close dialog after successful form submission
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {/* Group Name Field */}
        <RHFTextfield name="title" label="Group Name" />

        {/* Members Field */}
        <RHFAutocomplete
          name="members"
          label="Add Group Members"
          multiple
          freeSolo
          options={MEMBERS}
          chipProps={{ size: "medium" }}
        />

        {/* Buttons Container */}
        <Stack spacing={2} direction="row" alignItems="center" justifyContent="end">
          <Button onClick={handleClose} variant="outlined">
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Create
          </Button>
        </Stack>
      </Stack>
    </FormProvider>
  );
};

const CreateGroup = ({ open, handleClose }) => {
  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="create-group-dialog-title"
    >
      <DialogTitle sx = {{mb:3}}id="create-group-dialog-title">Create New Group</DialogTitle>
      <DialogContent>
        <CreateGroupForm handleClose={handleClose} />
      </DialogContent>
    </Dialog>
  );
};

export default CreateGroup;
