import { Container, Box, Button, TextField, Dialog, DialogContent, DialogContentText } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { SignLayout } from "components/templates"
import { SignUpBox } from "components/organisms"

const TeacherSignup = () => {
    const [dialog, setDialog] = useState(true)
    const [checkExist, setCheckExist] = useState(false)

    useEffect(() => {
        if (!window.location.search) {
            window.location.href = "/"
        }
    }, [])

    const getParam = (name, url) => {
        if (!url) url = window.location.href

        name = name.replace(/[[\]]/g, "\\$g")

        let regex = new RegExp("[?%]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url)

        if (!results) return null
        if (!results[2]) return null

        return decodeURIComponent(results[2].replace(/\+/g, " "))
    }

    const handlePassword = (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)

        axios.post("/check/teacher", {
            token: getParam("token"),
            password: data.get("tokenPassword"),
        })
        .then((res) => {
            if (res.data) {
                setDialog(false)
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)

        axios.post("/account/signup", {
            name: data.get("name"),
            email: data.get("email"),
            password: data.get("password"),
            userType: 2,
        })
        .then((res) => {
            if (res.data) {
                window.location.href = "/home"
            } else {
                setCheckExist(true)
            }
        })
    }

    return (
        <Container
            component="main"
            sx={{
                pt: 2,
                textAlign: "center",
            }}
        >
            {
                !dialog
                &&
                <SignLayout
                    component={
                        <SignUpBox
                            handleSubmit={handleSubmit}
                            checkExist={checkExist}
                        />
                    }
                />
            }
            <Dialog
                open={dialog}
            >
                <Box
                    component="form"
                    onSubmit={handlePassword}
                >
                    <DialogContent>
                        <DialogContentText>
                            パスワードを入力してください
                        </DialogContentText>

                        <TextField
                            name="tokenPassword"
                            type="password"
                            label="password"
                            size="small"
                            autoFocus
                            required
                            fullWidth
                            sx={{
                                mt: 2,
                            }}
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            size="normal"
                            fullWidth
                            sx={{
                                mt: 2,
                            }}
                        >
                            送信
                        </Button>
                    </DialogContent>
                </Box>
            </Dialog>
        </Container>
    )
}

export default TeacherSignup
