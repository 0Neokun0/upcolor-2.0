import { Box, Card, CardActionArea, Chip, Typography } from "@mui/material"

import BadgeIcon from "@mui/icons-material/Badge"
import GroupWorkIcon from "@mui/icons-material/GroupWork"
import DescriptionIcon from "@mui/icons-material/Description"
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions'

const TeamViewCard = (props) => {
    return (
        <Card
            key={props.team["team_work_id"]}
            sx={{
                justifyItems: "space-evenly",
                width: 400,
                height: 250,
                m: 2,
                flexDirection: "row",
                borderRadius: "25px",
                boxShadow: 3,
                transition: "transform 0.3s, border 0.3s",
                "&:hover": {
                    transform: "translateY(-2px)",
                },
            }}
        >
            <CardActionArea
                sx={{
                    p: 2,
                    borderRadius: 5,
                }}
                onClick={() =>
                (window.location.href =
                    "/teamwork/" + props.team["team_work_id"])
                }
            >
                <Box
                    sx={{
                        p: 1,
                        display: "inline-flex",
                        justifyContent: "center",
                    }}
                >
                    <Chip
                        sx={{
                            mt: 1.5,
                            mr: 1,
                        }}
                        icon={<BadgeIcon />}
                        label="作品"
                    />
                    <Typography
                        sx={{
                            width: 300,
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                        }}
                        variant="h3"
                    >
                        {props.team["team_work_name"]}
                    </Typography>
                </Box>
                {/* チームの画像はまだ */}
                {/* <CardMedia
                        component="img"
                        height="100"
                        image="https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?cs=srgb&dl=pexels-pixabay-256395.jpg&fm=jpg"
                /> */}

                <Box
                    sx={{
                        p: 1,
                        display: "inline-flex",
                    }}
                >
                    <Chip
                        sx={{
                            mr: 1,
                        }}
                        icon={<GroupWorkIcon />}
                        label="チーム"
                    />
                    <Typography
                        sx={{
                            width: 300,
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                        }}
                        variant="h5"
                    >
                        {props.team["team_name"]}
                    </Typography>
                </Box>

                <Box
                    sx={{
                        p: 1,
                        display: "flex",
                    }}
                >
                    <Chip
                        sx={{
                            mr: 3,
                        }}
                        icon={<IntegrationInstructionsIcon />}
                        label="技術"
                    />
                    <Typography
                        sx={{
                            width: 350,
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                        }}
                        variant="subtitle2"
                    >
                        {props.team["technology_used"]}
                    </Typography>
                </Box>

                <Box
                    sx={{
                        p: 1,
                        display: "flex",
                    }}
                >
                    <Chip
                        sx={{
                            mr: 3,
                            mb: 2,
                        }}
                        icon={<DescriptionIcon />}
                        label="説明"
                    />
                    <Typography
                        sx={{
                            width: 350,
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                        }}
                        variant="subtitle2"
                    >
                        {props.team["team_work_description"]}
                    </Typography>
                </Box>
            </CardActionArea>
        </Card>
    )
}

export default TeamViewCard