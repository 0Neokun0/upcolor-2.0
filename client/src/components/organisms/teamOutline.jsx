import { Link } from "react-router-dom"
import { Box, Divider, IconButton, List, ListItemButton, Popover, Tooltip, Typography } from "@mui/material"
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded'
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded'

const TeamOutline = (props) => {
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        wordBreak: "break-word",
                    }}
                >
                    {props["team"]["teamInfo"]["team_work_name"]}
                </Typography>

                {
                    props["auth"]
                    &&
                    <Box>
                        <Tooltip
                            title="チーム設定の変更"
                        >
                            <IconButton
                                color="primary"
                                onClick={() => props["setSettingToggle"](true)}
                            >
                                <SettingsRoundedIcon />
                            </IconButton>
                        </Tooltip>
                    </Box>
                }
            </Box>

            <Divider
                sx={{
                    my: 2,
                }}
            />

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
            >
                <Typography
                    fontWeight="bold"
                    sx={{
                        m: "auto"
                    }}
                >
                    {props["team"]["teamInfo"]["team_name"]}
                </Typography>

                {
                    props["auth"]
                    &&
                    <Box>
                        <Tooltip
                            title="招待"
                        >
                            <IconButton
                                color="primary"
                                onClick={(e) => props["genInviteUrl"](e)}
                            >
                                <PersonAddAltRoundedIcon />
                            </IconButton>
                        </Tooltip>

                        {/* <<< コピー通知 */}
                        <Popover
                            open={Boolean(props["togglePopover"])}
                            anchorEl={props["togglePopover"]}
                            onClose={() => props["setTogglePopover"](null)}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                        >
                            <Typography
                                sx={{
                                    p: 1,
                                }}
                            >
                                コピー完了
                            </Typography>
                        </Popover>
                        {/* コピー通知 >>> */}
                    </Box>
                }
            </Box>

            <List
                disablePadding
            >
                {
                    props["team"]["teamMembers"].map((member) => {
                        return (
                            <ListItemButton
                                key={member["user_id"]}
                                component={Link}
                                to={"/profile/" + member["user_id"]}
                            >
                                {member["user_name"]}
                            </ListItemButton>
                        )
                    })
                }
            </List>
        </>
    )
}

export default TeamOutline