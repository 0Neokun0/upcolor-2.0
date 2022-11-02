import axios from "axios"
import { gantt } from 'dhtmlx-gantt'
import { useCallback, useEffect, useState } from "react"

import { TeamWorkLayout } from "components/templates"
import { TeamJoinForm, TeamOutline } from "components/organisms"
import { TeamInfoCard } from "components/molecules"
import Gantt from "components/atoms/gantt"
import Toolbar from "components/atoms/toolbar"
import { client } from "components/config"

import { Box, Button, Dialog, DialogActions, DialogTitle, Divider, Drawer, FormControlLabel, Hidden, IconButton, Stack, Switch, Tooltip } from "@mui/material"
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded'

const TeamWork = () => {
    const auth = true

    // 取得したチーム情報
    const [team, setTeam] = useState(false)

    const [changeFlg, setChangeFlg] = useState(false)

    // チーム設定
    const [settingToggle, setSettingToggle] = useState(false)
    const [inviteState, setInviteState] = useState(false)
    const [publishChat, setPublishChat] = useState(false)
    const [publishGantt, setPublishGantt] = useState(false)
    const [leaveModal, setLeaveModal] = useState(false)

    // Popover切り替え
    const [togglePopover, setTogglePopover] = useState(null)

    // チーム紹介
    const [description, setDescription] = useState(false)
    const [target, setTarget] = useState(false)
    const [strategy, setStrategy] = useState(false)

    const [currentZoom, setCurrentZoom] = useState("Days")

    const data = {
        data: [],
        links: [],
    }

    // チーム設定保存
    const saveSetting = () => {
        axios.post("/teamWork/updateSetting", {
            inviteState: inviteState,
            publishChat: publishChat,
            publishGantt: publishGantt,
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)

        axios.post("teamWork/updateTeamWorkInfo", {
            type: data.get("type"),
            content: data.get("content"),
        })
            .then(() => {
                setChangeFlg(!changeFlg)

                if (data.get("type") === "description") {
                    setDescription(!description)
                }
                if (data.get("type") === "target") {
                    setTarget(!target)
                }
                if (data.get("type") === "strategy") {
                    setStrategy(!strategy)
                }
            })
    }

    const handleTeamCreate = (e) => {
        e.preventDefault()

        const data = new FormData(e.currentTarget)

        axios.post("teamWork/addTeamWork", {
            teamName: data.get("teamName"),
            teamWorkName: data.get("teamWorkName"),
            setChatPublish: true,
            setGanttPublish: true,
        })

        window.location.reload()
    }

    // 招待Url取得
    const genInviteUrl = (e) => {
        const target = e.currentTarget

        axios.post("teamWork/getInviteUrl")
            .then((res) => {
                navigator.clipboard.writeText(client.host + "/teamworkinvite/" + res.data)
                    .then(() => {
                        setTogglePopover(target)
                    })
            })
    }

    const handleZoomChange = (zoom) => {
        setCurrentZoom(zoom)
    }

    const setGantt = useCallback(() => {
        const formatDate = (currentDatetime) => {
            // let formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds()
            let formattedDate = currentDatetime.getFullYear() + "-" + (currentDatetime.getMonth() + 1) + "-" + currentDatetime.getDate()

            return formattedDate
        }

        axios.post("/teamWork/getGantt")
            .then((res) => {
                const tasks = res.data.tasks
                const links = res.data.links

                if (tasks.length) {
                    tasks.map((task) => {
                        const start_date = formatDate(new Date(task["task_start"]))
                        const end_date = formatDate(new Date(task["task_end"]))

                        return (
                            gantt.addTask({
                                id: task["task_id"],
                                text: task["task_name"],
                                start_date: start_date,
                                end_date: end_date,
                                progress: task["task_progress"],
                                parent: task["parent_task_id"],
                            })
                        )
                    })
                }

                if (links) {
                    links.map((link) => {
                        return (
                            gantt.addLink({
                                id: link["link_id"],
                                source: link["source"],
                                target: link["target"],
                                type: link["type"],
                            })
                        )
                    })
                }
            })
    }, [])

    // ガントチャート保存
    const saveGantt = () => {
        const tasks = []
        const links = gantt.getLinks()

        gantt.eachTask((task) => {
            tasks.push(task)
        })

        axios.post("/teamWork/saveGantt", {
            tasks: tasks,
            links: links,
        })
    }

    const leaveTeam = () => {
        axios.post("/teamWork/leaveTeam")

        window.location.reload()
    }

    useEffect(() => {
        axios.post("/teamWork/getJoinedTeam")
            .then((res) => {
                setTeam(res.data)
                console.log(res.data)

                if (res.data["teamInfo"]) {
                    axios.post("/teamWork/getSetting")
                        .then((res) => {
                            setInviteState(Boolean(res.data["invite"]))
                            setPublishChat(Boolean(res.data["chat"]))
                            setPublishGantt(Boolean(res.data["gantt"]))
                        })
                }
            })

        setGantt()
    }, [setGantt, changeFlg])

    return (
        team["teamInfo"]
            ?
            <>
                <TeamWorkLayout>
                    <Stack
                        direction="row"
                        sx={{
                            mb: 2,
                        }}
                    >
                        <Hidden
                            mdDown
                        >
                            {
                                team
                                    ?
                                    <Box
                                        sx={{
                                            width: "400px",
                                            mr: 2,
                                        }}
                                    >
                                        <TeamOutline
                                            auth={auth}
                                            team={team}
                                            togglePopover={togglePopover}
                                            setTogglePopover={setTogglePopover}
                                            setSettingToggle={setSettingToggle}
                                            genInviteUrl={genInviteUrl}
                                        />
                                    </Box>
                                    :
                                    <></>
                            }
                        </Hidden>

                        <Box
                            width="100%"
                        >
                            <Hidden
                                mdUp
                            >
                                {
                                    team
                                        ?
                                        <>
                                            <TeamOutline
                                                team={team}
                                                togglePopover={togglePopover}
                                                setTogglePopover={setTogglePopover}
                                                setSettingToggle={setSettingToggle}
                                                genInviteUrl={genInviteUrl}
                                            />

                                            <Divider
                                                sx={{
                                                    mb: 2,
                                                }}
                                            />
                                        </>
                                        :
                                        <></>
                                }
                            </Hidden>

                            {
                                team["teamInfo"]
                                    ?
                                    <Box
                                        sx={{
                                            ".MuiPaper-root + .MuiPaper-root": {
                                                mt: 2,
                                            }
                                        }}
                                    >
                                        <TeamInfoCard
                                            auth={auth}
                                            title="作品説明"
                                            name="description"
                                            state={description}
                                            toggleState={setDescription}
                                            content={team["teamInfo"]["team_work_description"]}
                                            onSubmit={onSubmit}
                                        />

                                        <TeamInfoCard
                                            auth={auth}
                                            title="ターゲット"
                                            name="target"
                                            state={target}
                                            toggleState={setTarget}
                                            content={team["teamInfo"]["team_target"]}
                                            onSubmit={onSubmit}
                                        />

                                        <TeamInfoCard
                                            auth={auth}
                                            title="競合サービス、差別化"
                                            name="strategy"
                                            state={strategy}
                                            toggleState={setStrategy}
                                            content={team["teamInfo"]["team_strategy"]}
                                            onSubmit={onSubmit}
                                        />
                                    </Box>
                                    :
                                    <></>
                            }
                        </Box>
                    </Stack>

                    <Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <Box>
                                <Toolbar
                                    zoom={currentZoom}
                                    onZoomChange={handleZoomChange}
                                />
                            </Box>

                            <Button
                                variant="contained"
                                size="small"
                                onClick={saveGantt}
                            >
                                保存
                            </Button>
                        </Box>

                        <Box
                            className="gantt-container"
                            sx={{
                                height: "400px",
                            }}
                        >
                            <Gantt
                                zoom={currentZoom}
                                tasks={data}
                            />
                        </Box>
                    </Box>

                    <Drawer
                        anchor={"left"}
                        open={settingToggle}
                        onClose={() => setSettingToggle(false)}
                    >
                        <Box
                            sx={{
                                px: 5,
                                py: 2,
                            }}
                        >
                            <Box
                                sx={{
                                    mb: 2,
                                }}
                            >
                                <Box>
                                    <FormControlLabel
                                        label="メンバー募集状態"
                                        control={
                                            <Switch
                                                checked={inviteState}
                                                onChange={(e) => setInviteState(e.target.checked)}
                                            />
                                        }
                                    />
                                </Box>

                                <Box>
                                    <FormControlLabel
                                        label="チャット公開"
                                        control={
                                            <Switch
                                                checked={publishChat}
                                                onChange={(e) => setPublishChat(e.target.checked)}
                                            />
                                        }
                                    />
                                </Box>

                                <Box>
                                    <FormControlLabel
                                        label="ガントチャート公開"
                                        control={
                                            <Switch
                                                checked={publishGantt}
                                                onChange={(e) => setPublishGantt(e.target.checked)}
                                            />
                                        }
                                    />
                                </Box>

                                <Button
                                    variant="contained"
                                    size="small"
                                    fullWidth
                                    sx={{ mt: "auto" }}
                                    onClick={saveSetting}
                                >
                                    設定を保存
                                </Button>
                            </Box>

                            <Box
                                sx={{
                                    textAlign: "end"
                                }}
                            >
                                <Tooltip
                                    title="チームを脱退"
                                    color="error"
                                >
                                    <IconButton
                                        onClick={() => setLeaveModal(true)}
                                    >
                                        <LogoutRoundedIcon />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        </Box>
                    </Drawer>
                </TeamWorkLayout>

                {/* チーム脱退ダイアログ */}
                <Dialog
                    open={Boolean(leaveModal)}
                    onClose={() => setLeaveModal(false)}
                >
                    <DialogTitle>
                        本当にチームを抜けますか?
                    </DialogTitle>

                    <DialogActions>
                        <Button
                            onClick={() => setLeaveModal(false)}
                        >
                            キャンセル
                        </Button>

                        <Button
                            onClick={leaveTeam}
                        >
                            チームを抜ける
                        </Button>
                    </DialogActions>
                </Dialog>
            </>
            :
            <TeamJoinForm
                handleTeamCreate={handleTeamCreate}
            />
    )
}

export default TeamWork
