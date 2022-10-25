import { Alert, Box, Button, Card, FormControl, InputLabel, MenuItem, Select, TextField, Typography, Link as Mlink} from "@mui/material"
import { Link } from "react-router-dom"
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
                borderRadius: '25px',
            }}
        >
            <img
                src={logo}
                alt="ロゴの画像"
                height="30px"
            />

            <Typography
                variant="h5"
                fontWeight={1000}
            >
                サインアップ
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
                }}
            >
                <TextField
                    margin="normal"
                    size="small"
                    required
                    fullWidth
                    label="ユーザ名"
                    helperText="例 : neokun95, chasity, speeedy"
                    name="name"
                    autoComplete="name"
                    autoFocus
                />

                <TextField
                    margin="normal"
                    size="small"
                    required
                    fullWidth
                    label="メール"
                    helperText="注 : 学校から指定されたメールアドレス"
                    name="email"
                    autoComplete="email"
                    error={props.checkExist}
                />

                <TextField
                    margin="normal"
                    size="small"
                    required
                    fullWidth
                    name="password"
                    label="パスワード"
                    type="password"
                    autoComplete="current-password"
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
                            コース・専攻
                        </InputLabel>

                        <Select
                            label="コース・専攻"
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
                    color="primary"
                    size="large"
                    fullWidth
                    variant="contained"
                    sx={{
                        mt: 2,
                        fontWeight: 600,

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

            <Mlink
                component={Link}
                to="/signIn/"
                underline="none"
                sx={{
                    mt: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                サインイン
            </Mlink>

        </Card>
    );
}

export default SignUpBox;
