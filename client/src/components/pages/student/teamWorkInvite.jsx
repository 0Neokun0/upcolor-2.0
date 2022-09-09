import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { TeamWorkLayout } from "components/templates"
import { TeamWorkInviteForm } from "components/organisms"

const TeamWorkInvite = () => {
    const inviteToken = useParams()["inviteToken"]
    const [teamWork, setTeamWork] = useState([])

    useEffect(() => {
        axios.post("/teamWork/checkTeamWork", {
            token: inviteToken,
        })
            .then((res) => {
                console.log(res.data[0])
                setTeamWork(res.data[0])
            })
    }, [inviteToken])

    return (
        <TeamWorkLayout
            component={
                <TeamWorkInviteForm
                    teamWork={teamWork}
                />
            }
        />
    )
}

export default TeamWorkInvite