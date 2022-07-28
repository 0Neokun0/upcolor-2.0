import { AppBar, Button, Link, Toolbar, Typography } from "@mui/material"

const Header = (props) => {
    return (
        <AppBar
            postion="static"
            color="default"
        >
            <Toolbar>
                <Link
                    href="/"
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

                <Button
                    variant="contained"
                    sx={{
                        ml: 5,
                    }}
                >
                    サインアウト
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
