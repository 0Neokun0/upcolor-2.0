import { Box } from "@mui/material"

const DevelopLayout = (props) => {
    return (
        <Box
            sx={{
                width: "80%",
                mx: "auto",
                textAlign: "center",
            }}
        >
            {props.component}
        </Box>
    )
}

export default DevelopLayout