import React from 'react'
import { Avatar, Box, Card, Chip, Divider, Switch, Typography } from '@mui/material'
// import { server } from 'components/config'

const MainMenuCompanyCard = (props) => {
    return (
        <Card sx={{
            p: 2,
            maxWidth: 400,
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
                <Avatar
                    // src={server.host + "/images/icon/" + props.company.image}
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
                justifyContent={"space-between"}
                sx={{
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Chip
                    sx={{
                        p: 1,
                        fontWeight: 600,
                    }}
                    label={"本社" + " : " + props.company["address"]}
                />
                <Switch />
            </Box>
        </Card>
    )
}

export default MainMenuCompanyCard