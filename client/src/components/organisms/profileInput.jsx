import { Box, Paper, TextField, Typography } from "@mui/material"

const ProfileInput = (props) => {
    return (
        <Paper
            sx={{
                p: 2,
            }}
        >
            <Typography
                variant="h5"
                sx={{
                    borderBottom: 1,
                }}
            >
                {props.title}
            </Typography>

            <Box
                sx={{
                    p: 2,
                }}
            >
                <TextField
                    label={props.content}
                    size="small"
                    fullWidth
                />
            </Box>
        </Paper>
    );
}

export default ProfileInput;
