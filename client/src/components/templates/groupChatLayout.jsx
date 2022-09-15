import { useOutletContext } from "react-router-dom"
import { GroupChat, GroupList } from "components/organisms"
import { Box, Grid, IconButton, TextField } from "@mui/material"
import SendRoundedIcon from '@mui/icons-material/SendRounded'

const GroupChatLayout = () => {
    const userId = useOutletContext()["userId"]
    const groups = useOutletContext()["groups"]
    const selectGroupId = useOutletContext()["selectGroupId"]
    const setSelectGroupId = useOutletContext()["setSelectGroupId"]
    const handleGenerateInviteUrl = useOutletContext()["handleGenerateInviteUrl"]
    const handleLeaveGroup = useOutletContext()["handleLeaveGroup"]

    const chats = useOutletContext()["chats"]
    const handleSendChat = useOutletContext()["handleSendChat"]

    console.log(chats)

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
                    setSelectGroupId={setSelectGroupId}

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
                    sx={{
                        height: "100%",
                        position: "relative",
                    }}
                >
                    <GroupChat
                        chats={chats}
                    />

                    <Box
                        component={"form"}
                        onSubmit={handleSendChat}
                        sx={{
                            width: "100%",
                            display: "flex",
                            position: "absolute",
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

                        <IconButton
                            color={"primary"}
                            type={"submit"}
                        >
                            <SendRoundedIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}

export default GroupChatLayout;
