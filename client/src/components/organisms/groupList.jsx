import { Box, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListSubheader, Menu, MenuItem, Snackbar, Typography } from "@mui/material"
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded'
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded'
import AddLinkRoundedIcon from '@mui/icons-material/AddLinkRounded'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded'

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
                            <ViewListRoundedIcon />
                        </ListItemIcon>
                        グループリスト
                </Box>
            </ListSubheader>
            {
                props.groups
                    ?
                    props["groups"].map((group) => {
                        return (
                            <ListItem
                                key={group["group_id"]}
                                selected={group["group_id"] === props["selectGroupId"]}
                                disableGutters
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
                                            PaperProps={{
                                                sx: {
                                                    borderRadius: 3,
                                                },
                                            }}
                                            anchorEl={props["menuOpen"]}
                                            open={Boolean(group["group_id"] === props["menuId"])}
                                            onClose={() => props["setMenuId"](null)}
                                        >
                                            <MenuItem
                                                onClick={() => props["handleGenerateInviteUrl"](group["group_id"])}
                                            >
                                                <ListItemIcon>
                                                    <AddLinkRoundedIcon fontSize="small" />
                                                </ListItemIcon>
                                                招待urlコピー
                                            </MenuItem>

                                            <MenuItem
                                                onClick={() => props["handleLeaveGroup"](group["group_id"])}
                                            >
                                                <ListItemIcon>
                                                    <LogoutRoundedIcon  fontSize="small" />
                                                </ListItemIcon>
                                                グループを抜ける
                                            </MenuItem>

                                            <MenuItem>
                                            <ListItemIcon>
                                                    <DeleteRoundedIcon fontSize="small" />
                                                </ListItemIcon>
                                                グループを削除
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
