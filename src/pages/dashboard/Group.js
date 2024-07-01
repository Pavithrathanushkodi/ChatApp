import React, { useState } from 'react';
import { Box, Stack, Typography, InputBase, Link, IconButton, Divider, Badge, Avatar } from '@mui/material';
import { MagnifyingGlass, Plus } from 'phosphor-react';
import { styled, alpha } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import { ChatList } from '../../data';
import { faker } from '@faker-js/faker';
import SimpleBarStyle from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import '../../components/customScrollbar.css';
import CreateGroup from '../../Sections/main/CreateGroup';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const ChatElement = ({ id, name, img, msg, time, unread, online }) => {
  const theme = useTheme();
  const [openDialog, setOpenDialog] = useState(false);


  const handleCloseDialog = () => setOpenDialog(false);
  return (
    <Box
      sx={{
        width: '100%',
        borderRadius: 1,
        backgroundColor: theme.palette.mode === 'light' ? '#fff' : theme.palette.background.paper,
      }}
      p={2}
    >
      <Stack direction="row" alignItems={'center'} justifyContent={'space-between'}>
        <Stack direction="row" spacing={2}>
          {online ? (
            <StyledBadge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
              <Avatar src={faker.image.avatar()} />
            </StyledBadge>
          ) : (
            <Avatar src={faker.image.avatar()} />
          )}
          <Stack spacing={0.3}>
            <Typography variant="subtitle2">{name}</Typography>
            <Typography variant="caption">{msg}</Typography>
          </Stack>
        </Stack>
        <Stack spacing={2} alignItems="center">
          <Typography sx={{ fontWeight: 600 }} variant="caption">
            {time}
          </Typography>
          <Badge color="primary" badgeContent={unread}></Badge>
        </Stack>
      </Stack>
    </Box>
  );
};

const Group = () => {
  const theme = useTheme();
  const [openDialog, setOpenDialog] = useState(false);

 
  const handleCloseDialog = () => setOpenDialog(false);

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
          <Stack p={3} spacing={2} sx={{ maxHeight: '100vh', overflow: 'auto' }}>
            <Stack>
              <Typography variant="h5">Groups</Typography>
            </Stack>
            <Stack sx={{ width: '100%' }}>
              <Search>
                <SearchIconWrapper>
                  <MagnifyingGlass color="#709CE6" />
                </SearchIconWrapper>
                <StyledInputBase placeholder="Search..." inputProps={{ 'aria-label': 'search' }} />
              </Search>
            </Stack>
            <Stack direction="row" justifyContent={'space-between'} alignItems={'center'}>
              <Typography variant="subtitle2" component={Link} >
                Create New Group
              </Typography>
              <IconButton onClick={() => {setOpenDialog(true)}}>
                <Plus style={{ color: theme.palette.primary.main }} />
              </IconButton>
            </Stack>
            <Divider />
            <Stack spacing={3} sx={{ flexGrow: 1, overflowY: 'scroll', height: '100%' }}>
              {/* Chat List */}
              <SimpleBarStyle timeout={500} clickOnTrack={false}>
                <Stack spacing={2.5}>
                  <Typography variant="subtitle2" sx={{ color: '#676667' }}>
                    Pinned
                  </Typography>
                  {ChatList.filter((el) => el.pinned).map((el) => (
                    <ChatElement key={el.id} {...el} />
                  ))}
                  <Typography variant="subtitle2" sx={{ color: '#676667' }}>
                    All Groups
                  </Typography>
                  {ChatList.filter((el) => !el.pinned).map((el) => (
                    <ChatElement key={el.id} {...el} />
                  ))}
                </Stack>
              </SimpleBarStyle>
            </Stack>
          </Stack>
        </Box>
        {/* Right */}
      </Stack>
      {openDialog && <CreateGroup open={openDialog} handleClose={handleCloseDialog}/>}
    </div>
  );
};

export default Group;
