import { IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, Snackbar, Typography } from "@mui/material"

import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded'
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import GroupRemoveIcon from '@mui/icons-material/GroupRemove';

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
                    ?
                    props["groups"].map((group) => {
                        return (
                            <ListItem
                                key={group["group_id"]}
                                selected={group["group_id"] === props["selectGroupId"]}
                                disablePadding
                                secondaryAction={
                                    <>
                                        <IconButton
                                            onClick={(e) => {
                                                props["setMenuOpen"](e.currentTarget)
                                                props["setMenuId"](group["group_id"])
                                            }}
                                        >
                                            <MoreVertRoundedIcon />
                                        </IconButton>

                                        <Menu
                                            anchorEl={props["menuOpen"]}
                                            open={Boolean(group["group_id"] === props["menuId"])}
                                            onClose={() => props["setMenuId"](null)}
                                        >
                                            <MenuItem
                                                onClick={() => props["handleGenerateInviteUrl"](group["group_id"])}
                                            >
                                                <ListItemIcon>
                                                    <GroupAddIcon fontSize="small" />
                                                </ListItemIcon>

                                                <ListItemText>
                                                    招待urlコピー
                                                </ListItemText>

                                            </MenuItem>

                                            <MenuItem
                                                onClick={() => props["handleLeaveGroup"](group["group_id"])}
                                            >
                                                <ListItemIcon>
                                                    <PersonRemoveIcon fontSize="small" />
                                                </ListItemIcon>

                                                <ListItemText>
                                                    グループを抜ける
                                                </ListItemText>

                                            </MenuItem>

                                            <MenuItem>
                                                <ListItemIcon>
                                                    <GroupRemoveIcon fontSize="small" />
                                                </ListItemIcon>

                                                <ListItemText>
                                                    グループを削除
                                                </ListItemText>

                                            </MenuItem>
                                        </Menu>
                                    </>
                                }
                            >
                                <ListItemButton
                                    onClick={() => props["groupClick"](group["group_id"])}
                                >
                                    <Typography
                                        variant="h6"
                                    >
                                        {group["group_name"]}
                                    </Typography>

                                </ListItemButton>
                            </ListItem>
                        )
                    })
                    :
                    <p>参加しているグループが見つかりません</p>
            }

            {/* コピー通知 */}
            <Snackbar
                open={props["copyOpen"]}
                onClose={() => props["setCopyOpen"](false)}
                message="コピー完了"
                autoHideDuration={8000}
            />
            {/* コピー通知 */}
        </List >
    )
}

export default GroupList
