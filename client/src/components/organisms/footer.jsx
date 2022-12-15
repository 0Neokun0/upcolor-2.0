import { Box, Typography, Link } from '@mui/material'
import logo from "components/atoms/logo/upcolor_logo.svg"

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
                        marginRight: "1250px",
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
                    marginRight: "1100px",
                }}
            >
                UpColor
            </Typography>

            <Typography
                sx={{
                    marginRight: "1100px",
                }}
                variant="caption"
            >
                &copy 2022 - NAOKO 進級制作2022
            </Typography>

            <Typography>
                PAGETOP
            </Typography>

            <Typography>
                トップ
            </Typography>

            <Typography>
                学校
            </Typography>

            <Typography>
                企業
            </Typography>
            
        </Box>
    )
}

export default Footer