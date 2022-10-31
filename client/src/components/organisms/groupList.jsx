import { Box, IconButton, List, ListItem, ListItemButton, ListItemText, Menu, MenuItem, Snackbar, Tooltip, Typography } from "@mui/material"
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded'

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
                                            onClick={(e) => props["setMenuOpen"](e.currentTarget)}
                                        >
                                            <MoreVertRoundedIcon />
                                        </IconButton>

                                        <Menu
                                            anchorEl={props["menuOpen"]}
                                            open={Boolean(props["menuOpen"])}
                                            onClose={() => props["setMenuOpen"](null)}
                                        >
                                            <MenuItem
                                                onClick={() => props["handleGenerateInviteUrl"](group["group_id"])}
                                            >
                                                招待urlコピー
                                            </MenuItem>

                                            <MenuItem
                                                onClick={() => props["handleLeaveGroup"](group["group_id"])}
                                            >
                                                グループを抜ける
                                            </MenuItem>

                                            <MenuItem>
                                                ##グループを削除
                                            </MenuItem>
                                        </Menu>
                                    </>
                                }
                            >
                                <ListItemButton
                                    onClick={() => props["setSelectGroupId"](group["group_id"])}
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
                    <p>情報なし</p>
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
