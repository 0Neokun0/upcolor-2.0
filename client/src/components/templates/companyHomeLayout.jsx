import { Box, Stack } from "@mui/material"

const CompanyHomeLayout = (props) => {
    return (
        <Box
            bgcolor={"#f5f5f5"}
        >
            <Stack
                direction={"row"}
            >
                {props["children"]}
            </Stack>
        </Box>
    )
}

export default CompanyHomeLayout