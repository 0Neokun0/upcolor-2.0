import { server } from "components/config"
import { Avatar, Box, Typography } from "@mui/material"

const ChatNew = (props) => {
    // self: 0...他人の投稿, 1...自分の投稿
    const { self, name, icon, time, text } = props

    return (
        self
            ?
            <Box
                sx={{
                    ml: "auto",
                    width: "fit-content",
                }}
            >
                <Typography
                    variant="body2"
                >
                    {time}
                </Typography>

                <Typography
                    sx={{
                        p: 1,
                        ml: "auto",
                        width: "fit-content",
                        maxWidth: "350px",
                        whiteSpace: "pre-wrap",
                        backgroundColor: "#F0F0F0",
                        borderRadius: 2,
                        fontSize: "0.9em",
                    }}
                >
                    {text}
                </Typography>
            </Box>
            :
            <Box
                sx={{
                    width: "fit-content",
                    display: "flex",
                }}
            >
                <Avatar
                    alt={name}
                    src={`${server.host}/images/icon/${icon}`}
                />

                <Box
                    sx={{
                        ml: 1,
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                        }}
                    >
                        <Typography
                            fontWeight="bold"
                        >
                            {name}
                        </Typography>

                        <Typography
                            variant="body2"
                            sx={{
                                ml: 2,
                            }}
                        >
                            {time}
                        </Typography>
                    </Box>

                    <Typography
                        sx={{
                            p: 1,
                            width: "fit-content",
                            maxWidth: "350px",
                            whiteSpace: "pre-wrap",
                            backgroundColor: "#F0F0F0",
                            borderRadius: 2,
                            fontSize: "0.9em",
                        }}
                    >
                        {text}
                    </Typography>
                </Box>
            </Box>
    )
}

export default ChatNew