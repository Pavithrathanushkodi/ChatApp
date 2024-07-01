import React from 'react';
import { Box, Stack, Typography, IconButton, Tabs, Tab, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { CaretLeft } from 'phosphor-react';
import { useDispatch } from 'react-redux';
import { ToggleSidebar, UpdateSidebarType } from '../redux/slices/app';
import { faker } from "@faker-js/faker";
import { DocsMsg, LinkMsg } from './Conversation/Message';
import { SHARED_DOCS, SHARED_LINKS } from '../data';
import Conversation from './Conversation';


const StarredMessages = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleToggleSidebar = () => {
    dispatch(ToggleSidebar());
    dispatch(UpdateSidebarType("CONTACT"));
  };

  return (
    <Box sx={{ width: 320, height: "100vh" }}>
      <Stack sx={{ height: "100%" }}>
        <Box
          sx={{
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            width: "100%",
            backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background,
          }}
        >
          <Stack sx={{ height: "100%", p: 2 }} direction="row" alignItems="center" spacing={3}>
            <IconButton onClick={() => {
              dispatch(UpdateSidebarType("CONTACT"));
            }}>
              <CaretLeft />
            </IconButton>
            <Typography>Starred Messages</Typography>
          </Stack>
        </Box>

        {/* Header Title */}
        

        {/* Header Body */}
        <Stack sx={{ height: "100%", position: "relative", flexGrow: 1, overflowY: "scroll" }} p={3} spacing={3}>
          <Conversation />
        </Stack>
      </Stack>
    </Box>
  );
}

export default StarredMessages;
