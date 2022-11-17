import { Avatar, Box, Card, CardMedia, Chip, Link, Typography } from "@mui/material"
import { server } from 'components/config'

const ClassNewsFeedHeader = (props) => {
    return (
        <Card
            sx={{
                p: 2,
                borderRadius: "15px",
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
                        borderRadius: "15px",
                    }}
                    component="img"
                    src="https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?cs=srgb&dl=pexels-pixabay-256395.jpg&fm=jpg"
                />
                <Box
                    sx={{
                        bgcolor: 'white',
                        p:1,
                        position: 'absolute',
                        borderRadius: "15px",
                        color: 'white',
                        top: 8,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        boxShadow: '0 0 2px 5px #bdbdbd',
                    }}
                >
                    <Link
                        underline="hover"
                        href="/classnews"
                        variant="h3"
                        sx={{
                            fontSize: 50,
                            color: "black"
                        }}
                    >
                        {props["enterClassNewsRoom"]["class_name"]}
                    </Link>

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
                                src={server.host + "/images/icon/" + props.profile.image}
                            />
                        }
                        label={props.profile["name"]}
                        variant="outlined"
                    />
                </Box>
            </Box>
        </Card>
    )
}

export default ClassNewsFeedHeader