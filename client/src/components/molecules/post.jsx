import { Link } from 'react-router-dom'
import { Avatar, Box, Card, CardActionArea, CardContent, CardHeader, Divider, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import { server } from "components/config"

const Post = (props) => {
    return (
        <Link to={'/home/' + props.id}>
            <Card
                sx={{
                    boxShadow: 2,
                    borderRadius: '15px',
                }}
            >
                <CardActionArea
                    sx={{
                        p: 2,
                    }}
                    onClick={props.togglePostViewModalOpen}
                >
                    <CardHeader
                        avatar={
                            <Avatar
                                src={server.host + "/images/icon/" + props["url_icon"]}
                            >
                                {props.name}
                            </Avatar>
                        }
                        title={props.name}
                        subheader={props.time}
                        sx={{
                            p: 0,
                        }}
                    />

                    <Divider
                        sx={{
                            my: 2,
                        }}
                    />

                    <CardContent
                        sx={{
                            p: 0,
                        }}
                    >
                        <Typography
                            sx={{
                                whiteSpace: "pre-wrap",
                            }}
                        >
                            {props["content"]}
                        </Typography>

                        {
                            props.url_post
                            &&
                            <Box
                                sx={{
                                    width: "100%",
                                    textAlign: "center",
                                }}
                            >
                                <Box
                                    component="img"
                                    src={server.host + "/images/post/" + props.url_post}
                                    sx={{
                                        border: 1,
                                        borderRadius: 3,
                                        borderColor: grey[500],
                                        maxWidth: "50%",
                                        maxHeight: "400px"
                                    }}
                                />
                            </Box>
                        }
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    )
}

export default Post
