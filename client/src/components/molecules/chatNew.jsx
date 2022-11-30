import { Avatar, Box, Typography } from "@mui/material"

const ChatNew = (props) => {
    // self: 0...他人の投稿, 1...自分の投稿
    // const { self, name, icon, time, text } = props
    const { self, name, time, text } = props

    return (
        self
            ?
            <Box
                sx={{
                    width: "fit-content",
                    ml: "auto",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "end",
                }}
            >
                <Typography
                    variant="body2"
                    textAlign="end"
                >
                    {time}
                </Typography>

                <Typography
                    sx={{
                        p: 1,
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
                <Avatar />

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