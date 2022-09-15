import { Link } from "react-router-dom"
import { Box, List, ListItem, ListItemButton, ListItemIcon} from "@mui/material"




const MainMenu = (props) => {
    return (
        <Box flex={1} p={2} sx={{ display: { xs: "none", md: "block" }, mt: 2, ml: 2}} >

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
    );
}

export default MainMenu;
