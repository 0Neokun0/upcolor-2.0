import { Stack } from "@mui/material"

const ListLayout = (props) => {
    return (
        <Stack
            direction="row"
            sx={{
                width: "80%",
                pt: 2,
                mx: "auto",
            }}
        >
            {props.children}
        </Stack>
    )
}

export default ListLayout
