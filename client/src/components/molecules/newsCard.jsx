import { server } from "components/config"
import { Avatar, Box, Card, Divider, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const NewsCard = (props) => {
    const { id, name, title, text, time } = props

    return (
        <Card
            sx={{
                borderRadius: "15px",
                p: 2,
                mb: 2,
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
                    // 変更予定
                    src={`${server.host}/images/icon/userIcon.png`}
                    component={Link}
                    to={`/profile/${id}`}
                    sx={{
                        border: "2px solid lightgray",
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

            <Typography>
                {title}
            </Typography>

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

export default NewsCard
