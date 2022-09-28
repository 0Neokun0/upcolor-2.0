import { Card, CardActionArea, CardContent, CardHeader, Typography } from "@mui/material"

const NewsCard = (props) => {
    return (
        <Card
            sx={{
                textAlign: 'center',
                borderRadius: '15px',
                boxShadow: 2,
            }}
        >
            <CardActionArea>
                <CardHeader
                    title={props.title}
                    subheader={props.name}
                />

                <CardContent>
                    <Typography
                        variant="body2"
                        color={"text.secondary"}
                    >
                        {props.content}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default NewsCard
