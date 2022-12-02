import { FormControl, IconButton, InputAdornment, OutlinedInput } from "@mui/material"
import SendRoundedIcon from '@mui/icons-material/SendRounded'

const ChatForm = (props) => {
    const { input, onChange, onClick } = props

    return (
        <FormControl
            fullWidth
        >
            <OutlinedInput
                variant="outlined"
                placeholder="ここにメッセージを入力"
                size="small"
                value={input}
                onChange={onChange}
                multiline
                endAdornment={
                    <InputAdornment
                        position="end"
                    >
                        <IconButton
                            edge="end"
                            onClick={onClick}
                        >
                            <SendRoundedIcon />
                        </IconButton>
                    </InputAdornment>
                }
                sx={{
                    borderRadius: 3,
                    backgroundColor: "#f0f0f0",
                }}
            />
        </FormControl>
    )
}

export default ChatForm