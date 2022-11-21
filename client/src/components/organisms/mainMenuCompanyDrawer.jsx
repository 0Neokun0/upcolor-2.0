import { Drawer } from "@mui/material"
import MainMenuCompany from "./mainMenuCompany"

const MainMenuCompanyDrawer = (props) => {
    return (
        <>
            <Drawer
                variant="temporary"
                open={props.companyMenuOpen}
                onClose={props.handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: "block", lg: "none" },
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: 350,
                    },
                }}
            >
                <MainMenuCompany
                    logo={props.logo}
                    menus={props.menus}
                />
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: "none", lg: "block" },
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: 350,
                    },
                }}
                open
            >
                <MainMenuCompany
                    logo={props.logo}
                    menus={props.menus}
                />
            </Drawer>
        </>
    )
}

export default MainMenuCompanyDrawer
