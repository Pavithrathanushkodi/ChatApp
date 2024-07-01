import React, { useState } from 'react';
import { Stack, Box, IconButton, Typography, Avatar, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { CaretLeft, Bell, Lock, Key, PencilCircle, Image, Note, Info, Keyboard } from 'phosphor-react';
import { faker } from '@faker-js/faker';
import ShortCuts from '../../Sections/Settings/ShortCuts'; // Adjust import path as per your project structure

const Settings = () => {
  const theme = useTheme();
  const [openShortCuts, setOpenShortCuts] = useState(false);

  const handleOpenShortCuts = () => {
    setOpenShortCuts(true);
  }

  const handleCloseShortCuts = () => {
    setOpenShortCuts(false);
  }

  const list = [
    {
      key: 0,
      icon: <Bell size={20} />,
      title: "Notification",
      onClick: () => {},
    },
    {
      key: 1,
      icon: <Lock size={20} />,
      title: "Privacy",
      onClick: () => {},
    },
    {
      key: 2,
      icon: <Key size={20} />,
      title: "Security",
      onClick: () => {},
    },
    {
      key: 3,
      icon: <PencilCircle size={20} />,
      title: "Theme",
      onClick: () => {},
    },
    {
      key: 4,
      icon: <Image size={20} />,
      title: "Chat Wallpaper",
      onClick: () => {},
    },
    {
      key: 5,
      icon: <Note size={20} />,
      title: "Request Account info",
      onClick: () => {},
    },
    {
      key: 6,
      icon: <Keyboard size={20} />,
      title: "Keyboard Shortcuts",
      onClick: handleOpenShortCuts,
    },
    {
      key: 7,
      icon: <Info size={20} />,
      title: "Request Account info",
      onClick: () => {},
    },
  ];

  return (
    <Stack direction="row" sx={{ width: "100%" }}>
      {/* Left panel */}
      <Box sx={{ overflowY: "scroll", height: "100vh", width: 320, background: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background, boxShadow: "0px 0px 2px rgba(0,0,0.25)" }}>
        <Stack p={4} spacing={3}>
          {/* Header profile */}
          <Stack direction="row" alignItems="center" spacing={3}>
            <IconButton>
              <CaretLeft size={24} color={"#4B4B4B"} />
            </IconButton>
            <Typography variant="h6">Settings</Typography>
          </Stack>
          <Stack direction="row" spacing={3}>
            <Avatar sx={{ height: 56, width: 56 }} src={faker.image.avatar()} alt={faker.name.fullName()} />
            <Stack spacing={0.5}>
              <Typography variant="article">{faker.name.fullName()}</Typography>
              <Typography variant="body2">{faker.random.words()}</Typography>
            </Stack>
          </Stack>
          {/* List of options */}
          <Stack spacing={4}>
            {list.map(({ key, icon, title, onClick }) => (
              <Stack key={key} spacing={2} sx={{ cursor: "pointer" }} onClick={onClick}>
                <Stack direction="row" spacing={2} alignItems="center">
                  {icon}
                  <Typography variant="body2">{title}</Typography>
                </Stack>
                {key !== 7 && <Divider />}
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Box>

      {/* Right Panel */}
      {openShortCuts && <ShortCuts open={openShortCuts} handleClose={handleCloseShortCuts} /> }{/* Ensure ShortCuts component is correctly passed open and handleClose props */}
    </Stack>
  );
}

export default Settings;
