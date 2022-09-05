import { Link } from "react-router-dom"
import { Button } from "@mui/material"

const TeamMembers = (props) => {
    return (
        props.members
        &&
        props.members.map((member) => {
            return (
                <Button
                    key={member["user_id"]}
                    component={Link}
                    to={"/profile/" + member["user_id"]}
                >
                    {member["user_name"]}
                </Button>
            )
        })
    );
}

export default TeamMembers
