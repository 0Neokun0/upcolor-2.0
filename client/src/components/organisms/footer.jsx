import { Box, Typography, Link, IconButton } from '@mui/material'
import logo from "components/atoms/logo/upcolor_logo.svg"
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <Box
            sx={{
                py: 3,
                textAlign: "center",
                backgroundColor: "#bdbdbd",
                boxShadow: 2,
            }}
        >
            <Link
                href="/"
                sx={{
                    marginRight: "1250px",
                    ml: 2,
                }}
            >
                <Box
                    sx={{
                        marginRight: "200px",
                        marginBottom: "-60px",
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
                    marginRight: "50px",
                }}
            >
                UpColor
            </Typography>

            <Typography
                sx={{
                    marginRight: "60px",
                    verticalAlign: "middle",
                }}
                variant="caption"
            >
                &copy 2022 - NAOKO 進級制作2022
            </Typography>

            <Box>
                <IconButton
                    href="https://github.com/0Neokun0/upcolor-2.0"
                    sx={{
                        width: "50px",
                        height:"50px",
                        marginLeft:"90px",
                        marginTop:"-105px",
                    }}
                >
                    <GitHubIcon
                        sx={{
                            color: "normal",
                        }}
                    />
                </IconButton>
            </Box>
        </Box>
    )
}

export default Footer