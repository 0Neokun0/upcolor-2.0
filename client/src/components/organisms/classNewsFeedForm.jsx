import { server } from 'components/config'
import { Avatar, Box, Button, Card, Modal, TextField, Typography } from "@mui/material"
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual'

const ClassNewsFeedForm = (props) => {
    return (
        <>
            <Card
                variant="outlined"
                sx={{
                    p: 2,
                    mt: 2,
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: '15px',
                    ":hover": {
                        cursor: "text"
                    },
                }}
                onClick={() => props["setOpen"](true)}
            >
                <Avatar
                    sx={{
                        border: "2px solid lightgray",
                        height: '40px',
                        width: '40px',
                    }}
                    src={server.host + "/images/icon/" + props.profile.image}
                />

                <Typography
                    color="gray"
                    sx={{
                        ml: 1,
                    }}
                >
                    投稿内容
                </Typography>
            </Card>

            {/* ダイアログ */}
            <Modal
                open={props["open"]}
                onClose={() => props["setOpen"](false)}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Box
                    component="form"
                    onSubmit={props["handleSubmitNews"]}
                    sx={{
                        p: 2,
                        width: "500px",
                        backgroundColor: "white",
                        borderRadius: "15px",
                    }}
                >
                    <Typography
                        variant="h5"
                    >
                        クラスニュース
                    </Typography>

                    <Box
                        sx={{
                            mt: 2,
                        }}
                    >
                        <Typography
                            variant="caption"
                            color="gray"
                        >
                            5文字以上で入力
                        </Typography>

                        <TextField
                            sx={{
                                mt: 1,
                            }}
                            variant="outlined"
                            label="投稿内容"
                            name="classNewsText"
                            type="text"
                            rows={6}
                            multiline
                            fullWidth
                            autoFocus
                            inputProps={{
                                minLength: 5,
                            }}
                            required
                        />

                        <Box
                            display="flex"
                            justifyContent="end"
                        >
                            <Button
                                color="success"
                                size="small"
                                startIcon={<PhotoSizeSelectActualIcon />}
                            >
                                写真
                            </Button>
                        </Box>
                    </Box>

                    <Box
                        display="flex"
                        justifyContent="space-between"
                        sx={{
                            mt: 2,
                        }}
                    >
                        <Button
                            onClick={() => props["setOpen"](false)}
                        >
                            キャンセル
                        </Button>

                        <Button
                            variant="contained"
                            type="submit"
                        >
                            投稿
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </>
    )
}

export default ClassNewsFeedForm
