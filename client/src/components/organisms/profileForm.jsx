import { Box, Card, TextField } from "@mui/material"

const ProfileForm = () => {
    return (
        <Card
            sx={{
                borderRadius: "0px",
                width: "500px",
                p: 2,
            }}
        >
            <Box
                sx={{
                    "div + div": {
                        mt: 2,
                    }
                }}
            >
                <TextField
                    size="small"
                    label="自己紹介"
                    name="introduction"
                    fullWidth
                    multiline
                    rows={3}
                />

                <TextField
                    size="small"
                    label="資格"
                    name="description"
                    fullWidth
                />

                <TextField
                    size="small"
                    label="言語"
                    name="description"
                    fullWidth
                />
            </Box>
        </Card>
    );
}

export default ProfileForm