import { Box, IconButton, List, ListItem, ListItemButton, ListItemText, Tooltip, Typography } from "@mui/material"
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded'
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded'

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
                props.groups
                &&
                props.groups.map((group) => {
                    return (
                        <ListItem
                            disablePadding
                            selected={props.selectGroupId === group["group_id"]}
                            key={group["group_id"]}
                            secondaryAction={
                                <Box
                                    sx={{
                                        "button + button": {
                                            ml: 2,
                                        }
                                    }}
                                >
                                    {
                                        group["created_user_id"] === props["userId"]
                                        &&
                                        <IconButton
                                            edge="end"
                                            onClick={() => props.handleGenerateInviteUrl(group["group_id"])}
                                        >
                                            <Tooltip
                                                title={"招待urlコピー"}
                                                placement="bottom"
                                            >
                                                <PersonAddAltRoundedIcon />
                                            </Tooltip>
                                        </IconButton>
                                    }

                                    {
                                        group["created_user_id"] === props["userId"]
                                        &&
                                        <IconButton
                                            edge="end"
                                        >
                                            <Tooltip
                                                title={"グループを削除"}
                                                placement="bottom"
                                            >
                                                <DeleteForeverRoundedIcon />
                                            </Tooltip>
                                        </IconButton>
                                    }

                                    <IconButton
                                        edge="end"
                                        onClick={() => props.handleLeaveGroup(group["group_id"])}
                                    >
                                        <Tooltip
                                            title={"グループを抜ける"}
                                            placement="bottom"
                                        >
                                            <ExitToAppRoundedIcon />
                                        </Tooltip>
                                    </IconButton>
                                </Box>
                            }
                        >
                            <ListItemButton
                                onClick={
                                    () => props.handleLeaveGroup(group["group_id"])
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
        </List >
    );
}

export default GroupList;
