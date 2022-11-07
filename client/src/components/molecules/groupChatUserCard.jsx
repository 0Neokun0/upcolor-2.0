import { Avatar, Box, Card, Stack, Typography } from '@mui/material'

const GroupChatUserCard = (props) => {
    return (
        <>
            <Card
                sx={{
                    m: 1,
                    borderRadius: '25px',
                    overflow: 'hidden',
                    boxShadow: 3,
                    bgcolor: '#f5f5f5',
                }}
            >
                <Box
                    sx={{
                        p: 1,
                        m: 1,
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                    }}
                >
                    <Avatar
                        sx={{
                            mr: 2,
                        }}
                        src={props.image}
                    />
                    <Stack
                        spacing={1}
                        sx={{
                            overflow: 'hidden',
                        }}
                    >
                        <Typography
                            sx={{
                                fontWeight: 'bold'
                            }}
                        >
                            {/* {props.user.name} */}
                            username
                        </Typography>

                        <Typography>
                            {/* {props.user.course} */}
                            course
                        </Typography>
                    </Stack>
                </Box>
            </Card>

        </>
    )
}

export default GroupChatUserCard