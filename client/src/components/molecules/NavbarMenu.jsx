import {
    Avatar,
    Box,
    Button,
    Divider,
    IconButton,
    Link,
    ListItemButton,
    ListItemIcon,
    Menu,
    Tooltip,
    Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { server } from "components/config";

import ChatIcon from "@mui/icons-material/Chat";
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";
import { Settings } from "@material-ui/icons";
import PersonAddAltRounded from "@mui/icons-material/PersonAddAltRounded";
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

const NavbarMenu = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                }}
            >
                <Tooltip title="アカウント設定">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? "account-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                    >
                        <Avatar
                            sx={{ width: 40, height: 40 }}
                            src={
                                server.host +
                                "/images/icon/" +
                                props.profile.image
                            }
                        />
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        "&:before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
                <ListItemButton component={Link} href="/profile">
                    <Avatar
                        sx={{ width: 40, height: 40 }}
                        src={
                            server.host + "/images/icon/" + props.profile.image
                        }
                    />
                    <Typography
                        sx={{
                            display: "flex",
                            fontWeight: 600,
                        }}
                    >
                        {props.profile.name}
                    </Typography>
                </ListItemButton>

                <ListItemButton
                    component={Link}
                    href="#"
                >
                    <ChatIcon
                        sx={{
                            mr: 1,
                        }}
                    />
                    チャット
                </ListItemButton>

                <Divider />

                <ListItemButton
                    component={Link}
                    href="/signup/student"
                >
                    <ListItemIcon>
                        <PersonAddAltRounded fontSize="small" />
                    </ListItemIcon>
                        他のアカウント作成
                </ListItemButton>

                <ListItemButton
                    component={Link}
                    href="/profile/edit"
                >
                    <ListItemIcon>
                        <ManageAccountsRoundedIcon fontSize="small" />
                    </ListItemIcon>
                        プロフィール編集
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                        設定
                </ListItemButton>

                {props.signInState ? (
                    <Button
                        sx={{
                            ml: 7,
                        }}
                        startIcon={<LogoutRoundedIcon />}
                        variant="contained"
                        onClick={props.toggleAlertOpen}
                    >
                        サインアウト
                    </Button>
                ) : (
                    <Button variant="contained" href="/signin">
                        サインイン
                    </Button>
                )}
            </Menu>
        </>
    );
};

export default NavbarMenu;
