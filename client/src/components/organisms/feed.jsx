import { Post } from "components/molecules"
import { Box } from "@mui/material"
import { useOutletContext } from "react-router-dom";

const Feed = () => {
    const posts = useOutletContext()["posts"]

    return (
        <Box>
            {
                posts.map((post) => {
                    return (
                        <Post
                            key={post.id}
                            id={post.id}
                            name={post.name}
                            time={post.time}
                            content={post.content}
                        />
                    )
                })
            }
        </Box>
    );
}

export default Feed;
