import { Outlet } from "react-router-dom"
import { MainMenu, News, ReplyModal, SendPost } from "components/organisms"
import { Container, Grid } from "@mui/material"

const HomeLayout = (props) => {
    return (
        <Container>
            <Grid
                container
                sx={{
                    background: "white",
                    height: "100%",
                }}
            >
                <Grid
                    item
                    xs={3}
                >
                    <MainMenu
                        menus={props.menus}
                    />
                </Grid>

                <Grid
                    item
                    xs={6}
                    sx={{
                        height: "calc(100vh - 64px)",
                        overflowY: "scroll",
                        borderLeft: 1,
                        borderRight: 1,
                        p: 2,
                        pt: 0,
                        borderColor: "rgba(0, 0, 0, 0.12)",
                    }}
                >
                    <Outlet
                        context={{
                            "post": props.post,
                            "posts": props.posts,
                            "replys": props.replys,
                            "toggleReplyModalOpen": props.toggleReplyModalOpen,
                        }}
                    />
                </Grid>

                <Grid
                    item
                    xs={3}
                    sx={{
                        p: 2,
                        pt: 0,
                    }}
                >
                    <News
                        news={props.news}
                    />
                </Grid>
            </Grid>

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
        </Container>
    );
}

export default HomeLayout;
