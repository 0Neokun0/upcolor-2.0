import { Typography } from "@mui/material"

const TeamMembers = (props) => {
    return (
        props.members
        &&
        props.members.map((member) => {
            return (
                <Typography>
                    {member["user_name"]}
                </Typography>
            )
        })
    );
}

export default TeamMembers
