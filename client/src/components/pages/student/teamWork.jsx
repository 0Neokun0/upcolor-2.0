import axios from "axios"
import { gantt } from 'dhtmlx-gantt'
import { useCallback, useEffect, useState } from "react"

import { TeamWorkLayout } from "components/templates"
import { TeamDetail, TeamJoinForm, TeamOutline } from "components/organisms"
import Gantt from "components/atoms/gantt"
import Toolbar from "components/atoms/toolbar"

import { Box, Button, Divider, Hidden, Stack } from "@mui/material"
import { TeamInfoCard } from "components/molecules"

const TeamWork = () => {
    const [team, setTeam] = useState(false)

    const [settingToggle, setSettingToggle] = useState(false)
    const [currentZoom, setCurrentZoom] = useState("Days")

    // const [anchorEl, setAnchorEl] = useState(null)
    // const [leaveModal, setLeaveModal] = useState(false)

    // const [inviteState, setInviteState] = useState(false)
    // const [chatState, setChatState] = useState(false)
    // const [ganttState, setGanttState] = useState(false)

    const data = {
        data: [],
        links: [],
    }

    // const saveSetting = () => {
    //     axios.post("/teamWork/updateSetting", {
    //         teamWorkId: teamId,
    //         inviteState: inviteState,
    //         chatState: chatState,
    //         ganttState: ganttState,
    //     })
    // }

    // const leaveModalOpen = () => {
    //     setLeaveModal(true)
    // }
    // const leaveModalClose = () => {
    //     setLeaveModal(false)
    // }

    // const handleTeamCreate = (e) => {
    //     e.preventDefault()

    //     const data = new FormData(e.currentTarget)

    //     axios.post("teamWork/addTeamWork", {
    //         teamName: data.get("teamName"),
    //         teamWorkName: data.get("teamWorkName"),
    //         setChatPublish: true,
    //         setGanttPublish: true,
    //     })

    //     window.location.reload()
    // }

    // const handleGenerateInviteUrl = (e) => {
    //     const target = e.currentTarget

    //     axios.post("teamWork/getInviteURL", {
    //         teamWorkId: teamId,
    //     })
    //         .then((res) => {
    //             navigator.clipboard.writeText("http://localhost:3000/teamworkinvite/" + res.data)
    //                 .then(() => {
    //                     setAnchorEl(target)
    //                 })
    //         })
    // }

    // const handleClose = () => {
    //     setAnchorEl(null)
    // }

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

    // const leaveTeam = () => {
    //     axios.post("/teamWork/leaveTeam")

    //     window.location.reload()
    // }

    // useEffect(() => {
    //     axios.post("/teamWork/getJoinedTeamWork")
    //         .then((res) => {
    //             setTeamId(res.data[0]["team_work_id"])
    //             setTeam(res.data)

    //             axios.post("/teamWork/getSetting", {
    //                 teamWorkId: res.data[0]["team_work_id"],
    //             })
    //                 .then((res) => {
    //                     setInviteState(Boolean(res.data["invite"]))
    //                     setChatState(Boolean(res.data["chat"]))
    //                     setGanttState(Boolean(res.data["gantt"]))
    //                 })
    //         })
    // }, [])

    useEffect(() => {
        axios.post("/teamWork/getJoinedTeam")
            .then((res) => {
                setTeam(res.data)
                console.log(res.data)
            })
        
        setGantt()
    }, [setGantt])

    return (
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
                                    team={team}
                                    setSettingToggle={setSettingToggle}
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
                                        setSettingToggle={setSettingToggle}
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
                                    title="作品説明"
                                    content={team["teamInfo"]["team_work_description"]}
                                />

                                <TeamInfoCard
                                    title="ターゲット"
                                    content={team["teamInfo"]["team_target"]}
                                />

                                <TeamInfoCard
                                    title="競合サービス、差別化"
                                    content={team["teamInfo"]["team_strategy"]}
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
        </TeamWorkLayout>

        // team.length
        //     ?
        //     <TeamWorkLayout>
        //         <TeamDetail
        //             currentZoom={currentZoom}
        //             data={data}
        //             handleZoomChange={handleZoomChange}
        //             saveGantt={saveGantt}

        //             team={team}
        //             teamMembers={teamMembers}
        //             anchorEl={anchorEl}
        //             handleGenerateInviteUrl={handleGenerateInviteUrl}
        //             handleClose={handleClose}

        //             leaveTeam={leaveTeam}
        //             leaveModal={leaveModal}
        //             leaveModalOpen={leaveModalOpen}
        //             leaveModalClose={leaveModalClose}

        //             inviteState={inviteState}
        //             chatState={chatState}
        //             ganttState={ganttState}

        //             setInviteState={setInviteState}
        //             setChatState={setChatState}
        //             setGanttState={setGanttState}
        //             saveSetting={saveSetting}
        //         />
        //     </TeamWorkLayout>
        //     :
        //     <TeamWorkLayout>
        //         <TeamJoinForm
        //             handleTeamCreate={handleTeamCreate}
        //         />
        //     </TeamWorkLayout>
    )
}

export default TeamWork
