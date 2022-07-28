import { Post } from "components/molecules"
import { Box } from "@mui/material"

const Feed = (props) => {
    return (
        <Box>
            {
                props.posts.map((post) => {
                    return (
                        <Post
                            key={post.id}
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
