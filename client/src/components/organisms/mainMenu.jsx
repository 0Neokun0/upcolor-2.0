import { Link } from "react-router-dom"
import { Box, Hidden, List, ListItem, ListItemButton, ListItemIcon} from "@mui/material"




const MainMenu = (props) => {
    return (
        <Hidden lgDown>
        <Box flex={1} p={2} sx={{ mt: 2, ml: 2}} >

            <Box position="sticky" >

                <List
                    sx={{
                        "li + li": {
                            borderTop: 1,
                            borderColor: "#e3f2fd",
                        }
                    }}
                >
                    {
                        props.menus.map((menu, index) => {
                            return (

                                <ListItem
                                    disablePadding
                                    key={index}
                                >
                                    <ListItemButton

                                        component={Link}
                                        to={menu.url}
                                    >
                                        <ListItemIcon>
                                            {menu.icon}
                                        </ListItemIcon>
                                        {menu.value}
                                    </ListItemButton>
                                </ListItem>
                            )
                        })
                    }
                </List>
            </Box>
        </Box>
        </Hidden>
    );
}

export default MainMenu;
