import { Post } from "components/molecules"
import { Box } from "@mui/material"
import { useOutletContext } from "react-router-dom";

const Feed = () => {
    const posts = useOutletContext()["posts"]
    console.log(posts)

    return (
        <Box>
            {
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
            }
        </Box>
    );
}

export default Feed;
