import React from 'react'
import { Dialog, DialogTitle, DialogContent, Slide, Stack, Button , InputBase} from '@mui/material';
import { styled, alpha, useTheme } from '@mui/material/styles';
import { MagnifyingGlass } from 'phosphor-react';
import { CallElement } from '../../components/CallLogElement';
import { MembersList } from '../../data';

const StartCall = ({open, handleClose}) => {  
    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
      });

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
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
        },
      }));

      


  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="create-group-dialog-title"
      onclose={handleClose}
    >
        <DialogTitle sx={{mb:3}}>Start a Call</DialogTitle>
        <DialogContent>
        <Stack spacing = {3}>
        <Stack sx={{ width: '100%' }}>
        <Search>
            <SearchIconWrapper>
              <MagnifyingGlass color="#709CE6" />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search..." inputProps={{ 'aria-label': 'search' }} />
          </Search>
       </Stack>
       {MembersList.map((el) => <CallElement {...el} /> )}
        </Stack>
        </DialogContent>

    </Dialog>
  )
}

export default StartCall