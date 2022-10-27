import { Alert, Box, Button, Card, Typography } from "@mui/material"
import logo from "components/atoms/logo/upcolor_logo.svg"

const TeamWorkInviteForm = (props) => {
    console.log(props["team"])
    return (
        <Card
            sx={{
                width: "fit-content",
                textAlign: "center",
                py: 5,
                px: 2,
                m: "auto",
            }}
        >
            <img
                src={logo}
                alt="ロゴの画像"
                height="30px"
            />
            <Box>
                {
                    props["team"]
                        ?
                        props["team"] === 0
                            ?
                            "チームが存在しないか、URLの期限が切れています"
                            :
                            props["team"] === 1
                                ?
                                "すでにチームに参加しています"
                                :
                                <Box>
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            whiteSpace: "pre-wrap",
                                            mb: 2,
                                        }}
                                    >
                                        {`${props["team"]["team_name"]}\nから招待が来ています`}
                                    </Typography>

                                    <Button
                                        variant="contained"
                                        size="small"
                                        fullWidth
                                        onClick={props["joinTeam"]}
                                        sx={{
                                            mb: 2,
                                        }}
                                    >
                                        参加
                                    </Button>

                                    {
                                        props["joinCheck"]
                                        &&
                                        <Alert
                                            severity="error"
                                        >
                                            チームに参加できませんでした
                                        </Alert>
                                    }
                                </Box>
                        :
                        <p>取得中</p>
                }

                {/* {
                    props.joinCheck
                    &&
                    <Alert
                        severity="error"
                        sx={{
                            mt: 2,
                        }}>
                        チームに参加できませんでした
                    </Alert>

                    <Box>
                    <Typography>
                        チーム : {props["teamWork"]["team_name"]}
                    </Typography>

                    <Button
                        variant="contained"
                        size="small"
                        onClick={props.teamJoinSubmit}
                        fullWidth
                        sx={{
                            mt: 3,
                        }}
                    >
                        参加
                    </Button>
                    </Box>
                } */}
            </Box>
        </Card>
    );
}

export default TeamWorkInviteForm