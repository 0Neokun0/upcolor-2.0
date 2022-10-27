import { SendOutlined } from "@material-ui/icons"
import { Avatar, Box, Container, IconButton, InputBase } from "@mui/material"
import ClassRoomAnnouncementCard from "components/molecules/classRoomAnnouncementCard"
import ClassRoomFeedHeader from "components/molecules/classRoomFeedHeader"

const ClassRoomFeedLayout = (props) => {

    return (
        <>
            <Box
                sx={{
                    margin: 'auto',
                    alignItems: 'center'
                }}
            >
                <ClassRoomFeedHeader
                    classRoomTitle={props.classRoomTitle}
                    classRoomTitleImage={props.classRoomTitleImage}

                    enterClassRoom={props.enterClassRoom}
                />
                <>
                    <Container sx={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '50%',
                        p: 2,
                        mb: 4,
                        boxShadow: 3,
                        justifyContent: 'space-between',
                        borderRadius: '25px',
                        mt: 1,
                    }}
                    >
                        <Avatar sx={{
                            height: '50px',
                            width: '50px',
                        }}
                        />
                        {/* <img src={user?.photoURL} alt="My image" /> */}
                        <Box sx={{
                            p: 1,
                            width: '100%',
                            ml: '20px',
                            mr: '20px',
                            fontSize: '17px',

                        }}>
                            <InputBase
                                type="text"
                                // value={announcementContent}
                                // onChange={(e) => setAnnouncementContent(e.target.value)}
                                placeholder="何かを発表したい事"
                            />
                        </Box>
                        <IconButton
                        // onClick={createPost}
                        >
                            <SendOutlined />
                        </IconButton>
                    </Container>
                    <Container>
                        {/* {posts?.map((post) => ( */}
                        <ClassRoomAnnouncementCard
                        // authorId={post.authorId}
                        // content={post.content}
                        // date={post.date}
                        // image={post.image}
                        // name={post.name}
                        />
                        {/* ))} */}
                    </Container>
                </>
            </Box>
        </>
    )
}

export default ClassRoomFeedLayout
