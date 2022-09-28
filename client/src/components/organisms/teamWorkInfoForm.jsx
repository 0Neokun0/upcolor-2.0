import { Box, Button, Card, TextField, Typography } from "@mui/material"

const TeamWorkInfoForm = (props) => {
    return (
        props.team.map((info) => {
            return (
                <Card
                    key={info["team_work_id"]}
                    sx={{
                        borderRadius: 0,
                        width: "500px",
                        p: 2,
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            textAlign: "center",
                        }}
                    >
                        {info["team_work_name"]}
                    </Typography>

                    <Box
                        component="form"
                        onSubmit={props.toggleEditInfo}
                        sx={{
                            mt: 5,
                            "div + div": {
                                mt: 2,
                            }
                        }}
                    >
                        <TextField
                            size="small"
                            label="作品説明"
                            name="description"
                            fullWidth
                            multiline
                            rows={3}
                            defaultValue={info["team_work_description"]}
                        />

                        <TextField
                            size="small"
                            label="ターゲット"
                            name="target"
                            fullWidth
                            multiline
                            rows={3}
                            defaultValue={info["team_target"]}
                        />

                        <TextField
                            size="small"
                            label="競合サービス、差別化"
                            name="strategy"
                            fullWidth
                            multiline
                            rows={3}
                            defaultValue={info["team_strategy"]}
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            size="small"
                            fullWidth
                            sx={{
                                mt: 5,
                            }}
                        >
                            保存
                        </Button>
                    </Box>
                </Card>
            )
        })
    );
}

export default TeamWorkInfoForm;
