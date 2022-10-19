import { Link } from 'react-router-dom'
import {
    Avatar,
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardHeader,
    Divider,
    Typography,
} from '@mui/material'

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
                        avatar={<Avatar>{props.name}</Avatar>}
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
                        <Typography>
                            {props.content}
                        </Typography>

                        {
                            props.url
                            &&
                            <Box
                                sx={{
                                    width: "100%",
                                    textAlign: "center",
                                }}
                            >
                                <Box
                                    component="img"
                                    src={"http://localhost:4000/images/post/" + props.url}
                                    sx={{
                                        border: 1,
                                        maxWidth: "60%",
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
