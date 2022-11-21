import { Outlet } from "react-router-dom"
import { NewsList, ReplyModal, SendPost } from "components/organisms"
import { Box, Hidden, Grid } from "@mui/material"
import Footer from "components/organisms/footer/footer"

import { useState } from "react"
import logo from "components/atoms/logo/upcolor_logo.svg"
import MainMenuDrawer from "components/organisms/mainMenuDrawer"

const HomeLayout = (props) => {
    const [studentMenuOpen, setStudentMenuOpen] = useState(false)
    const studentMenuOpenToggle = () => {
        setStudentMenuOpen(!studentMenuOpen)
    }

    return (
        <Box
            bgcolor={"#f5f5f5"}
        >
            <Grid
                container
                spacing={2}
                columns={10}
            >
                <Grid
                    item
                    xs={2}
                >
                    <Box
                        sx={{
                            p: 2,
                            width: "30%",
                        }}
                    >
                        <MainMenuDrawer
                            logo={logo}
                            menus={props.menus}
                            profile={props.profile}
                            studentMenuOpen={studentMenuOpen}
                            studentMenuOpenToggle={studentMenuOpenToggle}
                        />
                    </Box>
                </Grid>

                <Grid
                    item
                    xs={6}
                >
                    <Box
                        sx={{
                            height: "100vh",
                            width: "100%",
                            overflowY: "auto",
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
                                borderRadius: "50px",
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
                                toggleReplyModalOpen:
                                    props.toggleReplyModalOpen,
                                like: props.like,
                                handleLike: props.handleLike,
                            }}
                        />
                    </Box>
                </Grid>

                <Hidden
                    lgDown
                >
                    <Grid
                        item
                        xs={2}
                    >
                        <Box
                            sx={{
                                ml: 2,
                                p: 2,
                                pt: 0,
                                width: "85%",
                            }}
                        >
                            <NewsList
                                news={props.news}
                            />
                        </Box>
                    </Grid>
                </Hidden>
            </Grid>

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
