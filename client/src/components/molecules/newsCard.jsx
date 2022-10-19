import { Avatar, Card, CardHeader, Divider, Typography } from "@mui/material"

const NewsCard = (props) => {
    return (
        <Card
            sx={{
                boxShadow: 2,
                borderRadius: '15px',
                mt: 2,
                p: 2,
            }}
        >
            <CardHeader
                avatar={<Avatar>{props.name}</Avatar>}
                title={props.name}
                subheader={props.time}
                sx={{
                    p: 0,
                }}
            />

            <Divider
                sx={{
                    my: 2,
                }}
            />
            <Typography
                variant="h5"
                textAlign={"center"}
                sx={{
                    mb: 2,
                }}
            >
                {props.title}
            </Typography>

            {props.text}
        </Card>
    )
}

export default NewsCard
