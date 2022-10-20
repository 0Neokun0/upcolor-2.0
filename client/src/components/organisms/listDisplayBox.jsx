import { Box } from "@mui/material"

const ListDisplayBox = (props) => {
    return (
        <Box
            sx={{
                width: "80%",
            }}
        >
            {props.children}
        </Box>
    )
}

export default ListDisplayBox
