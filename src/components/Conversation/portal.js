import React from 'react'


import { Stack, Box} from "@mui/material";

import { Timeline, TextMsg, MediaMsg, ReplyMsg, LinkMsg, DocsMsg } from './Message';
import { Chat_History } from '../../data';
import './Conversation.css';

const portal = () => {
  return (
    <Box sx={{
        width: "100%",
        flexGrow: 1,
        height: "100%",
        overflowY: "scroll",
        backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.paper,
      }}>
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
      </Box>

  )
}

export default portal