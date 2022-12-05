import { server } from 'components/config'
import { Avatar, Box, Button, Card, IconButton, Modal, TextField, Tooltip, Typography } from "@mui/material"
import { useState, useRef } from "react"
import AddPhotoAlternateRoundedIcon from '@mui/icons-material/AddPhotoAlternateRounded'
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded'

const ClassNewsFeedForm = (props) => {
    const [imagePreview, setImagePreview] = useState(undefined)

    const fileInput = useRef(null)

    const onClickReset = () => {
        fileInput.current.value = ""
        setImagePreview(undefined)
    }

    const onChangeFileInput = (e) => {
        setImagePreview(undefined)

        if (e.target.files.length === 0) {
            return
        }

        if (!e.target.files[0].type.match("image.*")) {
            return
        }

        const reader = new FileReader()

        reader.onload = (event) => {
            setImagePreview(event.target.result)
        }

        reader.readAsDataURL(e.target.files[0])
    }
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
                            sx={{
                                display: 'flex',
                                alignContent: "center",
                            }}
                        >
                            <Box>
                                <Tooltip
                                    title="写真"
                                    placement="right"
                                >
                                    <IconButton
                                        sx={{
                                            mt: 1,
                                        }}
                                        size="small"
                                        color="success"
                                        component="label"
                                        ref={fileInput}
                                        onChange={(e) => { onChangeFileInput(e) }}
                                    >
                                        <Box
                                            component="input"
                                            type="file"
                                            name="image"
                                            accept=".png, .jpg, .jpeg"
                                            hidden
                                        />
                                        <AddPhotoAlternateRoundedIcon />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                            {
                                !!imagePreview
                                &&
                                <Box
                                    sx={{
                                        width: 1,
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        p: 1,
                                        m: 1,
                                        borderRadius: 1,
                                    }}
                                >
                                    <Box>
                                        <Box
                                            component="img"
                                            src={imagePreview}
                                            sx={{
                                                border: "2px solid gray",
                                                borderRadius: 3,
                                                width: "250px",
                                                height: "125px",
                                                mx: 10,
                                            }}
                                        />
                                    </Box>

                                    <Box>
                                        <Tooltip
                                            title="プレビューを閉じる"
                                            placement="right"
                                        >
                                            <IconButton
                                                size="small"
                                                component="label"
                                                variant="outlined"
                                                color="error"
                                                onClick={onClickReset}
                                            >
                                                <DisabledByDefaultRoundedIcon />
                                            </IconButton>
                                        </Tooltip>
                                    </Box>
                                </Box>
                            }
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
