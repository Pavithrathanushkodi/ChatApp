import React from 'react';
import { Stack, Typography, Link } from '@mui/material'; // Import Link from @mui/material
import { CaretLeft } from 'phosphor-react';
import { Link as RouterLink } from 'react-router-dom';
import ResetPasswordForm from '../../Sections/auth/ResetPasswordForm';

const ResetPassword = () => {
  return (
    <div>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h3" paragraph>
          Forgot Your Password?
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 5 }}>
          We will send a reset link to your registered email address.
        </Typography>

        {/* Reset Form Link */}

        <ResetPasswordForm />
        <Link component={RouterLink} to="/auth/Login" color="inherit" variant="subtitle2" sx={{ mt: 3, mx: "auto", alignItems: "center", display: "inline-flex" }}>
          <CaretLeft />
          Return to Sign In
        </Link>

      </Stack>
    </div>
  );
};

export default ResetPassword;
