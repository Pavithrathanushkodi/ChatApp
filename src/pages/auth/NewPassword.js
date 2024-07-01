import React from 'react'
import {Stack, Typography, Link} from '@mui/material'
import { CaretLeft } from 'phosphor-react'
import { Link as RouterLink } from 'react-router-dom';


const NewPassword = () => {
  return (
    <div>
        <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h3" paragraph>
          Reset Password
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 5 }}>
         Please Set your New Password
        </Typography>

        </Stack>

        {/*New Password Form */}

        
        <Link component={RouterLink} to="/auth/Login" color="inherit" variant="subtitle2" sx={{ mt: 3, mx: "auto", alignItems: "center", display: "inline-flex" }}>
          <CaretLeft />
          Return to Sign In
        </Link>
    </div>
  )
}

export default NewPassword