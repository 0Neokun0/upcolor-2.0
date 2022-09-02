import { useEffect, useState } from "react"
import axios from "axios"
import { TeamWorkInfoLayout } from "components/templates"
import { TeamWorkInfoForm } from "components/organisms"

const TeamWorkInfo = () => {
    const [team, setTeam] = useState([])

    const toggleEditInfo = (e) => {
        e.preventDefault()

        const data = new FormData(e.currentTarget)

        axios.post("/teamWork/updateTeamWorkInfo", {
            teamWorkId: team[0]["team_work_id"],
            description: data.get("description"),
            target: data.get("target"),
            strategy: data.get("strategy"),
        })
    }

    useEffect(() => {
        axios.post("/teamWork/getJoinedTeamWork")
            .then((res) => {
                setTeam(res.data)
            })
    }, [])

    return (
        <TeamWorkInfoLayout
            component={
                <TeamWorkInfoForm
                    team={team}
                    toggleEditInfo={toggleEditInfo}
                />
            }
        />
    );
}

export default TeamWorkInfo;
