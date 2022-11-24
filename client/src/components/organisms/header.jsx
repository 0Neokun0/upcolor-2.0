import { AppBar, Box, Button, Dialog, Link, Toolbar, Tooltip, Typography } from "@mui/material"
import { NavbarMenu } from "components/molecules"
import { useLocation } from "react-router-dom"

import LogoutIcon from "@mui/icons-material/Logout"
import LoginIcon from "@mui/icons-material/Login"

const Header = (props) => {
    const { pathName } = useLocation()

    return (
        <AppBar postion="static" color="default">
            <Toolbar
                sx={{
                    height: "64px",
                }}
            >
                <Link
                    href="/"
                    sx={{
                        display: "flex",
                        alignItems: "center",
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
                        flexGrow: 1,
                        fontWeight: 600,
                    }}
                >
                    {props.name}
                </Typography>

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
                        (
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
                        )
                        :
                        (
                            <NavbarMenu
                                profile={props.profile}
                                anchorEl={props.anchorEl}
                                openNavbar={props.openNavbar}
                                handleClick={props.handleClick}
                                handleClose={props.handleClose}
                                signInState={props.signInState}
                                toggleAlertOpen={props.toggleAlertOpen}
                            />
                        )
                }
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
        </AppBar>
    )
}

export default Header
