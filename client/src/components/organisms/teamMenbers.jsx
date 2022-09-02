import { Box, Typography } from "@mui/material"

const TeamMenbers = (props) => {
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

export default TeamMenbers;
