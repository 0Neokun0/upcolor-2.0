import { ChatForm, ChatNew } from "components/molecules"
import { Box, Card, Typography } from "@mui/material"

const PrivateChatBox = (props) => {
    const { selected, chats } = props

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
            <Typography
                sx={{
                    height: "40px",
                    pl: 12,
                    borderBottom: 1,
                    borderColor: "divider",
                    fontWeight: "bold",
                    fontSize: "1.3em",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                {selected}
            </Typography>

            <Box
                sx={{
                    height: "calc(100% - 40px - 80px)",
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
                        pt: 2,
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
                <ChatForm />
            </Box>
        </Card>
    )
}

export default PrivateChatBox