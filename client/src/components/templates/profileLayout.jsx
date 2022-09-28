import { Box } from "@mui/material"

const ProfileLayout = (props) => {
    return (
        <Box
            sx={{
                pt: 2,
            }}
        >
            {props.component}
        </Box>
    )
}

export default ProfileLayout