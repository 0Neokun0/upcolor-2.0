import { useLocation } from "react-router-dom"
import { AppBar, Box, Button, Dialog, Drawer, Hidden, IconButton, Link, Toolbar, Tooltip, Typography } from "@mui/material"

import { MainMenu } from "components/organisms"
import { NavbarMenu } from "components/molecules"

import LogoutIcon from "@mui/icons-material/Logout"
import LoginIcon from "@mui/icons-material/Login"
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'

const Header = (props) => {
    const pathName = useLocation()["pathname"]

    return (
        <AppBar
            postion="static"
            color="default"
        >
            <Toolbar
                sx={{
                    height: "64px",
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    {
                        pathName === "/"
                            ?
                            <></>
                            :
                            <Hidden
                                mdUp
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <IconButton
                                        sx={{
                                            p: "5px",
                                            borderRadius: "10px",
                                            border: 1,
                                            borderColor: "divider"
                                        }}
                                        onClick={() => props["setMenuOpen"](true)}
                                    >
                                        <MenuRoundedIcon />
                                    </IconButton>
                                </Box>
                            </Hidden>
                    }

                    <Link
                        href="/"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            ml: 2,
                        }}
                    >
                        <img
                            src={props.logoSrc}
                            alt="ロゴの画像"
                            height="30px"
                        />
                    </Link>

                    <Typography
                        variant="h6"
                        sx={{
                            ml: 3,
                            fontWeight: 600,
                        }}
                    >
                        {props.name}
                    </Typography>

                </Box>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    {
                        props.menus.map((menu, index) => {
                            return (
                                <Tooltip
                                    key={index}
                                    title={menu.label}
                                >
                                    <Link
                                        key={index}
                                        href={menu.url}
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            mx: 1,
                                            color: "gray",
                                            textDecorationLine: "none",
                                            ":hover": {
                                                color: "dimgray",
                                            },
                                        }}
                                    >
                                        {menu.icon}
                                        {menu.value}
                                    </Link>
                                </Tooltip>
                            )
                        })
                    }

                    {
                        pathName === "/"
                            ?
                            <Box
                                sx={{
                                    ml: 5,
                                }}
                            >
                                {
                                    props.signInState
                                        ?
                                        (
                                            <Button
                                                variant="contained"
                                                onClick={props.toggleAlertOpen}
                                            >
                                                サインアウト
                                            </Button>
                                        )
                                        :
                                        (
                                            <Button variant="contained" href="/signin">
                                                サインイン
                                            </Button>
                                        )
                                }
                            </Box>
                            :
                            <NavbarMenu
                                profile={props.profile}
                                anchorEl={props.anchorEl}
                                openNavbar={props.openNavbar}
                                handleClick={props.handleClick}
                                handleClose={props.handleClose}
                                signInState={props.signInState}
                                toggleAlertOpen={props.toggleAlertOpen}
                            />
                    }
                </Box>
            </Toolbar>

            {/* サインアウトダイアログ */}
            <Dialog
                open={Boolean(props.open)}
                onClose={props.toggleAlertClose}
            >
                <Box
                    sx={{
                        p: 2,
                    }}
                >
                    <Typography
                        textAlign="center"
                        sx={{
                            fontWeight: 600,
                        }}
                    >
                        本当にサインアウトしますか?
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            mt: 2,
                        }}
                    >
                        <Button
                            color="success"
                            startIcon={<LoginIcon />}
                            variant="outlined"
                            onClick={props.toggleAlertClose}
                        >
                            キャンセル
                        </Button>

                        <Button
                            color="error"
                            startIcon={<LogoutIcon />}
                            variant="outlined"
                            onClick={props.toggleSignout}
                            href="/"
                            sx={{
                                ml: 2,
                            }}
                        >
                            サインアウト
                        </Button>
                    </Box>
                </Box>
            </Dialog>

            <Drawer
                open={props["menuOpen"]}
                onClose={() => props["setMenuOpen"](false)}
            >
                <Box
                    sx={{
                        width: "300px",
                        p: 2,
                    }}
                >
                    <MainMenu
                        profile={props["profile"]}
                        menus={props["drawerMenus"]}
                    />
                </Box>
            </Drawer>
        </AppBar>
    )
}

export default Header
