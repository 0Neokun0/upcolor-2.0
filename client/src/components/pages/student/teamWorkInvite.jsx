import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { TeamWorkLayout } from "components/templates"
import { TeamWorkInviteForm } from "components/organisms"

const TeamWorkInvite = () => {
    const inviteToken = useParams()["inviteToken"]
    const [team, setTeam] = useState(null)
    const [joinCheck, setJoinCheck] = useState(false)

    const joinTeam = () => {
        axios.post("/teamWork/updateJoinTeam", {
            token: inviteToken,
        })
            .then((res) => {
                if (res.data) {
                    window.location.href = "/teamwork"
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
                setTeam(res.data)
            })
    }, [inviteToken])

    return (
        <TeamWorkLayout>
            <TeamWorkInviteForm
                team={team}
                joinCheck={joinCheck}
                joinTeam={joinTeam}
            />
        </TeamWorkLayout>
    )
}

export default TeamWorkInvite