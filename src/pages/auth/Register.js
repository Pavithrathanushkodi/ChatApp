import { Typography , Stack, Link} from '@mui/material'
import React from 'react'
import {Link as RouterLink} from 'react-router-dom'
import RegisterForm from '../../Sections/auth/RegisterForm'
import AuthSocial from '../../Sections/auth/AuthSocial'

const  Register = () => {
  return (
    <div>
        <Stack spacing={2} sx={{mb:5, position:"relative"}}>
        <Typography variant = "h4">Get started with Tawk</Typography>
        <Stack direction ="row" spacing = {0.5}>
        <Typography>Already have an Account</Typography>
        <Link component = {RouterLink} to="/auth/Login" variant="Subtitle2">
        Sign In
        </Link>
        </Stack>

        {/*Register Form */}
        <RegisterForm />

        <Typography component = {"div"} sx={{color:"text.secondary", mt: 3, Typography: 'caption', textAlign:'center'}}>
          {'By Signing up, I agree to'}
          <Link underLine='always'color="text.primary" sx={{ mx: 1 }}>
          Terms of Service
          </Link>
          {'and'}
          <Link nderLine='always'color="text.primary" sx={{ mx: 1 }}>
          Privacy Policy
          </Link>
        </Typography>

        <AuthSocial />
        </Stack>
    </div>
  )
}

export default Register