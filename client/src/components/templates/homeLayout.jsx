import { Outlet } from "react-router-dom"
import { MainMenu, NewsList, ReplyModal, SendPost } from "components/organisms"
import { Box, Hidden, Stack } from "@mui/material"
import Footer from "components/organisms/footer/footer"

const HomeLayout = (props) => {
    return (
        <Box
            bgcolor={"#f5f5f5"}
        >
            <Stack
                direction={"row"}
            >
                <Hidden
                    lgDown
                >
                    <Box
                        sx={{
                            p: 2,
                            width: "40%",
                        }}
                    >
                        <MainMenu
                            menus={props.menus}
                            profile={props.profile}
                        />
                    </Box>
                </Hidden>

                <Box
                    sx={{
                        height: "100vh",
                        width: "100%",
                        overflowY: "scroll",
                        borderLeft: 1,
                        borderRight: 1,
                        p: 2,
                        borderColor: "rgba(0, 0, 0, 0.12)",
                        backgroundColor: "white",
                        "::-webkit-scrollbar": {
                            width: "5px",
                        },
                        "::-webkit-scrollbar-thumb": {
                            backgroundColor: "rgba(0, 0, 50, .5)",
                            borderRadius: "5px",
                        },
                        "::-webkit-scrollbar-track": {
                            boxShadow: 2,
                        },
                    }}
                >
                    {/* <PostBox
                            openPostModal={props.openPostModal}
                            togglePostModalOpen={props.togglePostModalOpen}
                            togglePostModalClose={props.togglePostModalClose}
                        /> */}

                    <Outlet
                        context={{
                            post: props.post,
                            posts: props.posts,
                            replys: props.replys,
                            toggleReplyModalOpen: props.toggleReplyModalOpen,
                            like: props.like,
                            handleLike: props.handleLike,
                        }}
                    />
                </Box>

                <Hidden
                    lgDown
                >
                    <Box
                        sx={{
                            p: 2,
                            pt: 0,
                            width: "40%",
                        }}
                    >
                        <NewsList
                            news={props.news}
                        />
                    </Box>
                </Hidden>
            </Stack>

            <SendPost
                handleSubmit={props.handleSubmit}
                openPostModal={props.openPostModal}
                togglePostModalOpen={props.togglePostModalOpen}
                togglePostModalClose={props.togglePostModalClose}
                fileCheck={props.fileCheck}
                setFileCheck={props.setFileCheck}
            />

            <ReplyModal
                profile={props.profile}
                handleReplySubmit={props.handleReplySubmit}
                openReplyModal={props.openReplyModal}
                toggleReplyModalClose={props.toggleReplyModalClose}
                postId={props.postId}
                fileCheck={props.fileCheck}
                setFileCheck={props.setFileCheck}
            />

            <Footer />
        </Box>
    )
}

export default HomeLayout
