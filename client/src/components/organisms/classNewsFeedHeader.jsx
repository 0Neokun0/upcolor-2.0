import { server } from 'components/config'
import { Avatar, Box, Card, IconButton, Typography } from "@mui/material"
import GroupRoundedIcon from '@mui/icons-material/GroupRounded'

const ClassNewsFeedHeader = (props) => {
    return (
        <Card
            sx={{
                borderRadius: "15px",
                boxShadow: 3,
            }}
        >
            <Box
                sx={{
                    position: "relative",
                    "img": {
                        display: "block",
                    },
                }}
            >
                <Box
                    component="img"
                    src="https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?cs=srgb&dl=pexels-pixabay-256395.jpg&fm=jpg"
                    sx={{
                        width: "100%",
                        height: 100,
                        objectFit: "cover",
                    }}
                />

                <Typography
                    variant="h3"
                    sx={{
                        position: "absolute",
                        transform: "translate(-50%,-50%)",
                        top: "50%",
                        left: "50%",
                        backgroundColor: "white",
                        borderRadius: "10px",
                        px: 2,
                        wordBreak: "keep-all",
                        border: 1,
                    }}
                >
                    {props["enterClassNewsRoom"]["class_name"]}
                </Typography>
            </Box>

            <Box
                sx={{
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Avatar
                    alt={props["enterClassNewsRoom"]["name"]}
                    src={`${server.host}/images/icon/${props["enterClassNewsRoom"]["image_url"]}`}
                    sx={{
                        border: "2px solid lightgray",
                        borderColor: "divider",
                    }}
                />

                <Typography
                    sx={{
                        ml: 1,
                        fontWeight: "bold",
                    }}
                >
                    {props["enterClassNewsRoom"]["user_name"]}
                </Typography>

                <Typography
                    fontWeight="bold"
                    sx={{
                        ml: "auto",
                    }}
                >
                    クラスID: {props["classId"]}
                </Typography>

                {/* <IconButton>
                    <GroupRoundedIcon />
                </IconButton> */}
            </Box>
        </Card>
    )
}

export default ClassNewsFeedHeader