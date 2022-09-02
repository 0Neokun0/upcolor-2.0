import axios from "axios"
import { gantt } from 'dhtmlx-gantt'
import { useEffect } from "react"

import { TeamWorkLayout } from "components/templates"
import { TeamDetail, TeamJoinForm } from "components/organisms"
import { useState } from "react";

const TeamWork = () => {
    const [teamId, setTeamId] = useState(null)
    const [team, setTeam] = useState([])
    const [teamMembers, setTeamMembers] = useState([])
    const [currentZoom, setCurrentZoom] = useState("Days")
    const data = {
        data: [],
        links: [],
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
    }

    const handleZoomChange = (zoom) => {
        setCurrentZoom(zoom)
    }

    const setGantt = () => {
        const formatDate = (currentDatetime) => {
            // let formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds();
            let formattedDate = currentDatetime.getFullYear() + "-" + (currentDatetime.getMonth() + 1) + "-" + currentDatetime.getDate()

            return formattedDate;
        }

        axios.post("/teamWork/getGantt", {
            teamWorkId: teamId,
        })
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
    }

    const saveGantt = () => {
        const tasks = []
        const links = gantt.getLinks()
        gantt.eachTask((task) => {
            tasks.push(task)
        })

        axios.post("/teamWork/saveGantt", {
            teamWorkId: teamId,
            tasks: tasks,
            links: links,
        })
    }

    useEffect(() => {
        axios.post("/teamWork/getJoinedTeamWork")
            .then((res) => {
                setTeamId(res.data[0]["team_work_id"])
                setTeam(res.data)
            })
    }, [])

    useEffect(() => {
        setGantt()
    }, [teamId])

    useEffect(() => {
        axios.post("/teamWork/getTeamMembers", {
            teamWorkId: teamId,
        })
            .then((res) => {
                setTeamMembers(res.data)
            })
    }, [teamId])

    return (
        team
            ?
            <TeamWorkLayout
                component={
                    <TeamDetail
                        currentZoom={currentZoom}
                        data={data}
                        handleZoomChange={handleZoomChange}
                        saveGantt={saveGantt}

                        team={team}

                        teamMembers={teamMembers}
                    />
                }
            />
            :
            <TeamWorkLayout
                component={
                    <TeamJoinForm
                        handleTeamCreate={handleTeamCreate}
                    />
                }
            />
    );
}

export default TeamWork;
