import { Post } from "components/molecules"
import { Box } from "@mui/material"

const Feed = (props) => {
    console.log(props.posts)
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
