import { useOutletContext } from "react-router-dom"
import { Box, Typography } from "@mui/material"
import { Post, ViewFeed } from "components/molecules"

const FeedDetail = () => {
    const post = useOutletContext()["post"]
    const replys = useOutletContext()["replys"]
    const toggleReplyModalOpen = useOutletContext()["toggleReplyModalOpen"]
    const like = useOutletContext()["like"]
    const handleLike = useOutletContext()["handleLike"]
    const deletePost = useOutletContext()["deletePost"]
    const backPage = useOutletContext()["backPage"]

    return (
        <>
            {
                post
                &&
                <ViewFeed
                    post={post}
                    toggleReplyModalOpen={toggleReplyModalOpen}
                    like={like}
                    handleLike={handleLike}
                    deletePost={deletePost}
                    backPage={backPage}
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
                            const date = new Date(reply["created_at"])

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
                                    key={reply["post_id"]}
                                    id={reply["post_id"]}
                                    name={reply["user_name"]}
                                    time={formattedDate}
                                    content={reply["post_text"]}
                                    url_icon={reply["url_icon"]}
                                    url_post={reply["url_post"]}
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
