import { Link } from "react-router-dom"
import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListSubheader } from "@mui/material"
import RecentActorsRoundedIcon from '@mui/icons-material/RecentActorsRounded'
import { server } from "components/config"

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
                        fontWeight: 600,
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                    }}>
                        <ListItemIcon>
                            <RecentActorsRoundedIcon  />
                        </ListItemIcon>
                        メンバー一覧
                </Box>
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
                                    {/* <ListItemAvatar
                                        src={server.host + "/images/icon/" + member.image}
                                    /> */}
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