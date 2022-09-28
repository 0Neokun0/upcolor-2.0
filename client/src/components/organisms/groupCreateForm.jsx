import { Box, Button, TextField } from "@mui/material"

const GroupCreateForm = (props) => {
    return (
        <Box
            sx={{
                height: "calc(100vh - 64px)",
                overflowY: "scroll",
            }}
        >
            <Box
                component={"form"}
                onSubmit={props.handleCreateSubmit}
                sx={{
                    width: "400px",
                    m: "auto",
                }}
            >
                <TextField
                    margin="normal"
                    size="small"
                    required
                    fullWidth
                    label="グループ名"
                    name="name"
                    autoFocus
                />

                <Button
                    variant="contained"
                    fullWidth
                    type="submit"
                >
                    作成
                </Button>
            </Box>
        </Box>
    )
}

export default GroupCreateForm