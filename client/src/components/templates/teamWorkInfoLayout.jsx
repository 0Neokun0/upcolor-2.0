import { Box } from "@mui/material"

const TeamWorkInfoLayout = (props) => {
    return (
        <Box
            sx={{
                py: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            {props.component}
        </Box>
    );
}

export default TeamWorkInfoLayout
