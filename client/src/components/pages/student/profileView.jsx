import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { server } from "components/config"

import { ContainerLg } from "components/templates"
import { TabPanel } from "components/molecules"

import { Box, Button, Card, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Tab, Tabs, Tooltip, Typography } from "@mui/material"
import { grey, teal } from "@mui/material/colors"
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded'
import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded'
import GitHubIcon from '@mui/icons-material/GitHub'

const ProfileView = () => {
    const userId = useParams()["userId"]

    const [profile, setProfile] = useState([])
    const [profileLists, setProfileLists] = useState([])
    const [selectTab, setSelectTab] = useState(1)

    useEffect(() => {
        axios.post("/account/getStudentProfile", {
            userId: userId,
        })
            .then((res) => {
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
            })
    }, [userId])

    return (
        profile
        &&
        <ContainerLg>
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

                        <Button
                            variant="outlined"
                            fullWidth
                        >
                            フォロー
                        </Button>

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
                                mx: "auto",
                                width: "80%",
                                minWidth: "300px",
                            }}
                        >
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

                            <TabPanel
                                value={selectTab}
                                index={2}
                            >
                                進級制作
                            </TabPanel>

                            <TabPanel
                                value={selectTab}
                                index={3}
                            >
                                投稿
                            </TabPanel>
                        </Box>
                    </Grid>
                </Grid>
            </Card>
        </ContainerLg>
    )
}

export default ProfileView