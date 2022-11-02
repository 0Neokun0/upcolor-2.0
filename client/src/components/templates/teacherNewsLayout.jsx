import { Box } from "@mui/material"

const TeacherNewsLayout = (props) => {
    return (
        <Box
            sx={{
                width: "50%",
                height: "calc(100vh - 64px)",
                mx: "auto",
                backgroundColor: "white",
                borderLeft: 1,
                borderRight: 1,
                borderColor: "rgba(0, 0, 0, 0.12)",
                p: 2,
            }}
        >
            {props.children}
        </Box>
    );
}

export default TeacherNewsLayout