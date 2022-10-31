import axios from "axios"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { TeamWorkLayout } from "components/templates"
import { GroupInviteForm } from "components/organisms"
import { useState } from "react"

const GroupInvite = () => {
    const inviteToken = useParams()["inviteToken"]
    const [joinCheck, setJoinCheck] = useState(false)

    useEffect(() => {
        axios.post("/group/joinGroup", {
            token: inviteToken,
        })
            .then((res) => {
                if (!res.data) {
                    setJoinCheck(true)
                } else {
                    window.location.href = "/group"
                }
            })
    }, [inviteToken])

    return (
        <TeamWorkLayout
            component={
                <GroupInviteForm
                    joinCheck={joinCheck}
                />
            }
        />
    )
}

export default GroupInvite