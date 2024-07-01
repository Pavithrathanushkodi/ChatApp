import React from 'react';
import { Stack, Divider, Typography, Box, Link, IconButton, Menu, MenuItem } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { DotsThreeVertical, DownloadSimple, Image } from "phosphor-react";
import { Message_options } from '../../data';

const Timeline = ({ el }) => {
  const theme = useTheme();

  return (
    <Stack direction="row" alignItems="center" justifyContent="center">
      <Divider flexItem orientation="horizontal" sx={{ width: "46%", height: 1, backgroundColor: theme.palette.divider }} />
      <Typography variant="caption" sx={{ flex: 1, textAlign: "center", paddingLeft: 2, color: theme.palette.text.primary }}>
        {el.text}
      </Typography>
      <Divider flexItem orientation="horizontal" sx={{ width: "46%", height: 1, backgroundColor: theme.palette.divider }} />
    </Stack>
  );
};

const TextMsg = ({ el, menu }) => {
  const theme = useTheme();

  return (
    <Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
      <Box p={1.5} sx={{ backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main, borderRadius: 1.5, width: "max-content" }}>
        <Typography variant="body2" color={el.incoming ? theme.palette.text.primary : "#fff"}>
          {el.message}
        </Typography>
      </Box>
      {menu && <MessageOptions />}
    </Stack>
  );
};

const MediaMsg = ({ el, menu}) => {
  const theme = useTheme();

  return (
    <Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
      <Box p={1.5} sx={{ backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main, borderRadius: 1.5, width: "max-content" }}>
        <Stack spacing={1}>
          <img src={el.img} alt={el.message} style={{ maxHeight: 210, borderRadius: "10px" }} />
          <Typography variant="body2" color={el.incoming ? theme.palette.text.primary : "#fff"}>
            {el.message}
          </Typography>
        </Stack>
      </Box>
      {menu && <MessageOptions />}
      <MessageOptions />
    </Stack>
  );
};

const ReplyMsg = ({ el, menu }) => {
  const theme = useTheme();

  return (
    <Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
      <Box p={1.5} sx={{ backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main, borderRadius: 1.5, width: "max-content" }}>
        <Stack spacing={2}>
          <Stack p={2} direction="column" spacing={3} alignItems="center" sx={{ backgroundColor: theme.palette.background.paper, borderRadius: 1 }}>
            <Typography variant="body2" color={theme.palette.text.primary}>{el.message}</Typography>
          </Stack>
          <Typography variant="body2" color={el.incoming ? theme.palette.text.primary : "#fff"}>{el.reply}</Typography>
        </Stack>
      </Box>
      {menu && <MessageOptions />}
    </Stack>
  );
};

const LinkMsg = ({ el }) => {
  const theme = useTheme();

  return (
    <Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
      <Box p={1.5} sx={{ backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main, borderRadius: 1.5, width: "max-content" }}>
        <Stack spacing={2}>
          <Stack p={2} spacing={3} alignItems="Start" sx={{ backgroundColor: theme.palette.background.paper, borderRadius: 1 }}>
            <img src={el.preview} alt={el.message} style={{ maxHeight: 210, borderRadius: "10px" }} />
            <Stack spacing={2}>
              <Typography variant="subtitle2">Creating chat App</Typography>
              <Typography variant="subtitle2" sx={{ color: theme.palette.primary.main }} component={Link} href="https://www.youtube.com">www.youtube.com</Typography>
            </Stack>
            <Typography variant="body2" color={el.incoming ? theme.palette.text.primary : "#fff"}>
              {el.message}
            </Typography>
          </Stack>
        </Stack>
      </Box>
      <MessageOptions />
    </Stack>
  );
};

const DocsMsg = ({ el }) => {
  const theme = useTheme();

  return (
    <Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
      <Box p={1.5} sx={{ backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main, borderRadius: 1.5, width: "max-content" }}>
        <Stack spacing={2}>
          <Stack p={2} direction="row" spacing={3} alignItems="center" sx={{ backgroundColor: theme.palette.background.paper, borderRadius: 1 }}>
            <Image size="48" />
            <Typography variant="caption">Abstract.png</Typography>
            <IconButton>
              <DownloadSimple />
            </IconButton>
          </Stack>
          <Typography variant="body2" sx={{ color: el.incoming ? theme.palette.primary.main : "#fff" }}>
            {el.message}
          </Typography>
        </Stack>
      </Box>
      <MessageOptions />
    </Stack>
  );
};

const MessageOptions = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  

  return (
    <>
      <IconButton onClick={handleClick}>
        <DotsThreeVertical size={20} />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Stack spacing={1} px={1}>
          {Message_options.map((el) => (
            <MenuItem key={el} handleClick>
              {el.title}
            </MenuItem>
          ))}
        </Stack>
      </Menu>
    </>
  );
};

export { Timeline, TextMsg, MediaMsg, ReplyMsg, LinkMsg, DocsMsg };
