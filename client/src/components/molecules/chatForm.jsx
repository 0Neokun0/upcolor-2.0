import {  TextField } from "@mui/material"

const ChatForm = () => {
    return (
        <TextField
            variant="outlined"
            placeholder="ここにメッセージを入力"
            size="small"
            multiline
            fullWidth
            sx={{
                ".MuiInputBase-root": {
                    borderRadius: 6,
                    backgroundColor: "#f0f0f0",
                }
            }}
        />
    )
}

export default ChatForm