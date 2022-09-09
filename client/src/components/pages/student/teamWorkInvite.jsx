import { useParams } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"
import { TeamWorkLayout } from "components/templates"
import { TeamWorkInviteForm } from "components/organisms"

const TeamWorkInvite = () => {
    const inviteToken = useParams()["inviteToken"]

    useEffect(() => {
        axios.post("/teamwork/joinTeamWork", {
            token: inviteToken,
        })
        .then((res) => {
            console.log(res.data)
        })
    }, []);
    return (
        <TeamWorkLayout
            component={
                <TeamWorkInviteForm />
            }
        />
    )
}

export default TeamWorkInvite