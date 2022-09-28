import { AppBar, Box, Button, Dialog, DialogActions, DialogTitle, Link, Toolbar, Typography } from "@mui/material"

const Header = (props) => {
    return (
        <AppBar
            postion="static"
            color="default"
        >
            <Toolbar>
                <Link
                    href="/home"
                    sx={{
                        display: "flex",
                        alignItems: "center"
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
                    }}
                >
                    {props.name}
                </Typography>

                {
                    props.menus.map((menu, index) => {
                        return (
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
                                        color: "dimgray"
                                    }
                                }}
                            >
                                {menu.icon}
                                {menu.value}
                            </Link>
                        )
                    })
                }

                <Box
                    sx={{
                        ml: 5,
                    }}
                >
                    {
                        props.signInState
                            ?
                            <Button
                                variant="contained"
                                onClick={props.toggleAlertOpen}
                            >
                                サインアウト
                            </Button>
                            :
                            <Button
                                variant="contained"
                                href="/signin"
                            >
                                サインイン
                            </Button>
                    }
                </Box>
            </Toolbar>

            {/* サインアウトダイアログ */}
            <Dialog open={Boolean(props.open)} onClose={props.toggleAlertClose}>
                <DialogTitle>
                    本当にサインアウトしますか?
                </DialogTitle>

                <DialogActions>
                    <Button
                        onClick={props.toggleAlertClose}
                    >
                        キャンセル
                    </Button>

                    <Button
                        onClick={props.toggleSignout}
                    >
                        サインアウト
                    </Button>
                </DialogActions>
            </Dialog>
        </AppBar>
    )
}

export default Header
