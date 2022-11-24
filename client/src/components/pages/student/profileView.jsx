import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { server } from "components/config"

import { ContainerLg } from "components/templates"
import { ProfilePost, TabPanel } from "components/molecules"

import { Box, Button, Card, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Tab, Tabs, Tooltip, Typography } from "@mui/material"
import { grey, teal } from "@mui/material/colors"
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded'
import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded'
import GitHubIcon from '@mui/icons-material/GitHub'

const ProfileView = () => {
    const userId = useParams()["userId"]

    const [profile, setProfile] = useState(false)
    const [profileLists, setProfileLists] = useState([])
    const [selectTab, setSelectTab] = useState(1)

    // フォロー
    const [state, setState] = useState(false)
    const [showFollowButton, setShowFollowButton] = useState(false)

    // 投稿
    const [posts, setPosts] = useState([])

    const toggleFollow = () => {
        axios.post("/account/follow", {
            target: userId,
        })

        setState(!state)
    }

    useEffect(() => {
        axios.post("/account/selfCheck", {
            userId: userId,
        })
            .then((res) => {
                setShowFollowButton(res.data)
            })

        axios.post("/account/getFollow", {
            target: userId,
        })
            .then((res) => {
                setState(Boolean(res.data))
            })

        axios.post("/post/getTargetPost", {
            userId: userId,
        })
            .then((res) => {
                setPosts(res.data)
            })

        axios.post("/account/getStudentProfile", {
            userId: userId,
        })
            .then((res) => {
                if (res) {
                    setProfile(res.data)
                    setProfileLists([
                        {
                            title: "取得資格",
                            icon: <WorkspacePremiumRoundedIcon />,
                            content: res.data["qualification_names"]
                        },
                        {
                            title: "プログラミング言語",
                            icon: <TerminalRoundedIcon />,
                            content: res.data["program_names"]
                        },
                        {
                            title: "メールアドレス",
                            icon: <EmailRoundedIcon />,
                            content: res.data["mail"],
                        },
                        {
                            title: "Github",
                            icon: <GitHubIcon />,
                            content: res.data["github"],
                        },
                    ])
                } else {

                }
            })
    }, [userId])

    return (
        <ContainerLg>
            {
                profile
                    ?
                    <Card
                        sx={{
                            borderRadius: "15px",
                        }}
                    >
                        <Grid
                            container
                        >
                            <Grid
                                item
                                xs
                                sx={{
                                    py: 2,
                                    px: 4,
                                    backgroundColor: teal[50],
                                    minWidth: "300px",
                                }}
                            >
                                <Box
                                    textAlign="center"
                                >
                                    <Box
                                        component="img"
                                        src={server.host + "/images/icon/" + profile["image"]}
                                        sx={{
                                            width: "100%",
                                            aspectRatio: "1/1",
                                            maxWidth: "300px",
                                            borderRadius: "50%",
                                            mb: 2,
                                            objectFit: "cover"
                                        }}
                                    />
                                </Box>

                                <Typography
                                    variant="h4"
                                    fontWeight="bold"
                                >
                                    {profile["name"]}
                                </Typography>

                                <Typography
                                    sx={{
                                        pl: 2,
                                        color: grey[600],
                                        borderLeft: 3,
                                        borderColor: grey[400],
                                        whiteSpace: "pre-wrap",
                                        mb: 2,
                                    }}
                                >
                                    {profile["course_name"]}
                                </Typography>

                                {
                                    showFollowButton
                                        ?
                                        state
                                            ?
                                            <Button
                                                variant="contained"
                                                fullWidth
                                                onClick={toggleFollow}
                                            >
                                                フォロー解除
                                            </Button>

                                            :
                                            <Button
                                                variant="outlined"
                                                fullWidth
                                                onClick={toggleFollow}
                                            >
                                                フォロー
                                            </Button>
                                        :
                                        <></>
                                }

                                <Divider
                                    sx={{
                                        my: 2,
                                    }}
                                />

                                <List
                                    disablePadding
                                    sx={{
                                        "li + li": {
                                            mt: 1,
                                        }
                                    }}
                                >
                                    {
                                        profileLists.map((list, index) => {
                                            return (
                                                <ListItem
                                                    key={index}
                                                    disableGutters
                                                    disablePadding
                                                    sx={{
                                                        alignItems: "initial",
                                                    }}
                                                >
                                                    <ListItemIcon>
                                                        <Tooltip
                                                            title={list["title"]}
                                                            placement="right"
                                                            sx={{
                                                                color: grey[700],
                                                            }}
                                                        >
                                                            {list["icon"]}
                                                        </Tooltip>
                                                    </ListItemIcon>

                                                    <ListItemText
                                                        sx={{
                                                            whiteSpace: "pre-wrap",
                                                            m: 0,
                                                        }}
                                                    >
                                                        {
                                                            list["content"]
                                                                ?
                                                                list["content"]

                                                                :
                                                                "未設定"
                                                        }
                                                    </ListItemText>
                                                </ListItem>
                                            )
                                        })
                                    }
                                </List>
                            </Grid>

                            <Grid
                                item
                                xs
                                sx={{
                                    minWidth: "65%",
                                }}
                            >
                                <Tabs
                                    value={selectTab}
                                    sx={{
                                        borderBottom: 1,
                                        borderColor: 'divider',
                                    }}
                                >
                                    <Tab
                                        value={1}
                                        label="自己紹介"
                                        onClick={() => setSelectTab(1)}
                                    />

                                    <Tab
                                        value={2}
                                        label="進級制作"
                                        onClick={() => setSelectTab(2)}
                                    />

                                    <Tab
                                        value={3}
                                        label="投稿"
                                        onClick={() => setSelectTab(3)}
                                    />
                                </Tabs>

                                <Box
                                    sx={{
                                        py: 2,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            mx: "auto",
                                            width: "80%",
                                            minWidth: "300px",
                                        }}
                                    >
                                        {/* 自己紹介 */}
                                        <TabPanel
                                            value={selectTab}
                                            index={1}
                                        >
                                            {
                                                profile["introduction"]
                                                    ?
                                                    profile["introduction"]
                                                    :
                                                    "未設定"
                                            }
                                        </TabPanel>
                                        {/* 自己紹介 */}

                                        {/* 進級制作 */}
                                        <TabPanel
                                            value={selectTab}
                                            index={2}
                                        >
                                            進級制作
                                        </TabPanel>
                                        {/* 進級制作 */}

                                        {/* 投稿 */}
                                        <TabPanel
                                            value={selectTab}
                                            index={3}
                                        >
                                            <Box
                                                sx={{
                                                    "a": {
                                                        display: "block"
                                                    },
                                                    "a + a": {
                                                        mt: 2,
                                                    },
                                                }}
                                            >
                                                {
                                                    posts.length
                                                        ?
                                                        posts.map((post) => {
                                                            return (
                                                                <ProfilePost
                                                                    key={post["post_id"]}
                                                                    post={post}
                                                                />
                                                            )
                                                        })

                                                        :
                                                        <Typography>
                                                            投稿がありません
                                                        </Typography>
                                                }
                                            </Box>
                                        </TabPanel>
                                        {/* 投稿 */}
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Card>

                    :
                    <Typography>
                        プロフィールが見つかりません
                    </Typography>
            }
        </ContainerLg>
    )
}

export default ProfileView