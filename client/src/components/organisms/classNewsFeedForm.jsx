import { Avatar, Box, Button, Card, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, IconButton, InputBase, Modal, TextField } from "@mui/material"

import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import { server } from 'components/config'
const ClassNewsFeedForm = (props) => {
    return (
        <Card sx={{
            display: 'flex',
            alignItems: 'center',
            width: '40%',
            p: 2,
            mb: 4,
            boxShadow: 3,
            justifyContent: 'space-between',
            borderRadius: '25px',
            mt: 1,
        }}
        >
            <Avatar sx={{
                height: '50px',
                width: '50px',
            }}
                src={server.host + "/images/icon/" + props.profile.image}
            />

            <Box sx={{
                p: 1,
                width: '100%',
                ml: '20px',
                mr: '20px',
                fontSize: '17px',

            }}
            >
                <InputBase
                    type="text"
                    placeholder="何かを発表したい事"
                    onClick={props.handleOpen}
                />
                <Dialog
                component={"form"}
                onSubmit={props.handleSubmitNews}
                    PaperProps={{
                        sx: {
                            borderRadius: '25px'
                        }
                    }}
                    open={props.open}
                    onClose={props.handleClose}
                >
                        <DialogTitle>クラスニューズ</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                タイトルと内容、両方入力してください。
                            </DialogContentText>

                            <TextField
                                autoFocus
                                margin="dense"
                                label="発表内容"
                                name="classNewsText"
                                multiline
                                rows={4}
                                variant="outlined"
                                type="text"
                                fullWidth
                            />
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

                            </Box>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={props.handleClose}>キャンセル</Button>
                            <Button
                                type="submit"
                            >
                                投稿
                            </Button>
                        </DialogActions>

                </Dialog>
            </Box>
        </Card>
    )
}

export default ClassNewsFeedForm
