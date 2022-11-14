import { Avatar, Box, Button, Card, IconButton, Modal, TextField } from '@mui/material'
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'

import { server } from "components/config"

const PostBox = (props) => {
    return (
        <Card
            sx={{
                textAlign: 'center',
                borderRadius: '15px',
                boxShadow: 2,
                mt: 4,
                p: 2,
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
                    src={server.host + "/images/icon/" + props.profile.image}
                />

                <TextField
                    name="text"
                    id="outlined-multiline-flexible"
                    variant="standard"
                    placeholder="今どうしてる?"
                    fullWidth
                    multiline
                    rows={2}
                    autoFocus
                    onClick={props.togglePostModalOpen}
                />
            </Box>


            <Box
                justifyContent={'end'}
                sx={{
                    display: 'flex',
                    mt: 2,
                }}
            >
                <Button
                    color="success"
                    startIcon={<PhotoSizeSelectActualIcon />}
                >
                    写真
                </Button>

                <Button
                    color="primary"
                    startIcon={<PhotoSizeSelectActualIcon />}
                >
                    ビデオ
                </Button>

                <Button
                    color="error"
                    startIcon={<PhotoSizeSelectActualIcon />}
                >
                    Tag
                </Button>
            </Box>

            {/* モーダル */}
            <Modal
                open={Boolean(props.openPostModal)}
                onClose={props.togglePostModalClose}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Box
                    component={'form'}
                    onSubmit={props.handleSubmit}
                    sx={{
                        backgroundColor: 'white',
                        width: '400px',
                        py: 2,
                        px: 5,
                        borderRadius: '10px',
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
                </Box>
            </Modal>
        </Card>
    )
}

export default PostBox
