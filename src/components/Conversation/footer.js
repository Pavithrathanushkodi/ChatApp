// import React from 'react'
// import React, { useState } from 'react';
// import { styled, useTheme } from "@mui/material/styles";
// import { Stack, Box, IconButton,  TextField, InputAdornment, Fab, Tooltip } from "@mui/material";
// import { LinkSimple, Smiley, PaperPlaneTilt, Camera, File, Image, Sticker, User } from "phosphor-react";
// import { Timeline, TextMsg, MediaMsg, ReplyMsg, LinkMsg, DocsMsg } from './Message';
// import { Chat_History } from '../../data';
// import './Conversation.css';
// import data from '@emoji-mart/data';
// import Picker from '@emoji-mart/react';

// const footer = () => {
// const StyledInput = styled(TextField)(({ theme }) => ({
//         "& .MuiInputBase-input": {
//           paddingTop: "12px",
//           paddingBottom: "12px"
//         }
//       }));
      
//       const Actions = [
//         {
//           color: "#4da5fe",
//           icon: <Image size={24} />,
//           y: 102,
//           title: "Photo/Video"
//         },
//         {
//           color: "#1b8cfe",
//           icon: <Sticker size={24} />,
//           y: 172,
//           title: "Stickers"
//         },
//         {
//           color: "#0172e4",
//           icon: <Camera size={24} />,
//           y: 242,
//           title: "Image"
//         },
//         {
//           color: "#0159b2",
//           icon: <File size={24} />,
//           y: 312,
//           title: "Document"
//         },
//         {
//           color: "#013f7f",
//           icon: <User size={24} />,
//           y: 382,
//           title: "Contact"
//         }
//       ];
      
//       const ChatInput = ({ setOpenPicker }) => {
//         const [openActions, setOpenActions] = useState(false);
      
//         const toggleActions = () => {
//           setOpenActions(prev => !prev);
//         };
      
//         return (
//           <StyledInput fullWidth placeholder="Write a message..." variant="filled"
//             InputProps={{
//               disableUnderline: true,
//               startAdornment: (
//                   <Stack sx = {{width: 'max-content'}}>
//                     <Stack sx = {{position:"relative", display : openActions ? "inline-block" : "none" }}>
//                       {Actions.map((el) => (
//                         <Tooltip placement ="right" title = {el.title}>
//                         <Fab sx = {{position:"absolute", top: -el.y, backgroundColor:el.color}}>
//                           {el.icon}
//                         </Fab>
//                         </Tooltip>
                        
//                       ))}
      
//                     </Stack>
//                   <InputAdornment position="start">
//                     <IconButton onClick= {() => setOpenActions(prev => !prev)}>
//                       <LinkSimple size={24} />
//                     </IconButton>
//                   </InputAdornment>
//                   </Stack>
                  
//                 ),
//               endAdornment: (
//                 <InputAdornment position="end">
//                   <IconButton onClick={() => setOpenPicker(prev => !prev)}>
//                     <Smiley size={24} />
//                   </IconButton>
//                 </InputAdornment>
//               )
//             }}
//           />
//         );
//       }
      
//   return (
//     <Box p={2} sx={{
//         height: 100,
//         width: "100%",
//         backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.paper,
//         boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
//         borderTop: `1px solid ${theme.palette.divider}`,
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}>
//         {/* Chat Input */}
//         <Stack sx={{ width: "100%" }}>
//           <Box sx={{ display: openPicker ? "inline" : "none", zIndex: 10, position: "fixed", bottom: 81, right: 100 }}>
//             <Picker theme={theme.palette.mode} data={data} onEmojiSelect={console.log} />
//           </Box>
//           <ChatInput setOpenPicker={setOpenPicker} />
//         </Stack>
//         <Box sx={{ height: 48, width: 48, backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }}>
//           <Stack sx={{ height: "100%", width: "100%", alignItems: "center", justifyContent: "center" }}>
//             <IconButton sx={{ backgroundColor: "blue", ml: 1 }}>
//               <PaperPlaneTilt color="#fff" />
//             </IconButton>
//           </Stack>
//         </Box>
//       </Box>
//   )
// }

// export default footer