import { Box, Card, CardActionArea, Typography } from "@mui/material"

const TeamView = (props) => {
    return (
        <Box
            sx={{
                mx: "auto",
            }}
        >
            {
                props.teams
                &&
                props.teams.map((team) => {
                    return (
                        <Card
                            key={team["team_work_id"]}
                            sx={{
                                width: "200px",
                            }}
                        >
                            <CardActionArea
                                onClick={() => window.location.href = "/teamwork/" + team["team_work_id"]}
                            >
                                <Typography
                                    variant="h6"
                                >
                                    {team["team_work_name"]}
                                </Typography>

                                <Typography>
                                    {team["team_name"]}
                                </Typography>

                                <Typography>
                                    {team["team_work_description"]}
                                </Typography>
                            </CardActionArea>
                        </Card>
                    )
                })
            }
        </Box>
    );
}

export default TeamView