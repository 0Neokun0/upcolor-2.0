import { Box } from "@mui/system"

const ProfileEditLayout = (props) => {
    return (
        <Box
            sx={{
                py: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            {props.children}
        </Box>
    )
}

export default ProfileEditLayout
