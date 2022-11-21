import { Link } from "react-router-dom"
import {
    Card,
    CardActionArea,
    CardContent,
    Typography,
} from "@mui/material"

const ProfileTeamWork = (props) => {
    return (
        <Link to={`/teamwork/${props["teamWork"]["team_work_id"]}`}>
            <Card
                sx={{
                    boxShadow: 2,
                    borderRadius: "15px",
                }}
            >
                <CardActionArea
                    sx={{
                        p: 2,
                    }}
                >
                    <CardContent
                        sx={{
                            p: 0,
                        }}
                    >
                        <Typography
                            variant="h6"
                        >
                            {props["teamWork"]["team_name"]}
                        </Typography>

                        <Typography>
                            {props["teamWork"]["team_work_name"]}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    )
}

export default ProfileTeamWork