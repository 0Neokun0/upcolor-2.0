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
                        const date = new Date(post["created_at"])

                        const formattedDate =
                            date.getFullYear() +
                            "/" +
                            ("0" + (date.getMonth() + 1)).slice(-2) +
                            "/" +
                            ("0" + date.getDate()).slice(-2) +
                            " " +
                            ("0" + date.getHours()).slice(-2) +
                            ":" +
                            ("0" + date.getMinutes()).slice(-2) +
                            ":" +
                            ("0" + date.getSeconds()).slice(-2)

                        return (
                            <Post
                                key={post["post_id"]}
                                id={post["post_id"]}
                                name={post["user_name"]}
                                time={formattedDate}
                                content={post["post_text"]}
                                url_icon={post["url_icon"]}
                                url_post={post["url_post"]}
                                cnt={post["cnt"]}
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
