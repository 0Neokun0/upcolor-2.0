import { MoreVert } from "@material-ui/icons"
import { Avatar, Box, IconButton, Typography } from "@mui/material"

const ClassRoomAnnouncementCard = () => {
    return (
        <Box sx={{
            width: '100%',
            p: 1,
            borderRadius: '25px',
            border: 0.5,
            boxShadow: 3,
            mb: 2,
        }}
        >
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
            >
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}
                >
                    <Avatar sx={{
                        height: '50px',
                        width: '50px',
                    }}
                    />

                    <Typography sx={{
                        color: '#424242',
                        fontWeight: 600,
                        m: 1,
                    }}
                    >
                        {/* {name} */}
                        neokun
                    </Typography>
                    <Typography sx={{
                        color: '#424242',
                        fontSize: '14px',
                        mt: 1,
                    }}
                    >
                        {/* {date} */}
                        04 / 10 / 2050
                    </Typography>
                </Box>

                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </Box>
            </Box>
            <Typography sx={{
                color: '#424242',
                mt: '15px',
            }}
            >
                {/* {announcementContent} */}
                no school today.
            </Typography>

        </Box>
    )
}

export default ClassRoomAnnouncementCard
