import { Avatar, Box, Divider, IconButton, Typography, Link as Mlink } from "@mui/material"
import CommentRoundedIcon from '@mui/icons-material/CommentRounded'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'
import { Link } from "react-router-dom"

const ViewFeed = (props) => {
    return (
        <Box>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Avatar />

                <Mlink
                    component={Link}
                    to={"/profile/" + props.post["post_user_id"]}
                    fontWeight={"bold"}
                    sx={{
                        ml: 1,
                    }}
                >
                    {props.post["user_name"]}
                </Mlink>
            </Box>

            <Box
                sx={{
                    width: "80%",
                    m: "auto",
                    mt: 1,
                }}
            >
                {props.post["post_text"]}
            </Box>

            <Typography
                variant="subtitle2"
                textAlign={"end"}
                sx={{
                    mt: 2,
                }}
            >
                {props.post["created_at"]}
            </Typography>

            <Divider />

            <Box
                sx={{
                    width: "80%",
                    m: "auto",
                    display: "flex",
                    justifyContent: "space-between"
                }}
            >
                <IconButton
                    onClick={props.toggleReplyModalOpen}
                >
                    <CommentRoundedIcon />
                </IconButton>

                <IconButton>
                    <FavoriteRoundedIcon />
                </IconButton>
            </Box>
        </Box>
    )
}

export default ViewFeed
