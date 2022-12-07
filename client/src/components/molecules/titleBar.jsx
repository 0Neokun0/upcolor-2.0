import { Box, Typography } from "@mui/material"

const TitleBar = (props) => {
    const { title } = props
    return (
        <Box
            sx={{
                width: "100%",
                height: "40px",
                display: "flex",
                alignItems: "center",
                pl: 2,
                borderBottom: "solid 1px #D9D9D9",
            }}
        >
            <Typography
                sx={{
                    fontSize: "24px",
                }}
            >
                {title}
            </Typography>
        </Box>
    )
}

export default TitleBar
