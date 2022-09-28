import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { TeamWorkLayout } from "components/templates"
import { TeamWorkInviteForm } from "components/organisms"

const TeamWorkInvite = () => {
    const inviteToken = useParams()["inviteToken"]
    const [teamWork, setTeamWork] = useState([])
    const [joinCheck, setJoinCheck] = useState(false)

    const teamJoinSubmit = () => {
        axios.post("/teamWork/updateJoinTeam", {
            token: inviteToken,
        })
        .then((res) => {
            if (res) {
                window.location.href = "teamwork"
            } else {
                setJoinCheck(true)
            }
        })
    }

    useEffect(() => {
        axios.post("/teamWork/checkTeamWork", {
            token: inviteToken,
        })
            .then((res) => {
                setTeamWork(res.data[0])
            })
    }, [inviteToken])

    return (
        <TeamWorkLayout
            component={
                <TeamWorkInviteForm
                    teamWork={teamWork}
                    teamJoinSubmit={teamJoinSubmit}

                    joinCheck={joinCheck}
                />
            }
        />
    )
}

export default TeamWorkInvite