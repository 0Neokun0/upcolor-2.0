import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Checkbox,
    IconButton,
    Typography,
} from "@mui/material";

const Post = (props) => {
    return (
        <Card sx={{ margin: 5, boxShadow: 3 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                        name
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                }
                title={props.title}
                subheader={props.subTitle}
            />

            <CardMedia
                component="img"
                height="20%"
                image="https://pbs.twimg.com/media/FVaSI4nWQBQBYe7.png"
                alt="Volarant"
            />

            <CardContent>
                <Typography variant="body1" color="text.secondary">
                    {props.text}
                </Typography>
            </CardContent>

            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Checkbox
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite sx={{ color: "green" }} />}
                    />
                </IconButton>

                <IconButton aria-label="share">
                    <Share />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default Post;
