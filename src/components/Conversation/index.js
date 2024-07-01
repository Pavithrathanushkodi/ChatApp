import React, { useState, useEffect } from 'react';
import { styled, useTheme } from "@mui/material/styles";
import { Stack, Box, Avatar, Badge, Typography, IconButton, Divider, TextField, InputAdornment, Fab, Tooltip } from "@mui/material";
import { Phone, VideoCamera, MagnifyingGlass, CaretDown, LinkSimple, Smiley, PaperPlaneTilt, Camera, File, Image, Sticker, User } from "phosphor-react";
import { faker } from "@faker-js/faker";
import { Timeline, TextMsg, MediaMsg, ReplyMsg, LinkMsg, DocsMsg } from './Message';
import { Chat_History } from '../../data';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { ToggleSidebar } from '../../redux/slices/app';
import { useDispatch } from 'react-redux';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import '../../components/customScrollbar.css'; // Import the custom scrollbar CSS

const StyledInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    paddingTop: "12px",
    paddingBottom: "12px"
  }
}));

const Actions = [
  {
    color: "#4da5fe",
    icon: <Image size={24} />,
    y: 102,
    title: "Photo/Video"
  },
  {
    color: "#1b8cfe",
    icon: <Sticker size={24} />,
    y: 172,
    title: "Stickers"
  },
  {
    color: "#0172e4",
    icon: <Camera size={24} />,
    y: 242,
    title: "Image"
  },
  {
    color: "#0159b2",
    icon: <File size={24} />,
    y: 312,
    title: "Document"
  },
  {
    color: "#013f7f",
    icon: <User size={24} />,
    y: 382,
    title: "Contact"
  }
];

const ChatInput = ({ setOpenPicker }) => {
  const [openActions, setOpenActions] = useState(false);

  const toggleActions = () => {
    setOpenActions(prev => !prev);
  };

  return (
    <StyledInput
      fullWidth
      placeholder="Write a message..."
      variant="filled"
      InputProps={{
        disableUnderline: true,
        startAdornment: (
          <Stack sx={{ width: 'max-content' }}>
            <Stack sx={{ position: "relative", display: openActions ? "inline-block" : "none" }}>
              {Actions.map((el) => (
                <Tooltip placement="right" title={el.title} key={el.title}>
                  <Fab sx={{ position: "absolute", top: -el.y, backgroundColor: el.color }}>
                    {el.icon}
                  </Fab>
                </Tooltip>
              ))}
            </Stack>
            <InputAdornment position="start">
              <IconButton onClick={toggleActions}>
                <LinkSimple size={24} />
              </IconButton>
            </InputAdornment>
          </Stack>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={() => setOpenPicker(prev => !prev)}>
              <Smiley size={24} />
            </IconButton>
          </InputAdornment>
        )
      }}
    />
  );
};

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

const Conversation = () => {
  const theme = useTheme();
  const [openPicker, setOpenPicker] = useState(false);
  const [scrollbarVisible, setScrollbarVisible] = useState(false);
  const dispatch = useDispatch();

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
    <Stack height={"100%"} maxHeight={"100vh"} width={"100%"} onClick={showScrollbar}>
      {/* Chat Header */}
      <Box p={2} sx={{
        height: 100,
        width: "100%",
        backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <Stack onClick={() => {
          dispatch(ToggleSidebar())
        }}
          direction="row" alignItems="center" spacing={2}>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
          >
            <Avatar alt={faker.name.fullName()} src={faker.image.avatar()} />
          </StyledBadge>
          <Stack spacing={0.2}>
            <Typography variant="subtitle2"> {faker.name.fullName()}</Typography>
            <Typography variant="caption">Online</Typography>
          </Stack>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={3}>
          <IconButton>
            <VideoCamera />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
          <IconButton>
            <MagnifyingGlass />
          </IconButton>
          <Divider orientation="vertical" flexItem />
          <IconButton>
            <CaretDown />
          </IconButton>
        </Stack>
      </Box>

      {/* Chat Messages */}
      <Box sx={{
        width: "100%",
        flexGrow: 1,
        height: "100%",
        overflowY: "hidden",
        backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.paper,
      }}>
        <SimpleBar className={scrollbarVisible ? 'visible-scrollbar' : ''} style={{ maxHeight: '100%', overflow: scrollbarVisible ? 'auto' : 'hidden' }}>
          <Box p={3}>
            <Stack spacing={3}>
              {Chat_History.map((el, index) => {
                switch (el.type) {
                  case "divider":
                    return <Timeline key={index} el={el} />;
                  case "msg":
                    switch (el.subtype) {
                      case "img":
                        return <MediaMsg key={index} el={el} />;
                      case "doc":
                        return <DocsMsg key={index} el={el} />;
                      case "link":
                        return <LinkMsg key={index} el={el} />;
                      case "reply":
                        return <ReplyMsg key={index} el={el} />;
                      default:
                        return <TextMsg key={index} el={el} />;
                    }
                  default:
                    return <></>;
                }
              })}
            </Stack>
          </Box>
        </SimpleBar>
      </Box>

      {/* Chat Footer */}
      <Box p={2} sx={{
        height: 100,
        width: "100%",
        backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
        borderTop: `1px solid ${theme.palette.divider}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        

        {/* Chat Input */}
        <Stack sx={{ width: "100%" }}>
          <Box sx={{ display: openPicker ? "inline" : "none", zIndex: 10, position: "fixed", bottom: 81, right: 100 }}>
            <Picker theme={theme.palette.mode} data={data} onEmojiSelect={console.log} />
          </Box>
          <ChatInput setOpenPicker={setOpenPicker} />
        </Stack>
        <Box sx={{ height: 48, width: 48, backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }}>
          <Stack sx={{ height: "100%", width: "100%", alignItems: "center", justifyContent: "center" }}>
            <IconButton sx={{ backgroundColor: "blue", ml: 1 }}>
              <PaperPlaneTilt color="#fff" />
            </IconButton>
          </Stack>
        </Box>
      </Box>
    </Stack>
  );
};

export default Conversation;
