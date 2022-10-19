import { Box, Button } from "@mui/material"

const ProfileForm = (props) => {
    return (
        <Box
            component={"form"}
            onSubmit={props["handleSubmit"]}
            sx={{
                width: "70%",
                maxWidth: "700px",
                "div + div": {
                    mt: 2,
                }
            }}
        >
            {props.children}

            <Button
                type="submit"
                variant="contained"
                size="small"
                fullWidth
                sx={{
                    mt: 5,
                }}
            >
                保存
            </Button>
        </Box>
    )
}

export default ProfileForm
