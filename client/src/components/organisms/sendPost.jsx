import { Box, Button, Card, IconButton, Modal, TextField } from "@mui/material"
import AddIcon from '@mui/icons-material/Add'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import { cyan } from "@mui/material/colors"

const SendPost = (props) => {
    return (
        <Box>
            <IconButton
                size="large"
                sx={{
                    position: "fixed",
                    right: 20,
                    bottom: 20,
                    backgroundColor: cyan[100],
                }}
                onClick={props.togglePostModalOpen}
            >
                <AddIcon />
            </IconButton>

            <Modal
                open={Boolean(props.openPostModal)}
                onClose={props.togglePostModalClose}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Card
                    component={"form"}
                    onSubmit={props.handleSubmit}
                    sx={{
                        backgroundColor: "white",
                        width: "400px",
                        py: 2,
                        px: 5,
                        borderRadius: "10px",
                    }}
                >
                    <Box
                        textAlign="right"
                    >
                        <IconButton
                            onClick={props.togglePostModalClose}
                        >
                            <CloseRoundedIcon />
                        </IconButton>
                    </Box>

                    <TextField
                        name="text"
                        variant="standard"
                        placeholder="今どうしてる?"
                        fullWidth
                        multiline
                        rows={3}
                        autoFocus
                    />

                    <Button
                        variant="contained"
                        type="submit"
                        fullWidth
                        sx={{
                            mt: 2,
                        }}
                    >
                        投稿
                    </Button>
                </Card>
            </Modal>
        </Box>
    );
}

export default SendPost;
