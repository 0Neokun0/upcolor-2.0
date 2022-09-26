import { Link } from "react-router-dom"
import { Avatar, Box, Card, CardActionArea, CardContent, CardHeader, Divider } from "@mui/material"

const Post = (props) => {
    return (
        <Box flex={4} p={{ xs: 1, md: 2 }} >
            <Link to={"/home/" + props.id}>
                <Card
                    variant="outlined"
                    sx={{
                        mt: 2,
                        p: 2,
                        boxShadow: 1,
                    }}
                >
                    <CardActionArea onClick={props.togglePostViewModalOpen}>
                        <CardHeader
                            avatar={
                                <Avatar>
                                    {props.name}
                                </Avatar>
                            }
                            title={props.name}
                            subheader={props.time}
                        />
                        <Divider/>

                        <CardContent>
                            {props.content}
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Link>
        </Box>
    );
}

export default Post;
