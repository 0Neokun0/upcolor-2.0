import { Link } from "react-router-dom"
import { Avatar, Box, Button, Card, Grid, Tooltip, Typography } from "@mui/material"

const ProfileDetail = (props) => {
    return (
        <Card
            sx={{
                width: "1000px",
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
                        >
                            {props.profile["user_name"]}
                        </Typography>

                        <Typography
                            variant="subtitle2"
                        >
                            {props.profile["course_name"]}
                        </Typography>

                        <Box
                            sx={{
                                textAlign: "left",
                                mt: 2,
                            }}
                        >
                            {
                                props.profileLists.map((profileLists, index) => {
                                    return (
                                        <Grid
                                            key={index}
                                            container
                                        >
                                            <Grid
                                                item
                                                xs={2}
                                            >
                                                <Tooltip
                                                    title={profileLists["title"]}
                                                    placement="right"
                                                >
                                                    {profileLists["icon"]}
                                                </Tooltip>
                                            </Grid>

                                            <Grid
                                                item
                                                xs={10}
                                            >
                                                {
                                                    profileLists["content"]
                                                        ?
                                                        profileLists["content"]
                                                        :
                                                        "未設定"
                                                }
                                            </Grid>
                                        </Grid>
                                    )
                                })
                            }
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

                        {
                            props.profile["user_introduction"]
                                ?
                                props.profile["user_introduction"]
                                :
                                "未設定"
                        }
                    </Box>
                </Grid>

                <Button
                    component={Link}
                    to="./edit"
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
        </Card >
    )
}

export default ProfileDetail