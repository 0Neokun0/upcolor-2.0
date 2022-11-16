import { Link } from "react-router-dom"
import { List, ListItem, ListItemButton, Typography } from "@mui/material"

const FollowUsers = (props) => {
    return (
        props["lists"]
            ?
            <List
                disablePadding
            >
                {
                    props["lists"].map((list) => {
                        return (
                            <ListItem
                                key={list["user_id"]}
                                disablePadding
                            >
                                <ListItemButton
                                    component={Link}
                                    to={"/profile/" + list["user_id"]}
                                >
                                    {list["user_name"]}
                                </ListItemButton>
                            </ListItem>
                        )
                    })
                }
            </List>

            :
            <Typography>
                ユーザーが見つかりません
            </Typography>
    )
}

export default FollowUsers