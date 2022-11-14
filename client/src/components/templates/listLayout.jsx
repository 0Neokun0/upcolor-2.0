import { Box, Stack } from "@mui/material"

const ListLayout = (props) => {
    return (
        <Box
            sx={{
                p: 2,
            }}
        >
            <Stack
                direction="row"
                spacing={2}
                sx={{
                    height: "calc(100vh - 64px)",
                }}
            >
                {props.children}
            </Stack>
        </Box>
    )
}

export default ListLayout
