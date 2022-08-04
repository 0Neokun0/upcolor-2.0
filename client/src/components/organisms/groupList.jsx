import { List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material"

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
                                <ListItemText>
                                    <Typography
                                        variant="h6"
                                    >
                                        {group.name}
                                    </Typography>
    
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            ml: 2,
                                            color: "gray",
                                        }}
                                    >
                                        {group.latest}
                                        :
                                        {group.time}
                                    </Typography>
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                    )
                })
            }
        </List>
    );
}

export default GroupList;
