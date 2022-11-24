import { Link } from "react-router-dom"
import { Box, List, ListItem, ListItemButton, Typography } from "@mui/material"

const FollowUsers = (props) => {
    return (
        <Box
            hidden={props["index"] !== props["value"]}
        >
            {
                props["lists"]
                    ?
                    <List
                        disablePadding
                        sx={{
                            "li + li": {
                                borderTop: 1,
                                borderColor: "divider",
                            }
                        }}
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
            }
        </Box>
    )
}

export default FollowUsers