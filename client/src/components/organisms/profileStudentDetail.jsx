import { Avatar, Box, Card, Grid, Tooltip, Typography } from "@mui/material"
import { server } from "components/config"

const ProfileStudentDetail = (props) => {
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
                            src={server.host + "/images/icon/" + props.profile["image_url"]}
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
                            sx={{
                                whiteSpace: "pre-wrap",
                            }}
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
                                                sx={{
                                                    whiteSpace: "pre-wrap",
                                                }}
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
            </Grid>
        </Card >
    );
}

export default ProfileStudentDetail
