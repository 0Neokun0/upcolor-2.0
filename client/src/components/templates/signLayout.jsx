import { Box } from "@mui/material"

const SignInLayout = (props) => {
    return (
        <Box
            sx={{
                pt: 8,
            }}
        >
            {props.children}
        </Box>
    );
}

export default SignInLayout
