import { Alert, Avatar, Box, Button, Card, IconButton, Modal, TextField, Tooltip } from "@mui/material"
import { useState, useRef } from "react"
import CloseRoundedIcon from "@mui/icons-material/CloseRounded"
import AddPhotoAlternateRoundedIcon from "@mui/icons-material/AddPhotoAlternateRounded"
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded'

import { server } from "components/config"

const ReplyModal = (props) => {
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
        <Modal
            open={Boolean(props.openReplyModal)}
            onClose={props.toggleReplyModalClose}
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Card
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

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Avatar
                        variant="rounded"
                        sx={{
                            width: "50",
                            height: "50",
                            border: "2px solid lightgray",
                            borderRadius: "50%",
                            objectFit: "cover",
                            mr: "20px",
                        }}
                        src={server.host + "/images/icon/" + props.profile["image"]}
                    />

                    <TextField
                        name="text"
                        variant="standard"
                        placeholder="返信を入力"
                        fullWidth
                        multiline
                        rows={4}
                        autoFocus
                    />
                </Box>

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
                                        m: 2,
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

                <input type="hidden" name="parentId" value={props["postId"]} />

                <Button
                    variant="contained"
                    type="submit"
                    size="small"
                    fullWidth
                    sx={{
                        mt: 2,
                    }}
                >
                    返信
                </Button>

                {
                    props["fileCheck"]
                    &&
                    (
                        <Alert
                            severity="error"
                            sx={{
                                mt: 2,
                            }}
                        >
                            ファイルが読み込めません
                        </Alert>
                    )
                }
            </Card>
        </Modal>
    )
}

export default ReplyModal
