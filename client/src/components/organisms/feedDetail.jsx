import { useOutletContext } from "react-router-dom"
import { Box, Typography } from "@mui/material"
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
            {
                post
                &&
                <ViewFeed
                    post={post}
                />
            }

            {
                replys
                ?
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
                
                :
                <Typography>
                    返信がありません
                </Typography>
            }
        </Box>
    );
}

export default FeedDetail
