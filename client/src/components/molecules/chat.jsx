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
        <Box>
            <Typography
                variant="caption"
            >
                {props.chat["user_name"]}
            </Typography>

            <Box
                sx={{
                    px: 2,
                    width: "fit-content",
                    borderRadius: "0px 8px 8px 8px",
                    backgroundColor: "#EEEEEE",
                    whiteSpace: "pre-wrap",
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
