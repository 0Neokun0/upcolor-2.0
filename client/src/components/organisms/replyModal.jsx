import { Box, Button, IconButton, Modal, TextField } from "@mui/material"
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'

const ReplyModal = (props) => {
    return (
        <Modal
            open={Boolean(props.openReplyModal)}
            onClose={props.toggleReplyModalClose}
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Box
                component={"form"}
                onSubmit={props.handleReplySubmit}
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
                        onClick={props.toggleReplyModalClose}
                    >
                        <CloseRoundedIcon />
                    </IconButton>
                </Box>

                <TextField
                    name="text"
                    variant="standard"
                    placeholder="返信を入力"
                    fullWidth
                    multiline
                    rows={3}
                    autoFocus
                />

                <input type="hidden" name="parentId" value={props.postId} />

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
            </Box>
        </Modal>
    )
}

export default ReplyModal