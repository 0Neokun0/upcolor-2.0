import { server } from "components/config"
import { Avatar, Box, Button, Card, FormControl, IconButton, InputLabel, MenuItem, OutlinedInput, Select, TextField, Tooltip, Typography } from "@mui/material"
import AddPhotoAlternateRoundedIcon from '@mui/icons-material/AddPhotoAlternateRounded'
import CloseRoundedIcon from "@mui/icons-material/CloseRounded"
import { useState, useRef } from "react"
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded'

const NewsForm = (props) => {
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
        <Box
            sx={{
                width: "100%",
            }}
        >
            {
                props["formState"]
                    ?
                    <Card
                        variant="outlined"
                        sx={{
                            mt: 2,
                            p: 2,
                            position: "relative",
                            borderRadius: "15px",
                        }}
                    >
                        <Tooltip
                            title="保存なしで、閉じる"
                            placement="bottom"
                        >
                            <IconButton
                                size="small"
                                sx={{
                                    position: "absolute",
                                    top: 15,
                                    right: 15,
                                }}
                                onClick={() => props.setFormState(!props.formState)}
                            >
                                <CloseRoundedIcon />
                            </IconButton>
                        </Tooltip>

                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                mb: 2,
                            }}
                        >
                            <Avatar
                                sx={{
                                    border: "2px solid lightgray",
                                }}
                                src={server.host + "/images/icon/" + props.profile.image}
                            />

                            <Typography
                                sx={{
                                    ml: 1,
                                }}
                            >
                                {props.profile["name"]}
                            </Typography>
                        </Box>

                        <Box
                            component="form"
                            onSubmit={props.handleSubmit}
                            sx={{
                                "div + div": {
                                    mt: 2,
                                }
                            }}
                        >
                            <TextField
                                autoFocus
                                label="タイトル"
                                name="title"
                                variant="filled"
                                fullWidth
                            />

                            <TextField
                                label="ニュース"
                                name="text"
                                variant="filled"
                                rows={8}
                                multiline
                                fullWidth
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
                                                mt: 4,
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
                                                    width: "300px",
                                                    height: "125px",
                                                    mx: 25,
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

                            <FormControl
                                fullWidth
                            >
                                <InputLabel>
                                    対象コース
                                </InputLabel>

                                <Select
                                    value={props.target}
                                    input={<OutlinedInput label="対象コース" />}
                                    onChange={props.handleTarget}
                                    multiple
                                >
                                    {
                                        props.courses.map((course) => {
                                            return (
                                                <MenuItem
                                                    key={course["course_id"]}
                                                    value={course["course_id"]}
                                                >
                                                    {course["course_name"]}
                                                </MenuItem>
                                            )
                                        })
                                    }
                                </Select>
                            </FormControl>

                            <Box sx={{
                                display: 'flex',
                                justifyContent: "end",
                            }}
                            >
                                <Button
                                    variant="outlined"
                                    onClick={() => props.setFormState(!props.formState)}
                                >
                                    キャンセル
                                </Button>

                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{
                                        ml: 2,
                                    }}
                                >
                                    投稿
                                </Button>
                            </Box>
                        </Box>
                    </Card>
                    :
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
                        onClick={() => props["setFormState"](!props["formState"])}
                    >
                        <Avatar
                            sx={{
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
            }
        </Box>
    )
}

export default NewsForm