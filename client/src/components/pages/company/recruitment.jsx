import { Box, Divider, Paper, TextField, Typography } from "@mui/material"
import axios from "axios"
import { useState, useEffect } from "react"

const Recruitment = () => {
    const [company, setCompany] = useState([])

    useEffect(() => {
        axios.post("/company/recruitment")
        .then((res) => {
            setCompany(res.data)
        })
    }, [])

    console.log(company)

    return (
        <Box
            sx={{
                width: "80%",
                minWidth: "300px",
                pt: 2,
                mx: "auto",
            }}
        >
            {
                company["company_id"]
                &&
                <Paper
                    sx={{
                        p: 2,
                    }}
                >
                    <Typography
                        variant="h4"
                        textAlign="center"
                    >
                        企業情報
                    </Typography>

                    <Typography
                        variant="h5"
                        sx={{
                            mt: 2,
                            ml: 2,
                        }}
                    >
                        企業名
                    </Typography>

                    <Divider />

                    <TextField
                        id="filled-read-only-input"
                        label="企業名"
                        defaultValue={company["company_name"]}
                        InputProps={{
                        readOnly: true,
                        }}
                        variant="filled"
                        sx={{
                            mt: 2,
                        }}
                    />

                    <Typography
                        variant="h5"
                        sx={{
                            mt: 2,
                            ml: 2,
                        }}
                    >
                        企業HP
                    </Typography>

                    <Divider />

                    <TextField
                        id="outlined-required"
                        label="企業HP"
                        defaultValue={company["company_url"]}
                        variant="outlined"
                        sx={{
                            mt: 2,
                        }}
                    />
                </Paper>
            }
        </Box>
    )
}

export default Recruitment
