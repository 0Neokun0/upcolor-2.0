import { Avatar, Card, CardHeader, Divider, Typography } from "@mui/material"
// import { server } from "components/config"

const NewsCard = (props) => {
    return (
        <Card
            sx={{
                borderRadius: "15px",
                m: 2,
                p: 1,
            }}
        >
            <CardHeader
                avatar={
                    <Avatar
                        // src={server.host + "/images/icon/" + props.profile.image}
                    />
                }
                title={props.name}
                subheader={props.time}
                sx={{
                    m: 1,
                    p: 1,
                }}
            />
            <Divider
                sx={{
                    my: 2,
                }}
            />
            <Typography
                variant="subtitle1"
                textAlign={"center"}
                gutterBottom
            >
                {props.title}
            </Typography>
            <Typography
                variant="body2"
            >
                {props.text}
            </Typography>

        </Card>
    )
}

export default NewsCard
