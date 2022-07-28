import { useOutletContext } from "react-router-dom"
import { Box } from "@mui/material"
import { Post, ViewFeed } from "components/molecules"

const FeedDetail = () => {
    const post = useOutletContext()["post"]
    const replys = useOutletContext()["replys"]

    return (
        <Box
            sx={{
                mt: 2,
            }}
        >
            <ViewFeed
                name={post.name}
                time={post.time}
                content={post.content}
            />

            {
                replys.map((reply) => {
                    return (
                        <Post
                            key={reply.id}
                            id={reply.id}
                            name={reply.name}
                            time={reply.time}
                            content={reply.content}
                        />
                    )
                })
            }
        </Box>
    );
}

export default FeedDetail
