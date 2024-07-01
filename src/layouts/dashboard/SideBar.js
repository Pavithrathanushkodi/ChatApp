import React from "react";
import { Box, Menu, MenuItem, Stack } from "@mui/material";
import { IconButton } from "@mui/material";
import { Divider } from "@mui/material";
import { Gear } from "phosphor-react";
import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons, Profile_Menu } from "../../data"; // Assuming Nav_Buttons and Profile_Menu are imported correctly
import { Avatar } from "@mui/material";
import { faker } from '@faker-js/faker'; // Assuming faker is imported correctly
import useSettings from '../../hooks/useSettings'
import { useTheme } from "@mui/material/styles";
import { styled } from '@mui/material/styles'
import { Switch } from '@mui/material'
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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

const getPath = (index) => {
    switch (index) {
        case 0:
            return "/app"
        case 1:
            return "/Group"
        case 2:
            return "/Call"
        case 3:
            return "/Settings"
        default:
            return "/";
    }
}

const getMenuPath = (index) => {
    switch (index) {
        case 0:
            return "/Profile";
        case 1:
            return "/Settings";
        case 2:
            return "/auth/login";
        default:
            return "/";
    }
}

const SideBar = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const [selected, setSelected] = useState(0);
    const { onToggleMode } = useSettings();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box p={2} sx={{ backgroundColor: theme.palette.background.paper, boxShadow: "0px 0px 2px rgba(0,0,0.25)", height: "100vh", width: "100px" }}>
            <Stack direction="column" alignItems={"center"} justifyContent="space-between" sx={{ height: "100%" }} spacing={3}>
                <Stack alignItems={"center"} spacing={4}>
                    <Box sx={{
                        backgroundColor: theme.palette.primary.main,
                        width: 64,
                        height: 64,
                        borderRadius: 1.5,
                    }}>
                        <img src={Logo} alt={"Chat-App-Logo"} />
                    </Box>
                    <Stack sx={{ width: "max-content" }} direction="column" alignItems="center" spacing={3}>
                        {Nav_Buttons.map((el) => (
                            el.index === selected ?
                                <Box p={1} sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }}>
                                    <IconButton sx={{ width: "max-content", color: "#fff" }} key={el.index}> {el.icon}  </IconButton>
                                </Box>
                                : <IconButton
                                    onClick={() => {
                                        setSelected(el.index)
                                        navigate(getPath(el.index))
                                    }}
                                    sx={{ width: "max-content", }}
                                    key={el.index}>{el.icon}</IconButton>
                        ))}
                        <Divider sx={{ width: "48px" }} />
                        {selected === 3 ?
                            <Box p={1} sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }}>
                                <IconButton>
                                    <Gear />
                                </IconButton>
                            </Box>
                            : <IconButton
                                onClick={() => {
                                    navigate(getPath(3))
                                    setSelected(3)
                                }} sx={{ width: "max-content", color: theme.palette.mode === "light" ? "#000" : theme.palette.text.primary }}>
                                <Gear />
                            </IconButton>
                        }
                    </Stack>
                </Stack>
                <Stack spacing={4}>
                    {/* Switch */}
                    <AntSwitch onChange={() => {
                        onToggleMode();
                    }} defaultChecked />
                    <Avatar
                        id="basic-button"
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                        src={faker.image.avatar()} />
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                        }}
                        transformOrigin={{
                            vertical: "bottom",
                            horizontal: "left"
                        }}
                    >
                        <Stack spacing={1} px={1}>
                            {Profile_Menu.map((el, idx) => (
                                <MenuItem key={el.title} onClick={() => {
                                    navigate(getMenuPath(idx));
                                    handleClose();
                                }}>
                                    <Stack sx={{ width: 100 }} direction="row" alignItems="center" justifyContent="space-between">
                                        <span>{el.title}</span>
                                        {el.icon}
                                    </Stack>
                                </MenuItem>
                            ))}
                        </Stack>
                    </Menu>
                </Stack>
            </Stack>
        </Box>
    )
}

export default SideBar;
