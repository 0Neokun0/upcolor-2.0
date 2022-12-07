import React from "react"
import { Avatar, Box, Card, Chip, Typography } from "@mui/material"
import { server } from "components/config"

const MainMenuProfileCard = (props) => {
    return (
        <Card
            sx={{
                p: 2,
                borderRadius: "15px",
                boxShadow: 5,
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
                    sx={{
                        border: "2px solid lightgray",
                    }}
                    src={server.host + "/images/icon/" + props.profile["image"]}
                />

                <Typography
                    fontWeight="bold"
                    textAlign={"center"}
                    width="100%"
                >
                    {props.profile["name"]}
                </Typography>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 2,
                }}
            >
                <Chip
                    label={props.profile["course_name"]}
                />
            </Box>
        </Card>
    )
}

export default MainMenuProfileCard
