import { Drawer, IconButton, Tooltip } from "@mui/material"
import { MainMenu } from "."

import MenuIcon from "@mui/icons-material/Menu"

const MainMenuDrawer = (props) => {
    return (
        <>
            <Tooltip
                title="メニュー表示">
                <IconButton
                    sx={{
                        m: 2,
                        display: {
                            md: "block",
                            lg: "none",
                        },
                    }}
                    color="inherit"
                    edge="start"
                    onClick={props.studentMenuOpenToggle}
                >
                    <MenuIcon />
                </IconButton>
            </Tooltip>
            <Drawer
                sx={{
                    display: {
                        xs: "block",
                        lg: "none",
                    },
                    "& .MuiDrawer-paper": {
                        width: 390,
                        borderTopRightRadius: "15px",
                        borderBottomRightRadius: "15px",
                    },
                }}
                variant="temporary"
                open={props.studentMenuOpen}
                onClose={props.studentMenuOpenToggle}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <MainMenu
                    logo={props.logo}
                    profile={props.profile}
                    user={props.user}
                    menus={props.menus}
                />
            </Drawer>

            <Drawer
                sx={{
                    display: {
                        xs: "none",
                        lg: "block",
                    },
                    "& .MuiDrawer-paper": {
                        width: 390,
                        borderTopRightRadius: "15px",
                        borderBottomRightRadius: "15px",
                    },
                }}
                open
                variant="permanent"
            >
                <MainMenu
                    logo={props.logo}
                    profile={props.profile}
                    user={props.user}
                    menus={props.menus}
                />
            </Drawer>
        </>
    )
}

export default MainMenuDrawer
