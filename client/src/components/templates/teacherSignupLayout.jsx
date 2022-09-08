import { Box } from "@mui/material";

const TeacherSignupLayout = (props) => {
    console.log(props.component)
    return (
        <Box
            component="main"
            sx={{
                pt: 2,
                textAlign: "center",
            }}
        >
            {
                !props.dialog
                &&
                props.component[0]
            }

            {
                props.component[1]
            }
        </Box>
    )
}

export default TeacherSignupLayout;
