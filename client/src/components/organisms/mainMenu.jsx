import { Link, List, ListItem, ListItemButton } from "@mui/material"

const MainMenu = (props) => {
    return (
        <List
            disablePadding
            sx={{
                "li + li": {
                    borderTop: 1,
                    borderColor: "lightgray",
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
                                LinkComponent={Link}
                                href={menu.url}
                            >
                                {menu.value}
                            </ListItemButton>
                        </ListItem>
                    )
                })
            }
        </List>
    );
}

export default MainMenu;
