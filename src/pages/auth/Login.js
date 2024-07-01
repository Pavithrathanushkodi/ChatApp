import React from 'react';
import { Typography, Stack, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import AuthSocial from '../../Sections/auth/AuthSocial';
import LoginForm from '../../Sections/auth/LoginForm';


const Login = () => {
  return (
    <div>
      <Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
        <Typography variant="h4">Login To Chat</Typography>
        <Stack direction="row" spacing={0.5}>
          <Typography variant="body2">New user?</Typography>
          <Link to="/auth/register" component={RouterLink} variant="subtitle2">
            Create an Account
          </Link>
        </Stack>
        {/* Login Form */}
       <LoginForm />

        {/* Auth Social */}
        <AuthSocial />
      </Stack>
    </div>
  );
};

export default Login;
