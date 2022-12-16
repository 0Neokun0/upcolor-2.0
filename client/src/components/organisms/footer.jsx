import { Box, Typography, Link, Button, IconButton } from '@mui/material'
import logo from "components/atoms/logo/upcolor_logo.svg"
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <Box
            sx={{
                py: 4,
                textAlign: "center",
                backgroundColor: "#bdbdbd",
                boxShadow: 2,
            }}
        >
            {/* ここのカンパニーpngの指定するときって././でいけるっけ？ */}
            <Link
                href="/"
                sx={{
                    marginRight: "1250px",
                    ml: 2,
                }}
            >
                <Box
                    sx={{
                        marginRight: "1050px",
                        marginBottom: "-55px",
                    }}
                >
                    <img
                        src={logo}
                        alt="ロゴの画像"
                        height="30px"
                    />
                </Box>
            </Link>

            <Typography
                sx={{
                    fontSize: "1.4em",
                    marginRight: "900px",
                }}
            >
                UpColor
            </Typography>

            <Typography
                sx={{
                    marginRight: "920px",
                }}
                variant="caption"
            >
                &copy 2022 - NAOKO 進級制作2022
            </Typography>

            <a>
                <IconButton
                    href="https://github.com/0Neokun0/upcolor-2.0"
                    sx={{
                        width:"50px",
                    }}
                >
                    <GitHubIcon
                        sx={{
                            color: "red",
                        }}
                    />
                </IconButton>
            </a>
        </Box>
    )
}

export default Footer