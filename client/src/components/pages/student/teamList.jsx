import axios from "axios"
import { useEffect } from "react"
import { TeamListLayout } from "components/templates"
import { TeamView } from "components/organisms"
import { useState } from "react"

const TeamList = () => {
    const [teams, setTeams] = useState([])

    useEffect(() => {
        axios.post("/teamWork/getTeamWorkList")
        .then((res) => {
            setTeams(res.data)
            console.log(res.data)
        })
    }, [])

    return (
        <TeamListLayout
            component={
                <TeamView
                    teams={teams}
                />
            }
        />
    );
}

export default TeamList
