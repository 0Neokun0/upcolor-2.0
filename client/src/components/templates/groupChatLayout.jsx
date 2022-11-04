import { useOutletContext } from "react-router-dom"
import { GroupChat, GroupList } from "components/organisms"
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
    const handleSendChat = useOutletContext()["handleSendChat"]

    return (
        <Grid
            container
        >
            <Grid
                item
                xs={4}
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
                xs={8}
                sx={{
                    height: "calc(100vh - 64px)",
                    overflowY: "scroll",
                }}
            >
                <Box
                    id="chatBox"
                    sx={{
                        width: "100%",
                        height: "100%",
                    }}
                >
                    <GroupChat
                        chats={chats}
                        addChats={addChats}
                    />

                    <Box
                        component={"form"}
                        onSubmit={handleSendChat}
                        sx={{
                            height: "40px",
                            display: "flex",
                            position: "fixed",
                            bottom: 0,
                            backgroundColor: "white",
                        }}
                    >
                        <TextField
                            id="chatInput"
                            variant="outlined"
                            size="small"
                            fullWidth
                            required
                            name="text"
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
        </Grid>
    );
}

export default GroupChatLayout;
