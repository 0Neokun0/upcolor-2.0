import {  Box, Card, CardActionArea, CardMedia, Chip, Typography } from "@mui/material"

import BadgeIcon from "@mui/icons-material/Badge";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import DescriptionIcon from "@mui/icons-material/Description";

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
                            variant="outlined"
                            sx={{
                                bgcolor: "white",
                                width: 400,
                                height: 300,
                                p: 2,
                                mb: 2,
                                flexDirection: "row",
                                borderRadius: "25px",
                                transition: "transform 0.3s, border 0.3s",
                                "&:hover": {

                                    transform: "translateY(-2px)",
                                },
                                "& > *": { minWidth: "clamp(0px, (360px - 100%) * 999,100%)" },

                            }}
                        >
                            <CardActionArea sx={{
                                p: 1,
                                borderRadius: 5.
                            }}
                                onClick={() => window.location.href = "/teamwork/" + team["team_work_id"]}
                            >
                                <Box sx={{
                                    p: 1,
                                    display: "inline-flex",
                                    justifyContent: "center",
                                }}>
                                    <Chip sx={{
                                        mt: 1.5,
                                        mr: 1,
                                    }}
                                        icon={<BadgeIcon />}
                                        label="作品"
                                    />
                                    <Typography
                                        variant="h3"
                                    >
                                        {team["team_work_name"]}
                                    </Typography>


                                </Box>
                                <CardMedia
                                    component="img"
                                    height="100"
                                    image="https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?cs=srgb&dl=pexels-pixabay-256395.jpg&fm=jpg"
                                />


                                <Box sx={{
                                    p: 1,
                                    display: "inline-flex",
                                    justifyItems: "center",
                                }}
                                >
                                    <Chip sx={{
                                        mt: 1,
                                        mr: 1,
                                    }}
                                        icon={<GroupWorkIcon />}
                                        label="チーム" />
                                    <Typography
                                        variant="h5"
                                        gutterBottom
                                    >
                                        {team["team_name"]}
                                    </Typography>
                                </Box>
                                <Box sx={{
                                    p: 1,
                                    display: "flex",
                                    textOverflow: "ellipsis",
                                }}
                                >
                                    <Chip sx={{
                                        mr: 1,
                                        mb: 2,
                                    }}
                                        icon={<DescriptionIcon />}
                                        label="説明"
                                    />
                                    <Typography variant="subtitle2" gutterBottom>
                                        {team["team_work_description"]}
                                    </Typography>
                                </Box>

                            </CardActionArea>
                        </Card>
                    )
                })
            }
        </Box>
    );
}

export default TeamView