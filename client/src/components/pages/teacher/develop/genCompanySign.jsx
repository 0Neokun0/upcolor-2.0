import axios from "axios"
import { Box, Paper, TextField, Button, Popover, Typography } from "@mui/material"
import { useState } from "react"

const GenCompanySign = () => {
    const [viewUrl, setViewUrl] = useState(null)
    const [anchorEl, setAnchorEl] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)

        axios.post("/generateLink/company", {
            name: data.get("name"),
        })
        .then((res) => {
            const url = res.data
            setViewUrl(url)
        })
    }

    const handleCopy = (e) => {
        const target = e.currentTarget
        navigator.clipboard.writeText(viewUrl)
        .then(() => {
            setAnchorEl(target)
        })
        .catch((err) => {
            console.log("Async: Could not copy url: ", err)
        })
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <Box
            component="form"
            sx={{
                pt: 2,
                textAlign: "center",
            }}
            onSubmit={handleSubmit}
        >
            <Paper
                sx={{
                    width: "15%",
                    minWidth: "300px",
                    mx: "auto",
                    p: 2,
                }}
            >
                <TextField
                    id="outlined-required"
                    name="name"
                    label="企業名"
                    variant="outlined"
                    size="small"
                    fullWidth
                    required
                />

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="small"
                    fullWidth
                    sx={{
                        mt: 2,
                    }}
                >
                    URL発行
                </Button>
                {
                    viewUrl
                    &&
                    <Box
                        sx={{
                            mt: 2,
                        }}
                    >
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleCopy}
                            size="small"
                        >
                            URLをコピー
                        </Button>

                        <Popover
                            open={Boolean(anchorEl)}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: "center",
                                horizontal: "left",
                            }}
                            transformOrigin={{
                                vertical: "center",
                                horizontal: "right",
                            }}
                        >
                            <Typography
                                sx={{
                                    p: 1,
                                }}
                            >
                                コピー完了
                            </Typography>
                        </Popover>
                    </Box>
                }
            </Paper>
        </Box>
    )
}

export default GenCompanySign
