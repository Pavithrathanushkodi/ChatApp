import React from 'react';
import { Box, Stack, Typography, IconButton, Tabs, Tab, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { CaretLeft } from 'phosphor-react';
import { useDispatch } from 'react-redux';
import { ToggleSidebar, UpdateSidebarType } from '../redux/slices/app';
import { faker } from "@faker-js/faker";
import { DocsMsg, LinkMsg } from './Conversation/Message';
import { SHARED_DOCS, SHARED_LINKS } from '../data';

const SharedMessages = () => {
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
            <Typography>Shared Messages</Typography>
          </Stack>
        </Box>

        {/* Header Title */}
        <Tabs sx={{ px: 2, pt: 2 }} value={value} onChange={handleChange} centered>
          <Tab label="Media" />
          <Tab label="Links" />
          <Tab label="Docs" />
        </Tabs>

        {/* Header Body */}
        <Stack sx={{ height: "100%", position: "relative", flexGrow: 1, overflowY: "scroll" }} p={3} spacing={value === 1 ? 1:3}>
          {value === 0 && (

            // render image 

            <Grid container spacing={2}>
              {[...Array(7)].map((_, index) => (
                <Grid item xs={4} key={index}>
                  <img
                    src={faker.image.imageUrl()}
                    alt={faker.name.fullName()}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </Grid>
              ))}
            </Grid>
          )}

          {/* render link */}
          {value === 1 && (
            SHARED_LINKS.map ((el) => <LinkMsg el= {el} />)
          )}
          {value === 2 && (
            SHARED_DOCS.map ((el) => <DocsMsg el= {el}/>)
          )}
        </Stack>
      </Stack>
    </Box>
  );
}

export default SharedMessages;
