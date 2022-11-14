import React from "react"
import {
    Avatar,
    Box,
    Card,
    Chip,
    Divider,
    Switch,
    Typography,
} from "@mui/material"
import { server } from "components/config"

const MainMenuProfileCard = (props) => {
    return (
        <Card
            sx={{
                p: 2,
                borderRadius: "15px",
                boxShadow: 10,
                mb: 2,
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Avatar
                    src={server.host + "/images/icon/" + props.profile.image}
                />

                <Typography fontWeight="bold" textAlign={"center"} width="100%">
                    {props.profile.name}
                </Typography>
            </Box>
            <Divider
                sx={{
                    my: 2,
                }}
            />
            ↓*** 要検討 ***↓
            <Box
                justifyContent={"space-between"}
                sx={{
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Chip label="naoko" />
                <Switch />
            </Box>
        </Card>
    )
}

export default MainMenuProfileCard
