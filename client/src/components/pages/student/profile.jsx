import { useEffect, useState } from "react"
import axios from "axios"
import { server } from "components/config"
import { ContainerLg } from "components/templates"
import { ProfilePost, ProfileFormUnit, ProfileSelect, ProfileSelectChip, TabPanel } from "components/molecules"

import { Box, Button, ButtonGroup, Card, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Skeleton, Tab, Tabs, TextField, Tooltip, Typography } from "@mui/material"
import { grey, teal } from "@mui/material/colors"
import PortraitRoundedIcon from '@mui/icons-material/PortraitRounded'
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded'
import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded'
import GitHubIcon from '@mui/icons-material/GitHub'
import { FollowUsers } from "components/organisms"
import ProfileTeamWork from "components/molecules/profileTeamWork"

const Profile = () => {
    const [profile, setProfile] = useState([])
    const [profileLists, setProfileLists] = useState([])
    const [selectTab, setSelectTab] = useState(1)

    // 進級制作
    const [teamWorkList, setTeamWorkList] = useState([])

    // 投稿
    const [posts, setPosts] = useState([])

    // フレンド
    const [toggleFollow, setToggleFollow] = useState(1)
    const [followList, setFollowList] = useState([])
    const [followerList, setFollowerList] = useState([])
    const [friendList, setFriendList] = useState([])

    // プロフィール編集
    const [editProfile, setEditProfile] = useState(false)
    const [coursesList, setCoursesList] = useState([])
    const [courseId, setCourseId] = useState("")
    const [yearsList, setYearsList] = useState([])
    const [yearId, setYearId] = useState("")
    const [qualificationsList, setQualificationsList] = useState([])
    const [qualificationIds, setQualificationIds] = useState([])
    const [programsList, setProgramsList] = useState([])
    const [programIds, setProgramIds] = useState([])
    const [toolsList, setToolsList] = useState([])
    const [toolIds, setToolIds] = useState([])
    const [languagesList, setLanguagesList] = useState([])
    const [languageIds, setLanguageIds] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = new FormData(e.currentTarget)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }

        if (data.get("icon")["name"]) {
            axios.post("/account/updateUserIcon", {
                icon: data.get("icon"),
            },
                config
            )
        }

        axios.post("/account/updateProfile", {
            name: data.get("name"),
            course: data.get("course"),
            year: data.get("year"),
            introduction: data.get("introduction"),
            qualifications: qualificationIds.join(),
            programming_languages: programIds.join(),
            tools_and_framework: toolIds.join(),
            country_language: languageIds.join(),
            github: data.get("github"),
        })
            .then(() => {
                window.location.reload()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        axios.post("/account/getTeamWorkList")
            .then((res) => {
                setTeamWorkList(res.data)
            })

        axios.post("/account/getFollowList")
            .then((res) => {
                setFollowList(res.data["followList"])
                setFollowerList(res.data["followerList"])
                setFriendList(res.data["friendList"])
            })

        axios.post("/post/getMyPost")
            .then((res) => {
                setPosts(res.data)
            })

        axios.post("/account/getProfile")
            .then((res) => {
                setProfile(res.data)
                setProfileLists([
                    {
                        title: "取得資格",
                        icon: <WorkspacePremiumRoundedIcon />,
                        content: res.data["qualification_names"],
                    },
                    {
                        title: "プログラミング言語",
                        icon: <TerminalRoundedIcon />,
                        content: res.data["program_names"],
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

        // 編集
        axios.post("/account/editProfile")
            .then((res) => {
                if (res.data["profile"]["course_id"]) {
                    setCourseId(res.data["profile"]["course_id"])
                }
                if (res.data["profile"]["year_id"]) {
                    setYearId(res.data["profile"]["year_id"])
                }
                if (res.data["profile"]["qualification_ids"]) {
                    setQualificationIds(res.data["profile"]["qualification_ids"].split(",").map(Number))
                }
                if (res.data["profile"]["program_ids"]) {
                    setProgramIds(res.data["profile"]["program_ids"].split(",").map(Number))
                }
                if (res.data["profile"]["tool_ids"]) {
                    setToolIds(res.data["profile"]["tool_ids"].split(",").map(Number))
                }
                if (res.data["profile"]["language_ids"]) {
                    setLanguageIds(res.data["profile"]["language_ids"].split(",").map(Number))
                }
                setEditProfile(res.data["profile"])
                setCoursesList(res.data["courses"])
                setYearsList(res.data["years"])
                setQualificationsList(res.data["qualifications"])
                setProgramsList(res.data["programs"])
                setToolsList(res.data["tools"])
                setLanguagesList(res.data["languages"])
            })
    }, [])

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
                            {
                                profile["image"]
                                    ?
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
                                    :
                                    <></>
                            }
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

                            <Tab
                                value={4}
                                label="フレンド"
                                onClick={() => setSelectTab(4)}
                            />

                            {/* 自分のページだけ */}
                            <Tab
                                value={5}
                                label="編集"
                                onClick={() => setSelectTab(5)}
                                sx={{
                                    ml: "auto"
                                }}
                            />
                        </Tabs>

                        <Box>
                            <Box
                                sx={{
                                    mx: "auto",
                                    width: "80%",
                                    minWidth: "300px",
                                    py: 2,
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
                                            teamWorkList.length
                                                ?
                                                teamWorkList.map((teamWork) => {
                                                    return (
                                                        <ProfileTeamWork
                                                            key={teamWork["team_work_id"]}
                                                            teamWork={teamWork}
                                                        />
                                                    )
                                                })

                                                :
                                                <Typography>
                                                    チームが見つかりません
                                                </Typography>
                                        }
                                    </Box>
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

                                {/* フレンド */}
                                <TabPanel
                                    value={selectTab}
                                    index={4}
                                >
                                    <ButtonGroup
                                        variant="outlined"
                                    >
                                        <Button
                                            variant={
                                                toggleFollow === 1
                                                    ?
                                                    "contained"
                                                    :
                                                    "outlined"
                                            }
                                            onClick={() => setToggleFollow(1)}
                                        >
                                            フォロー
                                        </Button>

                                        <Button
                                            variant={
                                                toggleFollow === 2
                                                    ?
                                                    "contained"
                                                    :
                                                    "outlined"
                                            }
                                            onClick={() => setToggleFollow(2)}
                                        >
                                            フォロワー
                                        </Button>

                                        <Button
                                            variant={
                                                toggleFollow === 3
                                                    ?
                                                    "contained"
                                                    :
                                                    "outlined"
                                            }
                                            onClick={() => setToggleFollow(3)}
                                        >
                                            相互フォロー
                                        </Button>
                                    </ButtonGroup>

                                    <Box>
                                        <FollowUsers
                                            index={1}
                                            value={toggleFollow}
                                            lists={followList}
                                        />

                                        <FollowUsers
                                            index={2}
                                            value={toggleFollow}
                                            lists={followerList}
                                        />

                                        <FollowUsers
                                            index={3}
                                            value={toggleFollow}
                                            lists={friendList}
                                        />
                                    </Box>
                                </TabPanel>
                                {/* フレンド */}

                                {/* <<< 編集 */}
                                <TabPanel
                                    value={selectTab}
                                    index={5}
                                >
                                    <Box
                                        component="form"
                                        onSubmit={handleSubmit}
                                        sx={{
                                            "div + div": {
                                                mt: 4,
                                            }
                                        }}
                                    >
                                        <ProfileFormUnit
                                            title="一般"
                                        >
                                            <TextField
                                                label="ユーザー名"
                                                name="name"
                                                size="small"
                                                defaultValue={editProfile["name"]}
                                                fullWidth
                                            />

                                            <TextField
                                                label="メールアドレス"
                                                name="mail"
                                                size="small"
                                                defaultValue={editProfile["mail"]}
                                                fullWidth
                                                disabled
                                            />

                                            <Button
                                                variant="outlined"
                                                component="label"
                                                fullWidth
                                                sx={{
                                                    mt: 2,
                                                }}
                                            >
                                                <PortraitRoundedIcon
                                                    sx={{
                                                        mr: 1,
                                                    }}
                                                />

                                                アイコンの選択

                                                <Box
                                                    component="input"
                                                    type="file"
                                                    name="icon"
                                                    accept=".png, .jpg, .jpeg"
                                                    hidden
                                                />
                                            </Button>
                                        </ProfileFormUnit>

                                        <ProfileFormUnit
                                            title="専攻情報"
                                        >
                                            <ProfileSelect
                                                label="専攻"
                                                name="course"
                                                value={courseId}
                                                lists={coursesList}
                                                set={setCourseId}
                                                sqlId="course_id"
                                                sqlName="course_name"
                                            />

                                            <ProfileSelect
                                                label="学年"
                                                name="year"
                                                value={yearId}
                                                lists={yearsList}
                                                set={setYearId}
                                                sqlId="year_id"
                                                sqlName="year_name"
                                            />
                                        </ProfileFormUnit>

                                        <ProfileFormUnit
                                            title="自己紹介・自己アピール"
                                        >
                                            <TextField
                                                label="自己紹介・自己アピール"
                                                name="introduction"
                                                rows={5}
                                                fullWidth
                                                multiline
                                                defaultValue={editProfile["introduction"]}
                                            />
                                        </ProfileFormUnit>

                                        <ProfileFormUnit
                                            title="スキル"
                                        >
                                            <ProfileSelectChip
                                                label="資格"
                                                select={qualificationIds}
                                                setSelect={setQualificationIds}
                                                lists={qualificationsList}
                                                sqlId="qualification_id"
                                                sqlName="qualification_name"
                                            />

                                            <ProfileSelectChip
                                                label="プログラミング言語"
                                                select={programIds}
                                                setSelect={setProgramIds}
                                                lists={programsList}
                                                sqlId="program_id"
                                                sqlName="program_name"
                                            />

                                            <ProfileSelectChip
                                                label="ツール・フレームワーク"
                                                select={toolIds}
                                                setSelect={setToolIds}
                                                lists={toolsList}
                                                sqlId="tool_id"
                                                sqlName="tool_name"
                                            />

                                            <ProfileSelectChip
                                                label="言語"
                                                select={languageIds}
                                                setSelect={setLanguageIds}
                                                lists={languagesList}
                                                sqlId="language_id"
                                                sqlName="language_name"
                                            />
                                        </ProfileFormUnit>

                                        <ProfileFormUnit
                                            title="Github"
                                        >
                                            <TextField
                                                label="Github"
                                                name="github"
                                                size="small"
                                                fullWidth
                                                defaultValue={editProfile["github"]}
                                            />
                                        </ProfileFormUnit>

                                        <Button
                                            type="submit"
                                            variant="contained"
                                            fullWidth
                                            sx={{
                                                mt: 5,
                                            }}
                                        >
                                            保存
                                        </Button>
                                    </Box>
                                </TabPanel>
                                {/* 編集 >>> */}
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Card>
        </ContainerLg >
    )
}

export default Profile