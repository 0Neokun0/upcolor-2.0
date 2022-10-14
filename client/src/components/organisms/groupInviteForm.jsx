import { Alert, Box } from "@mui/material"

const GroupInviteForm = (props) => {
    return (
        <Box>
            hi
            {
                props.joinCheck
                &&
                <Alert
                    severity="error"
                    sx={{
                        mt: 2,
                    }}>
                    チームに参加できませんでした
                </Alert>
            }
        </Box>
    )
}

export default GroupInviteForm