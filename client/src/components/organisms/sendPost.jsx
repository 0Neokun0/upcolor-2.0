import { Avatar, Box, Button, Card, IconButton, Modal, TextField, Tooltip } from "@mui/material"
import AddIcon from '@mui/icons-material/Add'
import { cyan } from "@mui/material/colors"
import AddPhotoAlternateRoundedIcon from '@mui/icons-material/AddPhotoAlternateRounded'
import VideoCallRoundedIcon from '@mui/icons-material/VideoCallRounded'
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded'

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
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar
                            variant="rounded"
                            sx={{
                                width: '50',
                                height: '50',
                                borderRadius: '50%',
                                objectFit: 'cover',
                                mr: '20px',
                            }}
                        />

                        <TextField
                            name="text"
                            id="outlined-multiline-flexible"
                            variant="standard"
                            placeholder="今どうしてる?"
                            fullWidth
                            multiline
                            rows={4}
                            autoFocus
                        />
                    </Box>

                    <Box
                        justifyContent={'end'}
                        sx={{
                            display: 'flex',
                        }}
                    >
                        <Tooltip
                            title="写真"
                            placement="right"
                        >
                            <IconButton
                                size="small"
                                color="success"
                            >
                                <AddPhotoAlternateRoundedIcon />
                            </IconButton>
                        </Tooltip>

                        <Tooltip
                            title="ビデオ"
                            placement="right"
                        >
                            <IconButton
                                size="small"
                                color="primary"
                            >
                                <VideoCallRoundedIcon />
                            </IconButton>
                        </Tooltip>

                        <Tooltip
                            title="タグ"
                            placement="right"
                        >
                            <IconButton
                                size="small"
                                color="error"
                            >
                                <LocalOfferRoundedIcon />
                            </IconButton>
                        </Tooltip>
                    </Box>

                    <Button
                        variant="contained"
                        type="submit"
                        size="small"
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
