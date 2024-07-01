// import React, { useState } from 'react';
// import * as Yup from 'yup';  // Import Yup library correctly
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import { RHFTextfield } from '../../components/hook-form';
// import { Stack, Alert, InputAdornment, IconButton, Link, Button } from '@mui/material';
// import { EyeSlash, Eye } from 'phosphor-react';
// import { Link as RouterLink } from 'react-router-dom';

// const NewPasswordForm = () => {
//   const [showPassword, setShowPassword] = useState(false);

//   const NewPasswordSchema = Yup.object().shape({
//     newPassword: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
//     confirmPassword: Yup.string()
//       .required('Confirm Password is required')
//       .oneOf([Yup.ref('newPassword'), null], 'Passwords must match'),
//   });

//   const defaultValues = {
//     newPassword: '',
//     confirmPassword: '',
//   };

//   const methods = useForm({
//     resolver: yupResolver(NewPasswordSchema),
//     defaultValues,
//   });

//   const { reset, setError, handleSubmit, formState: { errors } } = methods;

//   const onSubmit = async (data) => {
//     try {
//       // Handle form submission
//       console.log(data);
//     } catch (error) {
//       console.error(error);
//       reset();
//       setError('afterSubmit', {
//         type: 'manual',
//         message: error.message,
//       });
//     }
//   };

//   return (
//     <>
//     <Stack spacing={3} component="form" onSubmit={handleSubmit(onSubmit)}>
//       {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}
      
//       <RHFTextfield
//         name="newPassword"
//         label="New password"
//         type={showPassword ? 'text' : 'password'}
//         InputProps={{
//           endAdornment: (
//             <InputAdornment position="end">
//               <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
//                 {showPassword ? <Eye /> : <EyeSlash />}
//               </IconButton>
//             </InputAdornment>
//           ),
//         }}
//       />
      
//       <RHFTextfield
//         name="confirmPassword"
//         label="Confirm password"
//         type={showPassword ? 'text' : 'password'}
//         InputProps={{
//           endAdornment: (
//             <InputAdornment position="end">
//               <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
//                 {showPassword ? <Eye /> : <EyeSlash />}
//               </IconButton>
//             </InputAdornment>
//           ),
//         }}
//       />
      
//       <Stack alignItems="flex-end">
//         <Link component={RouterLink} to="/auth/Reset-Password" variant="body2" color="inherit" underline="always">
//           Forgot Password?
//         </Link>
//       </Stack>

//       <Button
//         fullWidth
//         color="inherit"
//         size="large"
//         type="submit"
//         variant="contained"
//         sx={{
//           bgcolor: 'text.primary',
//           color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
//           '&:hover': {
//             bgcolor: 'text.primary',
//             color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
//           },
//         }}
//       >
//         Submit
//       </Button>
//     </Stack>
//     </>
//   );
// };


// export default NewPasswordForm;
