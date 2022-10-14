import { Avatar, Box, Button, Card, CardActionArea, FormControl, IconButton, InputLabel, MenuItem, OutlinedInput, Select, TextField, Typography } from "@mui/material"
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'

const NewsForm = (props) => {
    return (
        <Box>
            {
                props.formState
                    ?
                    <Card
                        sx={{
                            p: 2,
                            position: "relative",
                            boxShadow: 2,
                            borderRadius: '15px',
                        }}
                    >
                        <IconButton
                            size="small"
                            sx={{
                                position: "absolute",
                                top: 0,
                                right: 0,
                            }}
                            onClick={() => props.setFormState(!props.formState)}
                        >
                            <CloseRoundedIcon />
                        </IconButton>

                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                mb: 2,
                            }}
                        >
                            <Avatar>
                                {props.profile["user_name"]}
                            </Avatar>

                            <Typography
                                sx={{
                                    ml: 1,
                                }}
                            >
                                {props.profile["user_name"]}
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
                                fullWidth
                            />

                            <TextField
                                label="ニュース"
                                name="text"
                                variant="filled"
                                rows={6}
                                multiline
                                fullWidth
                            />

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

                            <Box
                                sx={{
                                    textAlign: "end",
                                }}
                            >
                                <Button
                                    type="submit"
                                    variant="contained"
                                >
                                    投稿
                                </Button>
                            </Box>
                        </Box>
                    </Card>
                    :
                    <Card
                        sx={{
                            boxShadow: 2,
                            borderRadius: '15px',
                        }}
                    >
                        <CardActionArea
                            sx={{
                                p: 2,
                            }}
                            onClick={() => props.setFormState(!props.formState)}
                        >
                            <Typography>
                                ニュースを投稿
                            </Typography>
                        </CardActionArea>
                    </Card>
            }
        </Box>
    );
}

export default NewsForm