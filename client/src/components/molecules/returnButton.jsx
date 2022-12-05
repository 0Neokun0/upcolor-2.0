import { Box, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const ReturnButton = (props) => {
    var { toUrl } = props
    return (
        <Box
            sx={{
                height: "40px",
                display: "flex",
                alignItems: "center",
                ml: 2,
                "& > a:hover": {
                    ml: 1,
                    color: "blue",
                },
            }}
        >
            <Typography
                component={Link}
                to={toUrl}
                sx={{
                    fontSize: "16px",
                    color: "#000",
                }}
            >
                ＜ 戻る
            </Typography>
        </Box>

    )
}

export default ReturnButton
