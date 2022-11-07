import { Box } from "@mui/material"

const ProfileLayout = (props) => {
    return (
        <Box
            sx={{
                pt: 2,
            }}
        >
            {props.children}
        </Box>
    )
}

export default ProfileLayout