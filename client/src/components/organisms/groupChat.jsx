import { Box } from "@mui/material"
import { Chat } from "components/molecules"

const GroupChat = (props) => {
    return (
        <Box
            sx={{
                p: 2,
                "div + div": {
                    mt: 1,
                }
            }}
        >
            {
                props.chats
                &&
                props.chats.map((chat) => {
                    return (
                        <>
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'flex-start',
                            }}
                            >
                                <Chat
                                    key={chat["chat_id"]}
                                    chat={chat}
                                />
                            </Box>
                        </>

                    )
                })
            }

            {
                props.addChats
                &&
                props.addChats.map((addChat) => {
                    return (
                        <Chat
                            key={addChat["chat_id"]}
                            chat={addChat}
                        />
                    )
                })
            }
        </Box>
    )
}

export default GroupChat
