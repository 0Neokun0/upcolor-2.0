import { Box } from "@mui/material"

const TeamWorkLayout = (props) => {
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

export default TeamWorkLayout;
