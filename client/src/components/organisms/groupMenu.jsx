import { List, ListItem } from "@mui/material";

const GroupMenu = (props) => {
    return (
        <List
        
        >
            {
                props.menus.map((menu, index) => {
                    return (
                        <ListItem
                            key={index}
                        >
                            {menu.value}
                        </ListItem>
                    )
                })
            }
        </List>
    );
}

export default GroupMenu;
