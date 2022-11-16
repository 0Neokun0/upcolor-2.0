import { Box, Typography } from "@mui/material"

const ProfileFormUnit = (props) => {
    const { children, title } = props

    return (
        <Box
            sx={{
                ".MuiFormControl-root + .MuiFormControl-root": {
                    mt: 2,
                }
            }}
        >
            <Typography
                variant="h5"
                sx={{
                    borderBottom: 1,
                    borderColor: "divider",
                    mb: 2,
                }}
            >
                {title}
            </Typography>

            {children}
        </Box>
    )
}

export default ProfileFormUnit