import { useOutletContext } from "react-router-dom"
import { GroupChat, GroupList, GroupMembers } from "components/organisms"
import { Box, Grid, IconButton, TextField } from "@mui/material"
import SendRoundedIcon from '@mui/icons-material/SendRounded'

const GroupChatLayout = () => {
    const userId = useOutletContext()["userId"]
    const groups = useOutletContext()["groups"]
    const selectGroupId = useOutletContext()["selectGroupId"]
    const menuOpen = useOutletContext()["menuOpen"]
    const setMenuOpen = useOutletContext()["setMenuOpen"]
    const menuId = useOutletContext()["menuId"]
    const setMenuId = useOutletContext()["setMenuId"]
    const copyOpen = useOutletContext()["copyOpen"]
    const setCopyOpen = useOutletContext()["setCopyOpen"]
    const groupClick = useOutletContext()["groupClick"]

    const handleGenerateInviteUrl = useOutletContext()["handleGenerateInviteUrl"]
    const handleLeaveGroup = useOutletContext()["handleLeaveGroup"]

    const chats = useOutletContext()["chats"]
    const addChats = useOutletContext()["addChats"]
    const members = useOutletContext()["members"]
    // const scrollDown = useOutletContext()["scrollDown"]
    const handleSendChat = useOutletContext()["handleSendChat"]

    return (
        <Grid
            container
        >
            <Grid
                item
                xs={3}
                sx={{
                    height: "calc(100vh - 64px)",
                    overflowY: "scroll",
                    borderRight: 1,
                    borderColor: "rgba(0, 0, 0, 0.12)",
                }}
            >
                <GroupList
                    userId={userId}
                    groups={groups}
                    selectGroupId={selectGroupId}
                    menuOpen={menuOpen}
                    setMenuOpen={setMenuOpen}
                    menuId={menuId}
                    setMenuId={setMenuId}
                    copyOpen={copyOpen}
                    setCopyOpen={setCopyOpen}
                    groupClick={groupClick}

                    handleGenerateInviteUrl={handleGenerateInviteUrl}
                    handleLeaveGroup={handleLeaveGroup}
                />
            </Grid>

            <Grid
                item
                xs={7}
                sx={{
                    borderRight: 1,
                    borderColor: "rgba(0, 0, 0, 0.12)",
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        height: "100%",
                    }}
                >
                    <Box
                        id="chatBox"
                        sx={{
                            height: "calc(100vh - 104px)",
                            overflowY: "scroll",
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
                        <GroupChat
                            chats={chats}
                            addChats={addChats}
                        />
                    </Box>

                    <Box
                        component={"form"}
                        onSubmit={handleSendChat}
                        sx={{
                            display: "flex",
                        }}
                    >
                        <TextField
                            id="chatInput"
                            variant="outlined"
                            size="small"
                            name="text"
                            multiline
                            fullWidth
                            required
                        />

                        <Box>
                            <IconButton
                                color={"primary"}
                                type={"submit"}
                            >
                                <SendRoundedIcon />
                            </IconButton>
                        </Box>
                    </Box>
                </Box>
            </Grid>

            <Grid
                item
                xs={2}
                sx={{
                    height: "calc(100vh - 64px)",
                    overflowY: "scroll",
                }}
            >
                <GroupMembers
                    members={members}
                />
            </Grid>
        </Grid>
    );
}

export default GroupChatLayout