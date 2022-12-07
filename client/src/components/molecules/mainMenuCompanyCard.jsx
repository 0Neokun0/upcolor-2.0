import React from 'react'
import { Avatar, Box, Card, Chip, Divider, Typography } from '@mui/material'

import { server } from 'components/config'

const MainMenuCompanyCard = (props) => {
    return (
        <Card
            sx={{
                p: 2,
                borderRadius: '15px',
                boxShadow: 5,
                mb: 2
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Avatar
                    src={server.host + "/images/icon/" + props.company["image"]}
                />

                <Typography
                    fontWeight="bold"
                    textAlign={"center"}
                    width="100%"
                >
                    {props.company["company_name"]}
                </Typography>
            </Box>

            <Divider
                sx={{
                    my: 2,
                }}
            />
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 2,
                }}
            >
                <Chip
                    sx={{
                        p: 1,
                        fontWeight: 600,
                    }}
                    label={"本社" + " : " + props.company["address"]}
                />
            </Box>
        </Card>
    )
}

export default MainMenuCompanyCard