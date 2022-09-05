import Gantt from "components/atoms/gantt"
import { Link } from "react-router-dom"
import { Box, Button, Card, Typography } from "@mui/material"
import { TeamMembers } from "components/organisms"
import { TeamInfoCard } from "components/molecules"
import Toolbar from "components/atoms/toolbar"

const TeamDetail = (props) => {

    console.log(props.team)
    return (
        props.team.map((info, index) => {
            return (
                <Card
                    key={index}
                    sx={{
                        borderRadius: 0,
                        width: "1000px",
                        p: 2,
                    }}
                >
                    <Box
                        sx={{
                            textAlign: "center",
                            mb: 5,
                        }}
                    >
                        <Typography
                            variant="h4"
                        >
                            {info["team_name"]}
                        </Typography>

                        <Typography
                            variant="h6"
                        >
                            作品 {info["team_work_name"]}
                        </Typography>
                    </Box>

                    <TeamMembers
                        members={props.teamMembers}
                    />

                    <Box
                        sx={{
                            width: "80%",
                            mx: "auto",
                            mb: 2,
                        }}
                    >
                        <Box
                            sx={{
                                mb: 1,
                                display: "flex",
                                "div + div": {
                                    ml: 2,
                                }
                            }}
                        >
                            <TeamInfoCard
                                title="作品説明"
                                content={info["team_work_description"]}
                            />
    
                            <TeamInfoCard
                                title="ターゲット"
                                content={info["team_target"]}
                            />
    
                            <TeamInfoCard
                                title="競合サービス、差別化"
                                content={info["team_strategy"]}
                            />
                        </Box>
                        
                        <Box
                            sx={{
                                textAlign: "right",
                            }}
                        >
                            <Button
                                variant="contained"
                                component={Link}
                                to="/teamWorkInfo"
                            >
                                編集
                            </Button>
                        </Box>
                    </Box>

                    <Box>
                        <Box
                            className="zoom-bar"
                        >
                            <Toolbar
                                zoom={props.currentZoom}
                                onZoomChange={props.handleZoomChange}
                            />
                        </Box>

                        <Box
                            className="gantt-container"
                            sx={{
                                height: "400px",
                                mb: 2,
                            }}
                        >
                            <Gantt
                                tasks={props.data}
                                zoom={props.currentZoom}
                            />
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            textAlign: "right",
                        }}
                    >
                        <Button
                            variant="contained"
                            onClick={props.saveGantt}
                        >
                            保存
                        </Button>
                    </Box>
                </Card>
            )
        })
    );
}

export default TeamDetail;
