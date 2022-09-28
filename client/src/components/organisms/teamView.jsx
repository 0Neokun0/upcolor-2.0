import { Box, Card, Typography } from "@mui/material"

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
                                mx: 2,
                            }}
                        >
                            <Typography
                                variant="h6"
                            >
                                {team["team_name"]}
                            </Typography>

                            <Typography>
                                {team["team_work_description"]}
                            </Typography>
                        </Card>
                    )
                })
            }
        </Box>
    );
}

export default TeamView