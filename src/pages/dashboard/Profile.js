import React from 'react'
import {Stack , Box, IconButton, Typography} from '@mui/material'
import {CaretLeft} from 'phosphor-react'
import ProfileForm from '../../Sections/main/ProfileForm'

const Profile = () => {
  return (
    <div>
        <Stack direction={'row'} sx={{ width: '100%' }}>
        <Box
          sx={{
            height: '100vh',
            backgroundColor: (theme) => (theme.palette.mode === 'light' ? '#F8FAFF' : theme.palette.background.default),
            width: 320,
            boxShadow: '0px 0px 2px rgba(0,0,0,0.25)',
          }}
        >
            <Stack p={4} spacing={5}>

                {/* Header */}
            <Stack direction="row" alignItems="center" spacing={3}>
            <IconButton>
              <CaretLeft size={24} color={"#4B4B4B"} />
            </IconButton>
            <Typography variant="h4"> Profile</Typography>
          </Stack>

          {/* Profile Form*/}

          <ProfileForm />
            </Stack>
             
        </Box>
        </Stack>
    </div>
  )
}

export default Profile