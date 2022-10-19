import { Box, Typography } from '@mui/material'

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
            <Typography
                variant="caption"
            >
                &copy; 2022 - upcolor 進級制作2022
            </Typography>
        </Box>
    );
}

export default Footer;