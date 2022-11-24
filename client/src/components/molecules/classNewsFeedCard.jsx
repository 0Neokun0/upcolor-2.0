import { Link } from "react-router-dom"
import { server } from "components/config"
import { Avatar, Box, Card, Divider, Typography } from "@mui/material"

const ClassNewsFeedCard = (props) => {
    const { id, name, text, icon, time } = props

    return (
        <Card
            sx={{
                borderRadius: '15px',
                p: 2,
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Avatar
                    alt={name}
                    src={`${server.host}/images/icon/${icon}`}
                    component={Link}
                    to={`/profile/${id}`}
                    sx={{
                        border: 1,
                        borderColor: "divider",
                    }}
                />

                <Box
                    sx={{
                        ml: 1,
                    }}
                >
                    <Typography>
                        {name}
                    </Typography>

                    <Typography
                        variant="caption"
                    >
                        {time}
                    </Typography>
                </Box>
            </Box>

            <Divider
                sx={{
                    my: 2,
                }}
            />

            <Typography
                sx={{
                    whiteSpace: "pre-wrap",
                }}
            >
                {text}
            </Typography>
        </Card>
    )
}

export default ClassNewsFeedCard