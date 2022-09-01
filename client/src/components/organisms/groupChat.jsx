import { Box } from "@mui/material"
import { Chat } from "components/molecules"

const GroupChat = (props) => {
    return (
        <Box
            sx={{
                p: 2,
                pb: 0,
            }}
        >
            {
                props.chats
                &&
                props.chats.map((chat) => {
                    return (
                        <Chat
                            key={chat["chat_id"]}
                            chat={chat}
                        />
                    )
                })
            }
        </Box>
    );
}

export default GroupChat;
