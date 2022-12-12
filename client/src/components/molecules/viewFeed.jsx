import { Link } from "react-router-dom"
import { server } from "components/config"
import { Avatar, Box, Divider, IconButton, Typography, Link as Mlink, Card, Tooltip } from "@mui/material"
import CommentRoundedIcon from '@mui/icons-material/CommentRounded'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded'
import { grey, pink, red } from "@mui/material/colors"

const ViewFeed = (props) => {
    return (
        <>
            <Tooltip
                title="戻る"
                placement="right"
            >
                <IconButton
                    onClick={props["backPage"]}
                >
                    <KeyboardBackspaceRoundedIcon />
                </IconButton>
            </Tooltip>

            <Box
                sx={{
                    mt: 2,
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Avatar
                        sx={{
                            border: "2px solid lightgray",
                        }}
                        src={server.host + "/images/icon/" + props.post["url_icon"]}
                    >
                        {props.post["user_name"]}
                    </Avatar>

                    <Mlink
                        component={Link}
                        underline="hover"
                        color="inherit"
                        to={"/profile/" + props.post["post_user_id"]}
                        fontWeight={"bold"}
                        sx={{
                            ml: 1,
                        }}
                    >
                        {props.post["user_name"]}
                    </Mlink>

                    {
                        !!props.post["self"]
                        &&
                        <IconButton
                            sx={{
                                color: red[300],
                                ml: "auto",
                            }}
                            onClick={() => props["deletePost"](props.post["post_id"])}
                        >
                            <DeleteForeverRoundedIcon />
                        </IconButton>
                    }
                </Box>

                <Divider
                    sx={{
                        my: 2,
                    }}
                />

                <Box
                    sx={{
                        width: "80%",
                        m: "auto",
                    }}
                >
                    <Typography
                        sx={{
                            whiteSpace: "pre-wrap",
                        }}
                    >
                        {props.post["post_text"]}
                    </Typography>

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
                                    borderRadius: 3,
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
                        color: "gray",
                    }}
                >
                    {props.post["created_at"]}
                </Typography>

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

                    <IconButton
                        sx={
                            props["like"]
                                ?
                                {
                                    color: pink[400],
                                }
                                :
                                {}
                        }
                        onClick={() => props["handleLike"](props["post"]["post_id"])}
                    >
                        <FavoriteRoundedIcon />
                    </IconButton>
                </Box>
            </Box>

            <Divider
                sx={{
                    my: 2,
                }}
            />
        </>
    )
}

export default ViewFeed
