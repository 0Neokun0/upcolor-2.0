import { Box, Typography } from "@mui/material"

const Chat = (props) => {
    var dd = new Date(props.chat["created_at"])

    var YYYY = dd.getFullYear()
    var MM = dd.getMonth() + 1
    var DD = dd.getDate()
    var hh = dd.getHours()
    var mm = dd.getMinutes()
    var ss = dd.getSeconds()

    return (
        <Box
            sx={{
                mb: 2,
            }}
        >
            {props.chat["user_name"]}

            <Box
                sx={{
                    width: "fit-content",
                    p: 1,
                    borderRadius: "5px",
                    backgroundColor: "whitesmoke",
                }}
            >
                {props.chat["sent_text"]}
            </Box>

            <Typography
                variant="caption"
            >
                {YYYY + "/" + MM + "/" + DD + " " + hh + ":" + mm + ":" + ss}
            </Typography>
        </Box>
    )
}

export default Chat
