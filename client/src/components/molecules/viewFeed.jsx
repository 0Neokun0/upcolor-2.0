import { Link } from "react-router-dom"
import { Avatar, Box, Divider, IconButton, Typography, Link as Mlink } from "@mui/material"
import CommentRoundedIcon from '@mui/icons-material/CommentRounded'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'
import { grey } from "@mui/material/colors"
import { server } from "components/config"

const ViewFeed = (props) => {
    return (
        <Box>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Avatar
                    src={server.host + "/images/icon/" + props.post["url_icon"]}
                >
                    {props.post["user_name"]}
                </Avatar>

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

                {
                    props.post["url_post"]
                    &&
                    <Box
                        sx={{
                            width: "100%",
                            textAlign: "center",
                        }}
                    >
                        <Box
                            component="img"
                            src={server.host + "/images/post/" + props.post["url_post"]}
                            sx={{
                                border: 1,
                                borderColor: grey[500],
                                maxWidth: "100%",
                                maxHeight: "500px"
                            }}
                        />
                    </Box>
                }
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
