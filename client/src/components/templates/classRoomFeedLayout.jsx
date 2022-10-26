import { SendOutlined } from "@material-ui/icons"
import { Avatar, Box, IconButton, InputBase } from "@mui/material"
import ClassRoomAnnouncementCard from "components/molecules/classRoomAnnouncementCard"

const ClassRoomFeedLayout = (props) => {

    return (
        <>
            <Box sx={{
                margin: 'auto',
                width: '60%',
            }}
            >
                <Box sx={{
                    width: '100%',
                    backgroundColor: '#0a9689',
                    color: 'white',
                    height: '300px',
                    borderRadius: '25px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    fontWeight: 'bold',
                    fontSize: '50px',
                }}
                >
                    <Box sx={{
                        p: 2,
                        m: 2,
                    }}
                    >
                        {props.className}
                        情報処理ネットワーク
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%',
                        p: 2,
                        mb: 4,
                        boxShadow: 3,
                        justifyContent: 'space-between',
                        borderRadius: '25px',
                        mt: 25,
                    }}>
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
                    </Box>
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
            </Box>
        </>
    )
}

export default ClassRoomFeedLayout
