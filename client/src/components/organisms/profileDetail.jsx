import { Link } from "react-router-dom"
import { Avatar, Box, Button, ButtonGroup, Card, Grid, Tooltip, Typography } from "@mui/material"







const ProfileDetail = (props) => {


    return (
        <Card
            sx={{
                width: "60%",
                height: "600px",
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
                            p: 5

                        }}
                    >


                    <Button
                        component={Link}
                        to="./edit"
                        variant="contained"
                        size="small"
                        sx={{
                            width: "10%",
                            height: "20%",
                            mx: "89%",
                        }}
                    >
                        編集
                    </Button>

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



                        <Box
                            id="introductionBox"
                            sx={{
                                position: "relative",
                                border: 1,
                                p: 2,
                                marginBottom: -1,
                                height: "150px",
                                wordBreak: "break-all",
                                overflow: "hidden",
                            }}

                        >{
                            props.profile["user_introduction"]
                                ?
                                props.profile["user_introduction"]
                                :
                                ""
                        }


                            <Box
                                id="openBox"
                                sx={{
                                    position: "absolute",
                                    bottom: "0px",
                                    width: "100%",
                                    py: 2,
                                    ml: -2,
                                    textAlign: "center",
                                    backgroundImage: "linear-gradient(180deg, rgba(255,255,255,0.5), white)",
                                }}
                            >
                                <Button
                                    variant="contained"
                                    onClick={() => props.handleOpen()}
                                >
                                    続きを読む
                                </Button>
                            </Box>

                            <Box
                                id="closeBox"
                                sx={{
                                    bottom: "0px",
                                    width: "100%",
                                    pt: 2,
                                    textAlign: "center",
                                    display: "none",
                                }}
                            >
                                <Button
                                    variant="contained"
                                    onClick={() => props.handleClose()}
                                >
                                    閉じる
                                </Button>
                            </Box>
                        </Box>
                    </Box>

                    <Grid>
                        <Box
                            sx={{
                                paddingLeft: 5
                            }}>
                            <ButtonGroup
                                disableElevation
                                variant="contained"

                            >
                                <Button
                                    onClick={() => props.setToggle(1)}
                                >
                                    作品
                                </Button>

                                <Button
                                    onClick={() => props.setToggle(2)}
                                >
                                    スキル・経歴
                                </Button>

                                <Button
                                    onClick={() => props.setToggle(3)}
                                >
                                    取り組み業務
                                </Button>
                            </ButtonGroup>
                        </Box>

                        {
                            props.toggle === 1
                            &&

                            /*toggle1に作品画像出力＆選択
                            toggle2にスキル・経歴の表示ボックス＆入力欄
                            toggle3に取り組み業務の表示ボックス＆入力欄
                            */

                            <Box>

                                aaaaaaaaaaaaaa
                            </Box>
                        }

                        {
                            props.toggle === 2
                            &&
                            <Box

                            >
                                bbbbbbbbbbbbbbbb
                            </Box>
                        }

                        {
                            props.toggle === 3
                            &&
                            <Box>
                                ccccccccccccc
                            </Box>
                        }
                    </Grid>


                </Grid>


                <Grid>


                </Grid>
            </Grid>
        </Card >
    )
}



export default ProfileDetail