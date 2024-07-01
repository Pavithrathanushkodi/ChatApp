import React from 'react';
import { Dialog, DialogContent, DialogTitle, Grid, Slide, Stack, Typography, Button, DialogActions } from '@mui/material';

const ShortCuts = ({ open, handleClose }) => {
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const list = [
    {
      key: 0,
      title: "Mark as Unread",
      combination: ["cmd", "Shift", "U"],
    },
    {
      key: 1,
      title: "Mute",
      combination: ["cmd", "Shift", "M"],
    },
    {
      key: 2,
      title: "Archive Chat",
      combination: ["cmd", "Shift", "E"],
    },
    {
      key: 3,
      title: "Delete Chat",
      combination: ["cmd", "Shift", "D"],
    },
    {
      key: 4,
      title: "New Group",
      combination: ["cmd", "Shift", "N"],
    },
    {
      key: 5,
      title: "Profile & About",
      combination: ["cmd", "P"],
    },
    {
      key: 6,
      title: "Increase Speed Of Voice Msg",
      combination: ["Shift", "."],
    },
    {
      key: 7,
      title: "Decrease Speed Of Voice Msg",
      combination: ["Shift", ","],
    },
    {
      key: 8,
      title: "Settings",
      combination: ["Shift", "S"],
    },
    {
      key: 9,
      title: "Email Panel",
      combination: ["Shift", ","],
    },
    {
      key: 10,
      title: "Pin Chat",
      combination: ["cmd", "Shift", ","],
    },
    {
      key: 11,
      title: "Search",
      combination: ["cmd", "F"],
    },
    {
      key: 12,
      title: "Next Stop",
      combination: ["ctrl", "Shift", "Tab"],
    },
    {
      key: 13,
      title: "Previous Stop",
      combination: ["ctrl", "Shift", "Tab"],
    },
    {
      key: 14,
      title: "Sticker Panel",
      combination: ["Cmd", "S"],
    },
    {
      key: 15,
      title: "Emoji Panel",
      combination: ["Cmd", "E"],
    },
  ];

  return (
    <Dialog fullWidth maxWidth="md" open={open} onClose={handleClose} keepMounted TransitionComponent={Transition} sx={{ p: 4 }}>
      <DialogTitle>Keyboard Shortcuts</DialogTitle>
      <DialogContent sx={{ p: 4 }}>
        <Grid container spacing={3}>
          {list.map(({ key, title, combination }) => (
            <Grid item xs={6} key={key}>
              <Stack sx={{ width: "100%" }} spacing={2}>
                <Typography variant="body1">{title}</Typography>
                <Stack direction="row" spacing={2}>
                  {combination.map((el, index) => (
                    <Button key={index} disabled variant="contained" sx={{ color: "#212121" }}>
                      {el}
                    </Button>
                  ))}
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="contained">Close</Button>
      </DialogActions>
    </Dialog>
  );
}

export default ShortCuts;
