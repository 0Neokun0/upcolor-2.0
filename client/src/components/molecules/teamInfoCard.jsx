import { Card, Typography } from "@mui/material"

const TeamInfoCard = (props) => {
    return (
        <Card
            sx={{
                p: 1,
                width: "30%",
                wordBreak: "break-word",
            }}
        >
            <Typography
                sx={{
                    fontWeight: "bold",
                }}
            >
                {props.title}
            </Typography>

            <Typography>
                {
                    props.content
                        ?
                        props.content
                        :
                        "未設定"
                }
            </Typography>
        </Card>
    );
}

export default TeamInfoCard;
