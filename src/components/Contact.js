import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography, IconButton, Avatar, Divider, Button, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, Slide, Switch } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import { X, Phone, VideoCamera, CaretRight, Star, Bell, Prohibit, Trash } from "phosphor-react";
import { faker } from "@faker-js/faker";
import { useDispatch } from 'react-redux';
import { ToggleSidebar, UpdateSidebarType } from '../redux/slices/app';
import { styled } from '@mui/material/styles';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import './customScrollbar.css'; // Import the custom scrollbar CSS

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const BlockDialog = ({ open, handleClose }) => (
  <Dialog
    open={open}
    TransitionComponent={Transition}
    keepMounted
    onClose={handleClose}
    aria-describedby="alert-dialog-slide-description"
  >
    <DialogTitle>Block This Contact</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-slide-description">
        Are you sure you want to block this contact?
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>Yes</Button>
      <Button onClick={handleClose}>Cancel</Button>
    </DialogActions>
  </Dialog>
);

const DeleteDialog = ({ open, handleClose }) => (
  <Dialog
    open={open}
    TransitionComponent={Transition}
    keepMounted
    onClose={handleClose}
    aria-describedby="alert-dialog-slide-description"
  >
    <DialogTitle>Delete This Chat</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-slide-description">
        Are you sure you want to delete this chat?
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>Yes</Button>
      <Button onClick={handleClose}>Cancel</Button>
    </DialogActions>
  </Dialog>
);

const Contact = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  
  const [openBlock, setOpenBlock] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [scrollbarVisible, setScrollbarVisible] = useState(false);

  const handleCloseBlock = () => setOpenBlock(false);
  const handleCloseDelete = () => setOpenDelete(false);

  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 40,
    height: 20,
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 15,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(9px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(20px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 16,
      height: 16,
      borderRadius: 8,
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 20 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
      boxSizing: 'border-box',
    },
  }));

  const handleStarredClick = () => {
    dispatch(UpdateSidebarType("STARRED")); // Corrected the action payload
  };

  const showScrollbar = () => {
    setScrollbarVisible(true);
    setTimeout(() => {
      setScrollbarVisible(false);
    }, 5000); // Hide scrollbar after 5 seconds
  };

  useEffect(() => {
    showScrollbar(); // Show scrollbar when the component mounts
  }, []);

  return (
    <Box sx={{ width: 320, height: "100vh" }} onClick={showScrollbar}>
      <Stack sx={{ height: "100%" }}>
        {/* Header */}
        <Box sx={{
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          width: "100%",
          backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.default,
        }}>
          <Stack sx={{ height: "100%", p: 2 }} direction="row" alignItems={"center"} justifyContent="space-between" spacing={3}>
            <Typography variant="h6">Contact Info</Typography>
            <IconButton onClick={() => dispatch(ToggleSidebar())}>
              <X />
            </IconButton>
          </Stack>
        </Box>

        {/* Body */}
        <Stack sx={{ height: "100%", position: "relative", flexGrow: 1, overflowY: "hidden" }} p={3} spacing={3}>
          <SimpleBar className={scrollbarVisible ? 'visible-scrollbar' : ''} style={{ maxHeight: '100%', overflow: scrollbarVisible ? 'auto' : 'hidden' }}>
            <Stack spacing={3}>
              <Stack direction="row" alignItems={"center"} spacing={2}>
                <Avatar src={faker.image.avatar()} alt={faker.name.firstName()} sx={{ height: 64, width: 64 }} />
                <Stack spacing={0.5}>
                  <Typography variant="subtitle1" fontWeight={600}>
                    {faker.name.fullName()}
                  </Typography>
                  <Typography variant="body2" fontWeight={600}>
                    +91 729 2829 292
                  </Typography>
                </Stack>
              </Stack>
              <Stack direction="row" alignItems="center" justifyContent="space-evenly">
                <Stack spacing={1} alignItems="center">
                  <IconButton>
                    <Phone />
                  </IconButton>
                  <Typography variant="overline">Voice</Typography>
                </Stack>

                <Stack spacing={1} alignItems="center">
                  <IconButton>
                    <VideoCamera />
                  </IconButton>
                  <Typography variant="overline">Video</Typography>
                </Stack>
              </Stack>
              <Divider />
              <Stack spacing={2}>
                <Typography variant="h6">About</Typography>
                <Typography variant="body2">Imagination</Typography>
              </Stack>
              <Divider />
              <Stack direction="row" alignItems={"center"} justifyContent="space-between">
                <Typography variant="h6">Media, Links & Docs</Typography>
                <Button onClick={() => dispatch(UpdateSidebarType("SHARED"))} endIcon={<CaretRight />}>
                  401
                </Button>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center">
                {[1, 2, 3].map((el) => (
                  <Box key={el}>
                    <img src={faker.image.food()} alt={faker.name.firstName()} />
                  </Box>
                ))}
              </Stack>
              <Divider />
              <Stack direction="row" alignItems={"center"} justifyContent="space-between">
                <Stack direction={"row"} alignItems="center" spacing={2}>
                  <Star size={21} />
                  <Typography variant="subtitle2">
                    Starred Message
                  </Typography>
                </Stack>
                <IconButton onClick={handleStarredClick}>
                  <CaretRight />
                </IconButton>
              </Stack>
              <Divider />
              <Stack direction="row" alignItems={"center"} justifyContent="space-between">
                <Stack direction={"row"} alignItems="center" spacing={2}>
                  <Bell size={21} />
                  <Typography variant="subtitle2">
                    Mute Notification
                  </Typography>
                </Stack>
                <AntSwitch />
              </Stack>
              <Divider />
              <Typography variant="subtitle1">1 group in common</Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar src={faker.image.avatar()} alt={faker.name.firstName()} />
                <Stack spacing={0.5}>
                  <Typography variant="subtitle2">Family Group</Typography>
                  <Typography variant="caption">Mom, Uncle, Anna, dad, +91 678945321, YOU</Typography>
                </Stack>
              </Stack>
              <Stack direction="row" alignItems={"center"} spacing={6} p={2}>
                <Button onClick={() => setOpenBlock(true)} startIcon={<Prohibit />} fullWidth variant="outlined">
                  Block
                </Button>
                <Button onClick={() => setOpenDelete(true)} startIcon={<Trash />} fullWidth variant="outlined">
                  Delete
                </Button>
              </Stack>
            </Stack>
          </SimpleBar>
        </Stack>
      </Stack>
      {openBlock && <BlockDialog open={openBlock} handleClose={handleCloseBlock} />}
      {openDelete && <DeleteDialog open={openDelete} handleClose={handleCloseDelete} />}
    </Box>
  );
};

export default Contact;
