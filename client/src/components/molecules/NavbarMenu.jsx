import { Avatar, Box, Button, IconButton, Link, ListItemButton, ListItemIcon, Menu, Tooltip, Typography } from "@mui/material"
import React from "react"

import { server } from "components/config"
import { Settings } from "@material-ui/icons"

import ChatIcon from "@mui/icons-material/Chat"
import PersonAddAltRounded from "@mui/icons-material/PersonAddAltRounded"
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded"

const NavbarMenu = (props) => {



    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                }}
            >
                <Tooltip
                    title="アカウント設定"
                >
                    <IconButton
                        onClick={props.handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={
                            props.openNavbar
                                ?
                                "account-menu"
                                :
                                undefined
                        }
                        aria-haspopup="true"
                        aria-expanded={
                            props.openNavbar
                                ?
                                "true"
                                :
                                undefined
                        }
                    >
                        <Avatar
                            sx={{
                                width: 40,
                                height: 40,
                                border: "2px solid lightgray",
                            }}
                            src={props.src}
                        />
                    </IconButton>
                </Tooltip>
            </Box>

            <Menu
                anchorEl={props.anchorEl}
                open={props.openNavbar}
                onClose={props.handleClose}
                onClick={props.handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        borderRadius: "15px",
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
                transformOrigin={{
                    horizontal: "right",
                    vertical: "top"
                }}
                anchorOrigin={{
                    horizontal: "right",
                    vertical: "bottom"
                }}
            >
                <ListItemButton
                    sx={{
                        borderRadius: 5,
                    }}
                    component={Link}
                    href="/profile"
                >
                    <ListItemIcon>
                        <Avatar
                            sx={{
                                border: "2px solid lightgray",
                                width: 40,
                                height: 40
                            }}
                            src={props.src}
                        />
                    </ListItemIcon>
                    <Typography
                        sx={{
                            display: "flex",
                            fontWeight: 600,
                        }}
                    >
                        {
                            props.userType === 1
                                ?
                                props.profile["name"]
                                :
                                props.userType === 2
                                    ?
                                    props.teacher["name"]
                                    :
                                    props.company["company_name"]
                        }

                    </Typography>
                </ListItemButton>

                <ListItemButton
                    sx={{
                        borderRadius: "15px",
                    }}
                    component={Link}
                    href="#"
                >
                    <ListItemIcon>
                        <ChatIcon
                            sx={{
                                mr: 1,
                            }}
                        />
                    </ListItemIcon>
                    チャット
                </ListItemButton>

                <ListItemButton
                    sx={{
                        borderRadius: "15px",
                    }}
                    component={Link}
                    href="/signup/student"
                >
                    <ListItemIcon>
                        <PersonAddAltRounded
                            fontSize="small"
                        />
                    </ListItemIcon>
                    他のアカウント作成
                </ListItemButton>

                <ListItemButton
                    sx={{
                        borderRadius: "15px",
                    }}
                >
                    <ListItemIcon>
                        <Settings
                            fontSize="small"
                        />
                    </ListItemIcon>
                    設定
                </ListItemButton>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        mt: 2,
                    }}
                >
                    {
                        props["signInState"]
                            ?
                            <Button
                                startIcon={<LogoutRoundedIcon />}
                                variant="contained"
                                onClick={props.toggleAlertOpen}
                            >
                                サインアウト
                            </Button>
                            :
                            <Button variant="contained" href="/signin">
                                サインイン
                            </Button>
                    }
                </Box>
            </Menu>
        </>
    )
}

export default NavbarMenu
