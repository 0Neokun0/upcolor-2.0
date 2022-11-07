import { Alert, Box, Button, Card, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import logo from "components/atoms/logo/upcolor_logo.svg"

const SignUpBox = (props) => {
    return (
        <Card
            sx={{
                width: "300px",
                m: "auto",
                py: 5,
                px: 3,
                textAlign: "center",
            }}
        >
            <img
                src={logo}
                alt="ロゴの画像"
                height="30px"
            />

            <Typography
                variant="h5"
            >
                SignUp
            </Typography>

            {
                props.company
                &&
                <Typography
                    variant="h5"
                    sx={{
                        mt: 2,
                    }}
                >
                    {props.company} 様
                </Typography>
            }

            <Box
                component="form"
                onSubmit={props.handleSubmit}
                sx={{
                    mt: 2,
                    textAlign: "initial",
                }}
            >
                <TextField
                    margin="normal"
                    size="small"
                    label="名前"
                    name="name"
                    autoComplete="name"
                    placeholder="空白を含まない15文字以内"
                    autoFocus
                    fullWidth
                    required
                    inputProps={{
                        maxLength: 15,
                        pattern: "^[\\S]+$"
                    }}
                />

                <TextField
                    margin="normal"
                    size="small"
                    label="メールアドレス"
                    name="email"
                    autoComplete="email"
                    placeholder="空白を含まない30文字以内"
                    error={props.checkExist}
                    fullWidth
                    required
                    inputProps={{
                        maxLength: 30,
                        pattern: "^[\\S]+$"
                    }}
                />

                <TextField
                    margin="normal"
                    size="small"
                    name="password"
                    label="パスワード"
                    type="password"
                    autoComplete="current-password"
                    placeholder="空白を含まない8文字以上"
                    required
                    fullWidth
                    inputProps={{
                        minLength: 8,
                        pattern: "^[\\S]+$"
                    }}
                    onChange={(e) => props["setOriginPass"](e.target.value)}
                />

                <TextField
                    margin="normal"
                    size="small"
                    name="password"
                    label="確認用パスワード"
                    type="password"
                    autoComplete="current-password"
                    placeholder="確認用パスワード"
                    required
                    fullWidth
                    onChange={(e) => props["setCheckPass"](e.target.value)}
                    error={props["originPass"] !== props["checkPass"]}
                    helperText={props["originPass"] !== props["checkPass"] && "パスワードが一致しません"}
                />

                {
                    props.courseList
                    &&
                    <FormControl
                        margin="normal"
                        size="small"
                        fullWidth
                        sx={{
                            textAlign: "left",
                        }}
                    >
                        <InputLabel>
                            コース
                        </InputLabel>

                        <Select
                            label="コース"
                            value={props.course}
                            onChange={(e) => props.setCourse(e.target.value)}
                        >

                            {
                                props.courseList.map((element) => {
                                    return (
                                        <MenuItem
                                            key={element["course_id"]}
                                            value={element["course_id"]}
                                        >
                                            {element["course_name"]}
                                        </MenuItem>
                                    )
                                })
                            }
                        </Select>
                    </FormControl>
                }
                {
                    props.years
                    &&
                    <FormControl
                        margin="normal"
                        size="small"
                        fullWidth
                        sx={{
                            textAlign: "left",
                        }}
                    >
                        <InputLabel>
                            学年
                        </InputLabel>

                        <Select
                            label="学年"
                            value={props.year}
                            onChange={(e) => props.setYear(e.target.value)}
                        >
                            {
                                props.years.map((year) => {
                                    return (
                                        <MenuItem
                                            key={year["value"]}
                                            value={year["value"]}
                                        >
                                            {year["item"]}
                                        </MenuItem>
                                    )
                                })
                            }
                        </Select>
                    </FormControl>
                }

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                        mt: 2,
                    }}
                >
                    アカウント作成
                </Button>

                {
                    props.checkExist
                    &&
                    <Alert severity="error" sx={{
                        mt: 2,
                    }}>
                        Email Address がすでに使用されています
                    </Alert>
                }
            </Box>
        </Card>
    );
}

export default SignUpBox;
