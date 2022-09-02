import axios from "axios";
import { TeamWorkLayout } from "components/templates"
import { useEffect } from "react";

const TeamWork = () => {
    useEffect(() => {
        axios.post("/teamWork/getJoinedTeamWork")
            .then((res) => {
                console.log(res.data)
            })
    }, []);

    return (
        <TeamWorkLayout />
    );
}

export default TeamWork;
