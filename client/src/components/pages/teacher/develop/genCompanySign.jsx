import axios from "axios"
import {
    Box,
    Card,
    TextField,
    Button,
    Popover,
    Typography
} from "@mui/material";
import { useState } from "react";

import AddLinkIcon from '@mui/icons-material/AddLink';
import ShareIcon from '@mui/icons-material/Share';

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
            <Card
                sx={{
                    width: "15%",
                    minWidth: "370px",
                    mx: "auto",
                    borderRadius: '15px',
                    boxShadow: 10,
                    p: 3,
                }}
            >
                <Typography sx={{
                    mb: 2,
                }}
                    variant="subtitle2"
                >
                    企業・会社名前を入力してURLを作成してください。
                </Typography>

                <TextField
                    color="secondary"
                    name="name"
                    label="企業名"
                    variant="outlined"
                    size="small"
                    fullWidth
                    required
                />

                <Button
                    sx={{
                        mt: 2,
                    }}
                    type="submit"
                    variant="contained"
                    color="secondary"
                    size="small"
                    fullWidth
                    startIcon={<AddLinkIcon />}
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
                        <Typography sx={{
                            mb: 2,
                        }}
                            variant="body2"
                            color="text.secondary"
                        >
                            企業・会社を招待するには、リンクを共有してください。
                        </Typography>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={handleCopy}
                            size="small"
                            startIcon={<ShareIcon />}
                        >
                            URLをコピー
                        </Button>

                        <Popover
                            open={Boolean(anchorEl)}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "center",
                            }}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "center",
                            }}
                        >
                            <Typography
                                sx={{
                                    p: 2,
                                }}
                            >
                                コピー完了
                            </Typography>
                        </Popover>
                    </Box>
                }
            </Card>
        </Box>
    )
}

export default GenCompanySign
