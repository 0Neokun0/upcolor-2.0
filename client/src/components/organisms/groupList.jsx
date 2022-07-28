import { List, ListItem, ListItemButton } from "@mui/material"

const GroupList = (props) => {
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
                props.groups.map((group, index) => {
                    return (
                        <ListItem
                            disablePadding
                            key={index}
                        >
                            <ListItemButton
                            >
                                {group.name}
                            </ListItemButton>
                        </ListItem>
                    )
                })
            }
        </List>
    );
}

export default GroupList;
