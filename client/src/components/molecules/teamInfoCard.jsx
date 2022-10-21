import { Button, Card, CardActions, CardContent, Typography } from "@mui/material"

const TeamInfoCard = (props) => {
    return (
        <Card
            variant="outlined"
        >
            <CardContent>
                <Typography
                    variant="h5"
                    sx={{
                        borderBottom: 1,
                        mb: 2,
                    }}
                >
                    {props["title"]}
                </Typography>

                <Typography
                    sx={{
                        whiteSpace: "pre-wrap",
                    }}
                >
                    {
                        props["content"]
                            ?
                            props["content"]
                            :
                            "情報なし"
                    }
                </Typography>
            </CardContent>

            <CardActions>
                <Button>
                    ボタン
                </Button>
            </CardActions>
        </Card>
    )
}

export default TeamInfoCard
