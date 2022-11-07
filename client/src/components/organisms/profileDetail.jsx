import { Link } from "react-router-dom"
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Avatar, Box, Button, ButtonGroup, Card, Grid, ListItemButton, Tooltip, Typography } from "@mui/material"
import { border } from "@mui/system";







const ProfileDetail = (props) => {


    return (
        <Card
            sx={{
                width: "60%",
                mx: "auto",
                borderRadius: 0,
            }}
        >
            {/* <Box
                sx={{
                    p: 2,
                    borderBottom: 1,
                    borderColor: "rgba(0, 0, 0, 0.12)",
                    display: "flex",
                    alignItems: "center",
                }}
            >

                <Typography
                    variant="h5"
                    sx={{
                        m: "auto",
                    }}
                >
                    Matsuo
                    情報処理ネットワーク専攻
                </Typography>


            </Box> */}

            <Grid
                container
                sx={{
                    borderBottom: 1,
                    borderColor: "rgba(0, 0, 0, 0.12)",
                }}
            >
                <Grid
                    item
                    xs={3}
                >
                    <Box
                        sx={{
                            py: 2,
                        }}
                    >
                        <Avatar
                            sx={{
                                m: "auto",
                                width: "100px",
                                height: "100px",
                            }}
                        />
                    </Box>
                </Grid>

                <Grid
                    item
                    xs={9}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                        <Typography
                            sx={{
                                m: "auto",
                            }}
                        >
                            情報処理ネットワーク専攻
                            システム・エンジニアコース
                            二年
                            米田達稀
                        </Typography>
                </Grid>
            </Grid>

            <Grid
                container
            >
                <Grid
                    item
                    xs={3}
                >
                    <List
                        sx={{
                            borderRight: 1,
                            borderColor: "rgba(0, 0, 0, 0.12)",
                            "div + div": {
                                borderTop: 1,
                                borderColor: "rgba(0, 0, 0, 0.12)",
                            },
                            "div": {
                                justifyContent: "center",
                                height: "75px",
                            }
                        }}
                        disablePadding
                    >
                        <ListItemButton
                            onClick={() => props.setToggle(1)}>自己紹介
                        </ListItemButton>

                        <ListItemButton
                            onClick={() => props.setToggle(2)}>資格
                        </ListItemButton>

                        <ListItemButton
                            onClick={() => props.setToggle(3)}>Github
                        </ListItemButton>

                        <ListItemButton
                            onClick={() => props.setToggle(4)}>作品
                        </ListItemButton>

                        <ListItemButton
                            onClick={() => props.setToggle(5)}>スキル・資格
                        </ListItemButton>
                    </List>
                </Grid>

                <Grid
                    item
                    xs={9}
                    sx={{
                        p: 2,
                    }}
                >
                    <Box>
                        {
                            props.toggle === 1
                            &&

                            /*toggle1に作品画像出力＆選択
                            toggle2にスキル・経歴の表示ボックス＆入力欄
                            toggle3に取り組み業務の表示ボックス＆入力欄
                            */
                            <>
                                <Typography
                                    variant="h5"
                                >
                                    自己紹介
                                </Typography>

                                <Typography>
                                    document.getElementById("introductionBox").style.height = "150px"
                                    document.getElementById("closeBox").style.display = "none"
                                    document.getElementById("openBox").style.display = "revert"
                                    document.getElementById("skillsCareer").style.h
                                    document.getElementById("introductionBox").style.height = "150px"
                                    document.getElementById("closeBox").style.display = "none"
                                    document.getElementById("openBox").style.display = "revert"
                                    document.getElementById("skillsCareer").style.hdocument.getElementById("introductionBox").style.height = "150px"
                                    document.getElementById("closeBox").style.display = "none"
                                    document.getElementById("openBox").style.display = "revert"
                                    document.getElementById("skillsCareer").style.hdocument.getElementById("introductionBox").style.height = "150px"
                                    document.getElementById("closeBox").style.display = "none"
                                    document.getElementById("openBox").style.display = "revert"
                                    document.getElementById("skillsCareer").style.h
                                </Typography>
                            </>
                        }

                        {
                            props.toggle === 2
                            &&
                            <Box>
                                bbbbbbbbbbbbbbbb
                            </Box>
                        }

                        {
                            props.toggle === 3
                            &&
                            <Box>
                                ccccccccccccccccc
                            </Box>
                        }

                        {
                            props.toggle === 4
                            &&
                            <Box>
                                eeeeeeeeeeeeeeeeee
                            </Box>
                        }

                        {
                            props.toggle === 5
                            &&
                            <Box>
                                fffffffffffffffffff
                            </Box>
                        }
                    </Box>
                </Grid>
            </Grid>
        </Card >






















































































































        // <Card
        //     sx={{
        //         width: "60%",
        //         height: "600px",
        //         mx: "auto",
        //         borderRadius: 0,

        //     }}
        // >
        //     <Grid
        //         container
        //         sx={{
        //             p: 0,
        //         }}
        //     >
        //         <Grid
        //             item
        //             xs={12}
        //         >
        //             <Box
        //                 sx={{
        //                     textAlign: "center",
        //                     p: 5,
        //                 }}
        //             >
        //                 <Avatar
        //                     sx={{
        //                         width: "120px",
        //                         height: "120px",
        //                         mx: "auto",
        //                     }}
        //                 />


        //                 <Box
        //                     sx={{
        //                         // marginLeft: "120%",
        //                         // marginTop: "-30%",
        //                         // justifyContent: "center",
        //                     }}
        //                 >
        //                     Matsuo
        //                 </Box>



        //                 <Box
        //                     sx={{
        //                         // marginLeft: "200%",
        //                         // marginTop: "-9%",
        //                         // justifyContent: "center",

        //                     }}
        //                 >
        //                     情報処理ネットワーク専攻
        //                 </Box>
        //             </Box>
        //         </Grid>

        //         <Grid
        //             item
        //             xs={3}
        //             sx={{
        //                 p: 0,
        //                 pt: 6,
        //             }}
        //         >
        //             <Box
        //                 sx={{
        //                     display: "flex",
        //                     flexDirection: "column",
        //                 }}>
        //                 <Button variant="contained"
        //                     onClick={() => props.setToggle(1)}
        //                     sx={{
        //                         width: "260px",
        //                         height: "60px",
        //                         textAlign: "center",
        //                         border: 2,
        //                         borderRadius: 3,
        //                     }}>
        //                     <ListItemText primary="自己紹介" />
        //                 </Button>

        //                 <Button variant="contained"
        //                     onClick={() => props.setToggle(2)}
        //                     sx={{
        //                         width: "260px",
        //                         height: "60px",
        //                         textAlign: "center",
        //                         border: 2,
        //                         borderRadius: 3,

        //                     }}>
        //                     <ListItemText primary="資格" />
        //                 </Button>

        //                 <Button variant="contained"
        //                     onClick={() => props.setToggle(3)}
        //                     sx={{
        //                         width: "260px",
        //                         height: "60px",
        //                         textAlign: "center",
        //                         border: 2,
        //                         borderRadius: 3,
        //                     }}>
        //                     <ListItemText primary="GitHub" />
        //                 </Button>

        //                 <Button variant="contained"
        //                     onClick={() => props.setToggle(4)}
        //                     sx={{
        //                         width: "260px",
        //                         height: "60px",
        //                         textAlign: "center",
        //                         border: 2,
        //                         borderRadius: 3,
        //                     }}>
        //                     <ListItemText primary="作品" />
        //                 </Button>

        //                 <Button variant="contained"
        //                     onClick={() => props.setToggle(5)}
        //                     sx={{
        //                         width: "260px",
        //                         height: "60px",
        //                         textAlign: "center",
        //                         border: 2,
        //                         borderRadius: 3,
        //                     }}>
        //                     <ListItemText primary="スキル・経歴" />
        //                 </Button>
        //             </Box>

        //             {
        //                 props.toggle === 1
        //                 &&

        //                 /*toggle1に作品画像出力＆選択
        //                 toggle2にスキル・経歴の表示ボックス＆入力欄
        //                 toggle3に取り組み業務の表示ボックス＆入力欄
        //                 */
        //                 <Box>

        //                     aaaaaaaaaaaaaa
        //                 </Box>
        //             }


        //             {
        //                 props.toggle === 2
        //                 &&
        //                 <Box>

        //                     bbbbbbbbbbbbbbbb
        //                 </Box>
        //             }


        //             {
        //                 props.toggle === 3
        //                 &&
        //                 <Box>

        //                     ccccccccccccccccc
        //                 </Box>
        //             }


        //             {
        //                 props.toggle === 4
        //                 &&

        //                 <Box>

        //                     eeeeeeeeeeeeeeeeee
        //                 </Box>
        //             }


        //             {
        //                 props.toggle === 5
        //                 &&

        //                 <Box>

        //                     fffffffffffffffffff
        //                 </Box>
        //             }






        //         </Grid>


        //         <Grid
        //             xs={9}
        //             sx={{

        //             }}
        //         >

        //         </Grid>


        //     </Grid>


        //     {/*  */}

        //     <Grid
        //         container
        //     >
        //         <Grid
        //             item
        //             xs={3}
        //         >
        //             <Box>
        //                 a
        //             </Box>
        //         </Grid>

        //         <Grid
        //             item
        //             xs={9}
        //         >
        //             <Box>
        //                 b
        //             </Box>
        //         </Grid>
        //     </Grid>
        // </Card >
    )
}



export default ProfileDetail