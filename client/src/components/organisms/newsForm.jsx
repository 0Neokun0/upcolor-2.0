import { Avatar, Box, Button, Card, CardActions, FormControl, IconButton, InputBase, InputLabel, MenuItem, OutlinedInput, Select, TextField, Tooltip, Typography } from "@mui/material"
import CloseRoundedIcon from "@mui/icons-material/CloseRounded"
import AddPhotoAlternateRoundedIcon from '@mui/icons-material/AddPhotoAlternateRounded'
import { server } from "components/config"

const NewsForm = (props) => {
    return (
        <Box sx={{
            width: "50%",
        }}
        >
            {
                props.formState
                    ?
                    <Card
                        sx={{
                            mt: 2,
                            p: 2,
                            position: "relative",
                            boxShadow: 2,
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
                                label="タイトル"
                                name="title"
                                variant="filled"
                                fullWidth
                            />

                            <TextField
                                label="ニュース"
                                name="text"
                                variant="filled"
                                rows={3}
                                multiline
                                fullWidth
                            />
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
                                        component="label"
                                        onClick={() => props.setFileCheck(false)}
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
                                flexDirection: 'row-reverse',
                            }}
                            >
                                <CardActions>
                                    <Button
                                        variant="outlined"
                                        onClick={() => props.setFormState(!props.formState)}
                                    >
                                        キャンセル
                                    </Button>
                                    <Button
                                        type="submit"
                                        variant="outlined"
                                    >
                                        投稿
                                    </Button>
                                </CardActions>
                            </Box>
                        </Box>
                    </Card>
                    :
                    <Card sx={{
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        p: 2,
                        mt: 2,
                        boxShadow: 3,
                        borderRadius: "25px",
                    }}
                    >
                        <Avatar sx={{
                            height: "50px",
                            width: "50px",
                        }}
                            src={server.host + "/images/icon/" + props.profile.image}
                        />
                        <Box sx={{
                            p: 1,
                            width: "100%",
                            ml: "20px",
                            mr: "20px",
                            fontSize: "17px",
                        }}
                        >
                            <InputBase
                                sx={{
                                    p: 1,
                                }}
                                type="text"
                                placeholder="何かを発表したい事"
                                onClick={() => props.setFormState(!props.formState)}
                            />
                        </Box>
                    </Card>
            }
        </Box>
    );
}

export default NewsForm