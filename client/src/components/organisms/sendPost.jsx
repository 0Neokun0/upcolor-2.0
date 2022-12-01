import { Alert, Avatar, Box, Button, Card, IconButton, Modal, TextField, Tooltip } from "@mui/material"
import AddIcon from '@mui/icons-material/Add'
import { cyan } from "@mui/material/colors"
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import AddPhotoAlternateRoundedIcon from '@mui/icons-material/AddPhotoAlternateRounded'
import { server } from "components/config"
import { useState, useRef } from "react"
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded'
const SendPost = (props) => {
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
                                border: "2px solid lightgray",
                                borderRadius: '50%',
                                objectFit: 'cover',
                                mr: '20px',
                            }}
                            src={server.host + "/images/icon/" + props.profile["image"]}
                        />

                        <TextField
                            name="text"
                            variant="standard"
                            placeholder="今どうしてる?"
                            fullWidth
                            multiline
                            rows={4}
                            type="text"
                            autoFocus
                            inputProps={{
                                minLength: 5,
                            }}
                            required
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
                                        title="削除"
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

                    {
                        props["fileCheck"]
                        &&
                        <Alert
                            severity="error"
                            sx={{
                                mt: 2,
                            }}
                        >
                            ファイルが読み込めません
                        </Alert>
                    }
                </Card>
            </Modal>
        </Box>
    );
}

export default SendPost;
