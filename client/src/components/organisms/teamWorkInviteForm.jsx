import { Box, Button, Card, Typography } from "@mui/material"
import logo from "components/atoms/logo/upcolor_logo.svg"

const TeamWorkInviteForm = (props) => {
    console.log(props["teamWork"])
    return (
        <Card
            sx={{
                width: "300px",
                m: "auto",
                py: 5,
                px: 3,
                textAlign: "center",
            }}
        >
            <img
                src={logo}
                alt="ロゴの画像"
                height="30px"
            />

            <Typography
                variant="h5"
            >
                進級制作グループ
            </Typography>

            <Box
                sx={{
                    mt: 5,
                }}
            >
                {
                    props["teamWork"]
                        ?
                        <Box>
                            <Typography>
                                チーム : {props["teamWork"]["team_name"]}
                            </Typography>

                            <Button
                                variant="contained"
                                size="small"
                                fullWidth
                                sx={{
                                    mt: 3,
                                }}
                            >
                                参加
                            </Button>
                        </Box>
                        :
                        "すでにチームに参加しているか、チームが存在しません。"
                }
            </Box>
        </Card>
    );
}

export default TeamWorkInviteForm