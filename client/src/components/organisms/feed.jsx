import { Post } from "components/molecules"
import { Box, Typography } from "@mui/material"
import { useOutletContext } from "react-router-dom"

const Feed = () => {
    const posts = useOutletContext()["posts"]

    return (
        <Box
            sx={{
                "a": {
                    display: "block",
                },
                "a + a": {
                    mt: 2,
                },
            }}
        >
            {
                posts.length
                    ?
                    posts.map((post) => {
                        return (
                            <Post
                                key={post["post_id"]}
                                id={post["post_id"]}
                                name={post["user_name"]}
                                time={post["created_at"]}
                                content={post["post_text"]}
                            />
                        )
                    })
                    :
                    <Typography>
                        投稿がありません
                    </Typography>
            }
        </Box>
    )
}

export default Feed
