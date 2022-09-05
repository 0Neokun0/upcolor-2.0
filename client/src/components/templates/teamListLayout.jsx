import { Box } from "@mui/material"

const TeamListLayout = (props) => {
    return (
        <Box
            sx={{
                pt: 2,
                width: "80%",
                mx: "auto",
            }}
        >
            {props.component}
        </Box>
    );
}

export default TeamListLayout