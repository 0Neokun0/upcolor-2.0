import { Avatar, Box, Divider, IconButton, Typography } from "@mui/material"
import CommentRoundedIcon from '@mui/icons-material/CommentRounded'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'

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

                <Typography
                    fontWeight={"bold"}
                    sx={{
                        ml: 1,
                    }}
                >
                    {props.name}
                </Typography>
            </Box>

            <Box
                sx={{
                    width: "80%",
                    m: "auto",
                    mt: 1,
                }}
            >
                {props.content}
            </Box>

            <Typography
                variant="subtitle2"
                textAlign={"end"}
                sx={{
                    mt: 2,
                }}
            >
                {props.time}
            </Typography>

            <Divider />

            <Box
                sx={{
                    width: "80%",
                    m: "auto",
                    my: 1,
                    display: "flex",
                    justifyContent: "space-between"
                }}
            >
                <IconButton>
                    <CommentRoundedIcon />
                </IconButton>

                <IconButton>
                    <FavoriteRoundedIcon />
                </IconButton>
            </Box>

            <Divider />
        </Box>
    );
}

export default ViewFeed;