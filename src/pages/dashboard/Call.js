import React from 'react'
import {useState} from 'react'
import { Box, Stack, Typography, InputBase, Link, IconButton, Divider, Badge, Avatar } from '@mui/material';
import { MagnifyingGlass, Phone, Plus } from 'phosphor-react';
import {useTheme} from '@mui/material/styles'
import { styled, alpha } from '@mui/material/styles';
import SimpleBarStyle from 'simplebar-react';
import { CallElement, CallLogElement } from '../../components/CallLogElement';
import { CallLogs } from '../../data';
import StartCall from '../../Sections/main/StartCall';

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

  const Call = () => {
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
                <Typography variant="h5">Call Logs</Typography>
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
                <Typography variant="subtitle2" component={Link}>
                  Start new Conversation
                </Typography>
                <IconButton onClick={() => {
                  setOpenDialog(true)
                }}>
                  <Phone style={{ color: theme.palette.primary.main }} />
                </IconButton>
              </Stack>
              <Divider />
              <Stack spacing={3} sx={{ flexGrow: 1, overflowY: 'scroll', height: '100%' }}>
                {/* Call List */}
                <SimpleBarStyle timeout={500} clickOnTrack={false}>
                  <Stack spacing={2.5}>
                    <Typography variant="subtitle2" sx={{ color: '#676667' }}>
                      Pinned
                    </Typography>
                    {CallLogs.map((el) => <CallLogElement key={el.id} {...el} />)}
                  </Stack>
                </SimpleBarStyle>
              </Stack>
            </Stack>
          </Box>
          {/* Right */}
          {openDialog && <StartCall open={openDialog} handleClose={handleCloseDialog}/>}
        </Stack>
      </div>
    )
  }
  
  export default Call;
  