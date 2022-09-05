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
            {   props.groups
                &&
                props.groups.map((group) => {
                    return (
                        <ListItem
                            disablePadding
                            selected={props.selectGroupId === group["group_id"]}
                            key={group["group_id"]}
                        >
                            <ListItemButton
                                onClick={
                                    () => props.setSelectGroupId(group["group_id"])
                                }
                            >
                                <ListItemText>
                                    <Typography
                                        variant="h6"
                                    >
                                        {group["group_name"]}
                                    </Typography>

                                    {/* 最終投稿とか出したい */}
                                    {/* <Typography
                                        variant="body2"
                                        sx={{
                                            ml: 2,
                                            color: "gray",
                                        }}
                                    >
                                        {group.latest}
                                        :
                                        {group.time}
                                    </Typography> */}
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
