import { Link } from "react-router-dom"
import { List, ListItem, ListItemButton, ListSubheader } from "@mui/material"

const GroupMembers = (props) => {
    return (
        props["members"]
            ?
            <List
                disablePadding
                sx={{
                    "li + li": {
                        borderTop: 1,
                        borderColor: "lightgray",
                    }
                }}
            >
                <ListSubheader
                    sx={{
                        p: 0,
                        textAlign: "center",
                    }}
                >
                    メンバー一覧
                </ListSubheader>

                {
                    props["members"].map((member) => {
                        return (
                            <ListItem
                                key={member["user_id"]}
                                disableGutters
                                disablePadding
                            >
                                <ListItemButton
                                    component={Link}
                                    to={"/profile/" + member["user_id"]}
                                >
                                    {member["user_name"]}
                                </ListItemButton>
                            </ListItem>
                        )
                    })
                }
            </List>

            :
            <p>取得中</p>
    )
}

export default GroupMembers