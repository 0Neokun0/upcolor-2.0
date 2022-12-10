import { Outlet } from "react-router-dom"
import { MainMenu, NewsList, ReplyModal, SendPost } from "components/organisms"
import { Box, Hidden, Stack } from "@mui/material"
import Footer from "components/organisms/footer/footer"
import CompanyNewsList from "components/organisms/companyNewsList"

const HomeLayout = (props) => {
    return (
        <Box
            bgcolor={"#f5f5f5"}
        >
            <Stack
                direction={"row"}
            >
                <Hidden
                    mdDown
                >
                    <Box
                        sx={{
                            p: 2,
                            width: "50%",
                            maxWidth: "400px"
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
                        height: "calc(100vh - 64px)",
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
                    <Outlet
                        context={{
                            post: props.post,
                            posts: props.posts,
                            replys: props.replys,
                            toggleReplyModalOpen: props.toggleReplyModalOpen,
                            like: props.like,
                            handleLike: props.handleLike,
                            deletePost: props.deletePost,
                            backPage: props.backPage,

                        }}
                    />
                </Box>

                <Hidden
                    lgDown
                >
                    <Box
                        sx={{
                            p: 2,
                            height: "calc(100vh - 64px)",
                            overflowY: "scroll",
                            width: "50%",
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
                        <NewsList
                            news={props.news}
                        />
                        <CompanyNewsList
                            companyNews={props.companyNews}
                        />
                    </Box>
                </Hidden>
            </Stack>

            <SendPost
                profile={props.profile}
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
