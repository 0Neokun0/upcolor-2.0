
import { Box, Grid } from "@mui/material"
import ClassRoomAnnouncementCard from "components/molecules/classRoomAnnouncementCard"
import ClassRoomFeedHeader from "components/molecules/classRoomFeedHeader"

import SendNews from "components/organisms/sendNews"

const ClassRoomFeedLayout = (props) => {



    return (
        <Box
            sx={{
                margin: 'auto',
                alignItems: 'center',

            }}
        >
            <ClassRoomFeedHeader
                profile={props.profile}

                classRoomTitle={props.classRoomTitle}
                classRoomTitleImage={props.classRoomTitleImage}

                enterClassRoom={props.enterClassRoom}
            />
            <Grid
                container
                justifyContent="center"
            >
                <SendNews
                    open={props.open}
                    handleOpen={props.handleOpen}
                    handleClose={props.handleClose}

                    handleSubmitNews={props.handleSubmitNews}
                />
                <Box
                    sx={{
                        margin: 'auto',
                        alignItems: 'center',
                        height: "100vh",
                        width: "100%",
                        overflowY: "auto",
                        borderLeft: 1,
                        borderRight: 1,
                        p: 2,
                        borderColor: "rgba(0, 0, 0, 0.12)",
                        backgroundColor: "white"
                    }}>
                    {/* {posts?.map((post) => ( */}
                    <ClassRoomAnnouncementCard
                    // authorId={post.authorId}
                    // content={post.content}
                    // date={post.date}
                    // image={post.image}
                    // name={post.name}
                    />
                    {/* ))} */}
                </Box>
            </Grid>
        </Box>
    )
}

export default ClassRoomFeedLayout
