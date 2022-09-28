import { useOutletContext } from "react-router-dom"
import { Card, Typography } from "@mui/material"
import { Post, ViewFeed } from "components/molecules"

const FeedDetail = () => {
    const post = useOutletContext()["post"]
    const replys = useOutletContext()["replys"]
    const toggleReplyModalOpen = useOutletContext()["toggleReplyModalOpen"]

    return (
        <Card
            sx={{
                p: 3,
                borderRadius: '15px',
                mt: 2,
                boxShadow: 3
            }}
        >
            {
                post
                &&
                <ViewFeed
                    post={post}
                    toggleReplyModalOpen={toggleReplyModalOpen}
                />
            }

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

                    <Typography sx={{ p: 2, mt: 2}}>
                        返信がありません
                    </Typography>

            }
        </Card>
    );
}

export default FeedDetail
