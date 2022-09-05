import { Avatar, Box, Button, Card, Grid, Tooltip, Typography } from "@mui/material"
import EmailRoundedIcon from '@mui/icons-material/EmailRounded'
import GitHubIcon from '@mui/icons-material/GitHub'

const ProfileDetail = (props) => {
    return (
        <Card
            sx={{
                width: "900px",
                mx: "auto",
                borderRadius: 0,
            }}
        >
            <Grid
                container
                sx={{
                    p: 2,
                }}
            >
                <Grid
                    item
                    xs={4}
                >
                    <Box
                        sx={{
                            textAlign: "center",
                            p: 5,
                        }}
                    >
                        <Avatar
                            sx={{
                                width: "150px",
                                height: "150px",
                                mx: "auto",
                                mb: 5,
                            }}
                        />

                        <Typography
                            variant="h5"
                            sx={{
                                mb: 2,
                            }}
                        >
                            {props.profile["user_name"]}
                        </Typography>

                        <Box
                            sx={{
                                textAlign: "left",
                            }}
                        >
                            <Grid
                                container
                            >
                                <Grid
                                    item
                                    xs={2}
                                >
                                    <Tooltip
                                        title="メールアドレス"
                                        placement="right"
                                    >
                                        <EmailRoundedIcon />
                                    </Tooltip>
                                </Grid>

                                <Grid
                                    item
                                    xs={10}
                                >
                                    {props.profile["user_mail"]}
                                </Grid>
                            </Grid>

                            <Grid
                                container
                            >
                                <Grid
                                    item
                                    xs={2}
                                >
                                    <Tooltip
                                        title="Github"
                                        placement="right"
                                    >
                                        <GitHubIcon />
                                    </Tooltip>
                                </Grid>

                                <Grid
                                    item
                                    xs={10}
                                >
                                    {
                                        props.profile["user_github"]
                                            ?
                                            props.profile["user_github"]
                                            :
                                            "未設定"
                                    }
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>

                <Grid
                    item
                    xs={8}
                >
                    <Box
                        sx={{
                            p: 5,
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{
                                borderBottom: 1,
                                fontWeight: "bold",
                                mb: 2,
                            }}
                        >
                            自己紹介
                        </Typography>

                        {props.profile["user_introduction"]}
                    </Box>
                </Grid>

                <Button
                    variant="contained"
                    size="small"
                    sx={{
                        width: "80%",
                        mx: "auto",
                    }}
                >
                    編集
                </Button>
            </Grid>
        </Card>
    )
}

export default ProfileDetail