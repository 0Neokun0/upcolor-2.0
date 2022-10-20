import React from 'react'
import {
    Avatar,
    Box,
    Card,
    Chip,
    Divider,
    Switch,
    Typography,
} from '@mui/material'

const MainMenuProfileCard = (props) => {
    return (
        <Card sx={{
            p: 2,
            borderRadius: '15px',
            boxShadow: 10,
            mb: 2
        }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Avatar />

                <Typography
                    fontWeight="bold"
                    textAlign={"center"}
                    width="100%"
                >
                    {/* {props.profile.user_name} */}
                    {/* {props["displayValue"]["user_name"]} */}
                </Typography>
            </Box>

            <Divider
                sx={{
                    my: 2,
                }}
            />

            <Box
                justifyContent={"space-between"}
                sx={{
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Chip
                    label="naoko"
                />
                <Switch />
            </Box>
        </Card>
    )
}

export default MainMenuProfileCard
