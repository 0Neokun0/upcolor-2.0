import { Box } from "@mui/material"

const DevelopLayout = (props) => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                width: 1,
                height: 250,
                mx: "auto",
                textAlign: "center",
            }}
        >
            {props.children}
        </Box>
    )
}

export default DevelopLayout