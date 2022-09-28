import { Alert, Box, Button, Paper, TextField, Typography, Link as Mlink } from "@mui/material"
import { Link } from "react-router-dom"
import logo from "components/atoms/logo/upcolor_logo.svg"

const SignInBox = (props) => {
    return (
        <Paper
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
                SignIn
            </Typography>

            <Box
                component="form"
                onSubmit={props.submit}
                sx={{
                    mt: 5,
                }}
            >
                <TextField
                    margin="normal"
                    size="small"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />

                <TextField
                    margin="normal"
                    size="small"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                        mt: 5,
                    }}
                >
                    サインイン
                </Button>

                {
                    props.availability
                    &&
                    <Alert
                    severity="error"
                    sx={{
                        mt: 2,
                    }}>
                        Email Address と Password の組み合わせが存在しません
                    </Alert>
                }
            </Box>

            <Mlink
                component={Link}
                to="/signup/student"
                sx={{
                    mt: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                アカウント作成
            </Mlink>
        </Paper>
    );
}

export default SignInBox;
