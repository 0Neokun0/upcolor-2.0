import { Avatar, Card, CardActionArea, CardContent, CardHeader } from "@mui/material"

const Post = (props) => {
    return (
        <Card
            variant="outlined"
            sx={{
                mt: 2,
                boxShadow: 0,
            }}
        >
            <CardActionArea>
                <CardHeader
                    avatar={
                        <Avatar>
                            {props.name}
                        </Avatar>
                    }
                    title={props.name}
                    subheader={props.time}
                />

                <CardContent>
                    {props.content}
                </CardContent>
            </CardActionArea>


        </Card>
    );
}

export default Post;
