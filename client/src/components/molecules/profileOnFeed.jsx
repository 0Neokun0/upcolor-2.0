import React from 'react'
import { Avatar, Box, Card, CardContent, Typography } from "@mui/material"
const ProfileOnFeed = (props) => {
    return (
        <Card sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h6">
                        {props.user.name}
                    </Typography>

                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {props.user.course}
                    </Typography>
                </CardContent>

                <Box sx={{ display: 'flex', alignItems: 'center', p: 1, ml: 2 }}>
                    <Avatar
                        sx={{
                            border: "2px solid lightgray",
                        }}/>
                </Box>
            </Box>
        </Card>
    )
}

export default ProfileOnFeed
