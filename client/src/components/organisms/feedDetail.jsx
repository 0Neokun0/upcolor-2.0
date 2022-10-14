import { useOutletContext } from "react-router-dom"
import { Box, Typography } from "@mui/material"
import { Post, ViewFeed } from "components/molecules"

const FeedDetail = () => {
    const post = useOutletContext()["post"]
    const replys = useOutletContext()["replys"]
    const toggleReplyModalOpen = useOutletContext()["toggleReplyModalOpen"]

    return (
        <>
            {
                post
                &&
                <ViewFeed
                    post={post}
                    toggleReplyModalOpen={toggleReplyModalOpen}
                />
            }

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
                    replys
                        ?
                        replys.map((reply) => {
                            return (
                                <Post
                                    key={reply["post_id"]}
                                    id={reply["post_id"]}
                                    name={reply["user_name"]}
                                    time={reply["created_at"]}
                                    content={reply["post_text"]}
                                />
                            )
                        })

                        :
                        <Typography>
                            返信がありません
                        </Typography>
                }
            </Box>
        </>
    )
}

export default FeedDetail
