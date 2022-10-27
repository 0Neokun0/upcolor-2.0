import { SendOutlined } from "@material-ui/icons"
import { Avatar, Box, Card, CardMedia, Chip, IconButton, InputBase, Typography } from "@mui/material"
import ClassRoomAnnouncementCard from "components/molecules/classRoomAnnouncementCard"

const ClassRoomFeedHeader = (props) => {
    return (
        <Card
            sx={{
                m: 2,
                p: 2,
                borderRadius: '10px',
                boxShadow: 3,
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                }}
            >
                <CardMedia
                    sx={{
                        height: 100,
                        borderRadius: 2,
                    }}
                    component="img"
                    src={props.classRoomTitleImage}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        color: 'white',
                        top: 8,
                        left: '50%',
                        transform: 'translateX(-50%)',
                    }}
                >
                    <Typography variant="h3">
                        {props.enterClassRoom["class_name"]}
                    </Typography>

                </Box>
                <Box
                    sx={{
                        m: 1,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    <Chip
                        avatar=
                        {
                            <Avatar
                                alt="userProfileAvatar"
                                src="/static/images/avatar/1.jpg"
                            />
                        }
                        label="Username"
                        variant="outlined"
                    />
                </Box>
            </Box>
        </Card>
    )
}

export default ClassRoomFeedHeader
