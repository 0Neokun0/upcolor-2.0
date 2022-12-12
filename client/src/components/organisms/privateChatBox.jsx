import { ChatForm, ChatNew } from "components/molecules"
import { Box, Card, Hidden, IconButton, Typography } from "@mui/material"
import ListRoundedIcon from '@mui/icons-material/ListRounded'

const PrivateChatBox = (props) => {
    const { selectedUserName, chats, formInput, formInputOnChange, sendChat, onDrawerOpen } = props

    return (
        <Card
            variant="outlined"
            sx={{
                width: "100%",
                height: "100%",
                backgroundColor: "white",
                borderRadius: 6,
            }}
        >
            <Box
                sx={{
                    height: "40px",
                    borderBottom: 1,
                    borderColor: "divider",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Hidden
                    mdUp
                >
                    <IconButton
                        size="small"
                        sx={{
                            ml: 2,
                            borderRadius: 2,
                        }}
                        onClick={onDrawerOpen}
                    >
                        <ListRoundedIcon />
                    </IconButton>
                </Hidden>

                <Typography
                    sx={{
                        fontWeight: "bold",
                        fontSize: "1.3em",
                        ml: 2,
                    }}
                >
                    {selectedUserName}
                </Typography>
            </Box>

            <Box
                id="chatArea"
                sx={{
                    height: "calc(100% - 40px - 80px)",
                    borderBottom: 1,
                    borderColor: "divider",
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
                <Box
                    sx={{
                        width: "70%",
                        mx: "auto",
                        py: 2,
                        "div + div": {
                            mt: 1,
                        }
                    }}
                >
                    {
                        chats
                        &&
                        chats.map((chat) => {
                            return (
                                <ChatNew
                                    key={chat["id"]}
                                    self={chat["self"]}
                                    name={chat["name"]}
                                    icon={chat["icon"]}
                                    time={chat["time"]}
                                    text={chat["text"]}
                                />
                            )
                        })
                    }
                </Box>
            </Box>

            <Box
                sx={{
                    width: "70%",
                    height: "80px",
                    mx: "auto",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                {
                    selectedUserName
                    &&
                    <ChatForm
                        input={formInput}
                        onChange={formInputOnChange}
                        onClick={sendChat}
                    />
                }
            </Box>
        </Card>
    )
}

export default PrivateChatBox