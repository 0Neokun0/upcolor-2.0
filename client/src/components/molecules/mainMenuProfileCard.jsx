import React from 'react'
import {
    Avatar,
    Box,
    Card,
    Chip,
    Divider,
    Stack,
    styled,
    Switch,
    Typography,
} from '@mui/material'


const CardItems = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1.5),
    alignContent: 'center',
}))

const MainMenuProfileCard = (props) => {
    return (
        <>
            <Card sx={{
                textAlign: 'center',
                p: 1,
                borderRadius: '15px',
                boxShadow: 10,
                mb: 2
            }}
            >
                <Box
                    sx={{
                        p: 2,
                        display: 'flex'
                    }}
                >
                    <Stack
                        direction="row"
                        spacing={2}
                    >

                        <CardItems>
                            <Avatar />
                        </CardItems>

                        <CardItems
                            maxWidth={100}
                        >
                            <Typography
                                overflow="hidden"
                                fontWeight={700}
                            >
                                {props.profile.user_name}
                            </Typography>
                        </CardItems>

                    </Stack>
                </Box>
                <Divider />
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{
                        px: 2,
                        py: 1,
                        bgcolor: 'background.default'
                    }}
                >
                    <Switch />
                    <Chip
                        label="naoko"
                    />
                </Stack>
            </Card>
        </>
    )
}

export default MainMenuProfileCard
