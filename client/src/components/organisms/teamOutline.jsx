import { useState } from "react"
import { Box, Divider, IconButton, List, ListItemButton, Tooltip, Typography } from "@mui/material"
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded'

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
            </Box>

            <Divider
                sx={{
                    my: 2,
                }}
            />

            <Typography
                textAlign="center"
                fontWeight="bold"
            >
                {props["team"]["teamInfo"]["team_name"]}
            </Typography>

            <List
                disablePadding
            >
                {
                    props["team"]["teamMembers"].map((member) => {
                        return (
                            <ListItemButton
                                key={member["user_id"]}
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