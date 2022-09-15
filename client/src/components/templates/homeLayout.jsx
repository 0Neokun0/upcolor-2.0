import { Outlet } from "react-router-dom"
import { MainMenu, News, PostBox, ReplyModal, SendPost } from "components/organisms"
import { Box, Stack} from "@mui/material"




const HomeLayout = (props) => {

    return (
        <>
            <Box bgcolor={"background.default"}>
                <Stack direction="row" spacing={4} justifyContent="space-between">


                    <MainMenu
                        user={props.user}
                        menus={props.menus}
                    />


                    <Box flex={4}
                        xs={6}
                        sx={{
                            height: "calc(100vh - 64px)",
                            overflowY: "scroll",
                            borderLeft: 1,
                            borderRight: 1,
                            p: 2,
                            pt: 0,
                            borderColor: "rgba(0, 0, 0, 0.12)"
                        }}
                    >
                        <PostBox/>

                        <Outlet
                            context={{
                                "post": props.post,
                                "posts": props.posts,
                                "replys": props.replys,
                                "toggleReplyModalOpen": props.toggleReplyModalOpen,
                            }}
                        />
                    </Box>


                    <News
                        news={props.news}
                    />


                    <SendPost
                        handleSubmit={props.handleSubmit}
                        openPostModal={props.openPostModal}
                        togglePostModalOpen={props.togglePostModalOpen}
                        togglePostModalClose={props.togglePostModalClose}
                    />

                    <ReplyModal
                        handleReplySubmit={props.handleReplySubmit}
                        openReplyModal={props.openReplyModal}
                        toggleReplyModalClose={props.toggleReplyModalClose}
                        postId={props.postId}
                    />
                </Stack>
            </Box>

        </>
    );
}

export default HomeLayout;
