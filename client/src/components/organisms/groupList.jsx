import {
    Box,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Menu,
    Tooltip,
    Typography,
} from "@mui/material";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";

const GroupList = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <List
                disablePadding
                sx={{
                    "li + li": {
                        borderTop: 1,
                        borderColor: "lightgray",
                    },
                }}
            >
                {props.groups &&
                    props.groups.map((group) => {
                        return (
                            <div>
                                <ListItem
                                    disablePadding
                                    selected={
                                        props.selectGroupId ===
                                        group["group_id"]
                                    }
                                    key={group["group_id"]}
                                    secondaryAction={
                                        <Box
                                            sx={{
                                                "button + button": {
                                                    ml: 2,
                                                },
                                            }}
                                        >
                                            <IconButton
                                                aria-label="more"
                                                id="long-button"
                                                aria-controls={
                                                    open
                                                        ? "long-menu"
                                                        : undefined
                                                }
                                                aria-expanded={
                                                    open ? "true" : undefined
                                                }
                                                aria-haspopup="true"
                                                onClick={handleClick}
                                            >
                                                <MoreVertIcon />
                                            </IconButton>
                                            <Menu
                                                anchorEl={anchorEl}
                                                open={open}
                                                onClose={handleClose}
                                                PaperProps={{
                                                    style: {
                                                        maxHeight:200,
                                                        width: 40,
                                                        borderRadius: '10px'
                                                    },
                                                }}
                                            >
                                                {group["created_user_id"] ===
                                                    props["userId"] && (
                                                    <IconButton
                                                        edge="end"
                                                        onClick={() =>
                                                            props.handleGenerateInviteUrl(
                                                                group[
                                                                    "group_id"
                                                                ]
                                                            )
                                                        }
                                                    >
                                                        <Tooltip
                                                            title={
                                                                "招待urlコピー"
                                                            }
                                                            placement="right"
                                                        >
                                                            <PersonAddAltRoundedIcon />
                                                        </Tooltip>
                                                    </IconButton>
                                                )}

                                                {group["created_user_id"] ===
                                                    props["userId"] && (
                                                    <IconButton edge="end">
                                                        <Tooltip
                                                            title={
                                                                "グループを削除"
                                                            }
                                                            placement="right"
                                                        >
                                                            <DeleteForeverRoundedIcon />
                                                        </Tooltip>
                                                    </IconButton>
                                                )}

                                                <IconButton
                                                    edge="end"
                                                    onClick={() =>
                                                        props.handleLeaveGroup(
                                                            group["group_id"]
                                                        )
                                                    }
                                                >
                                                    <Tooltip
                                                        title={
                                                            "グループを抜ける"
                                                        }
                                                        placement="right"
                                                    >
                                                        <ExitToAppRoundedIcon />
                                                    </Tooltip>
                                                </IconButton>
                                            </Menu>
                                        </Box>
                                    }
                                >
                                    <ListItemButton
                                        onClick={() =>
                                            props.handleLeaveGroup(
                                                group["group_id"]
                                            )
                                        }
                                    >
                                        <ListItemText>
                                            <Typography variant="h6">
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
                            </div>
                        );
                    })}
            </List>
        </>
    );
};

export default GroupList;
