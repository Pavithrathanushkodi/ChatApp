// import React from 'react'
// import { styled, useTheme } from "@mui/material/styles";
// import { Stack, Box, Avatar, Badge, Typography, IconButton, Divider,  } from "@mui/material";
// import { Phone, VideoCamera, MagnifyingGlass, CaretDown,  } from "phosphor-react";
// import { faker } from "@faker-js/faker";
// import theme from

// import './Conversation.css';

// const Header = () => {
//     const theme = useTheme();
//   return (
//     <Box p={2} sx={{
//         height: 100,
//         width: "100%",
//         backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.paper,
//         boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//       }}>
//         <Stack direction="row" alignItems="center" spacing={2}>
//           <Badge overlap="circular"
//             anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
//             variant="dot">
//             <Avatar alt={faker.name.fullName()} src={faker.image.avatar()} />
//           </Badge>
//           <Stack spacing={0.2}>
//             <Typography variant="subtitle2"> {faker.name.fullName()}</Typography>
//             <Typography variant="caption">Online</Typography>
//           </Stack>
//         </Stack>
//         <Stack direction="row" alignItems="center" spacing={3}>
//           <IconButton>
//             <VideoCamera />
//           </IconButton>
//           <IconButton>
//             <Phone />
//           </IconButton>
//           <IconButton>
//             <MagnifyingGlass />
//           </IconButton>
//           <Divider orientation="vertical" flexItem />
//           <IconButton>
//             <CaretDown />
//           </IconButton>
//         </Stack>
//       </Box>
//   )
// }

// export default Header