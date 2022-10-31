import { SendOutlined } from "@material-ui/icons"
import { Avatar, Box, Button, Card, Paper, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, IconButton, InputBase, Modal, TextField } from "@mui/material"

import { useState } from "react"

import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
const SendNews = (props) => {



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
                    PaperProps={{
                        style: { borderRadius: '25px' }
                    }}
                    open={props.open}
                    onClose={props.handleClose}
                >
                    <Card
                        component={"form"}
                        onSubmit={props.handleSubmitNews}
                    >
                        <DialogTitle>News</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                タイトルと内容、両方入力してください。
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                name="classRoomName"
                                label="タイトル"
                                variant="outlined"
                                type="text"
                                fullWidth
                            />
                            <TextField
                                label="発表内容"
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
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={props.handleClose}>キャンセル</Button>
                            <Button
                                type="submit"
                                size="small"
                            >
                                登録
                            </Button>
                        </DialogActions>
                    </Card>
                </Dialog>
            </Box>
        </Card>
    );
}

export default SendNews;
