import { Avatar, Box, Button, Card, CardActionArea, FormControl, IconButton, InputLabel, MenuItem, OutlinedInput, Select, TextField, Typography } from "@mui/material"
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'

const NewsForm = (props) => {
    return (
        <Box
            sx={{
                p: 2,
            }}
        >
            {
                props.formState
                    ?
                    <Card
                        sx={{
                            p: 2,
                            position: "relative",
                        }}
                    >
                        <IconButton
                            size="small"
                            sx={{
                                position: "absolute",
                                top: 0,
                                right: 0,
                            }}
                            onClick={props.toggleForm}
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
                                label="ニュース"
                                name="news"
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
                    <Card>
                        <CardActionArea
                            sx={{
                                p: 2,
                            }}
                            onClick={props.toggleForm}
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