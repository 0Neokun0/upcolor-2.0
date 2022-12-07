import { Box, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const DevelopMenu = (props) => {
    const { title, toUrl, select, set } = props

    const handleSelectMenu = (title) => {
        set(title)
    }

    return (
        <Box
            component={Link}
            to={toUrl}
            backgroundColor={select === title ? "#D9D9D9" : "#FFF"}
            sx={{
                width: "300px",
                height: "60px",
                display: "flex",
                alignItems: "center",
                mt: 1,
                borderTopRightRadius: "30px",
                borderBottomRightRadius: "30px",
                "& > p": {
                    ml: 2,
                },
                ":hover": {
                    backgroundColor: "#D9D9D9",
                    "& > p": {
                        transitionDuration: "500ms",
                        transform: "translate(16px)",
                    },
                },
            }}
            onClick={() => {handleSelectMenu(title)}}
        >
            <Typography
                sx={{
                    fontSize: "24px",
                    color: "#000",
                }}
            >
                ＞ {title}
            </Typography>
        </Box>
    )
}

export default DevelopMenu
