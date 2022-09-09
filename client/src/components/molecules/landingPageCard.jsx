import { Box, Button, Chip, Paper, Typography } from "@mui/material"
import { blueGrey, lightGreen } from "@mui/material/colors"

const LandingPageCard = (props) => {
    return (
        <Paper
            variant="outlined"
            sx={{
                width: "900px",
                py: 8,
                textAlign: "center",
                borderRadius: "0px"
            }}
        >
            <img
                src={props.card.logoSrc}
                alt="ロゴの画像"
                height="70px"
            />

            <Box>
                <Chip
                    label="Version 2.0"
                    sx={{
                        color: "white",
                        backgroundColor: lightGreen["A700"],
                        fontWeight: "bold",
                    }}
                />
            </Box>

            <Typography
                variant="h3"
                sx={{
                    mt: 2,
                }}
            >
                {props.card.title1}

                <br />

                {props.card.title2}
            </Typography>

            <Typography
                sx={{
                    mt: 2,
                    color: blueGrey[500],
                }}
            >
                {props.card.subTitle}
            </Typography>

            <Box
                sx={{
                    mt: 5,
                    "a": {
                        mx: 3,
                    }
                }}
            >
                <Button
                    variant="outlined"
                    color="secondary"
                    href="signup/student"
                >
                    サインアップ
                </Button>

                <Button
                    variant="outlined"
                    href="/signin"
                >
                    サインイン
                </Button>
            </Box>
        </Paper>
    );
}

export default LandingPageCard;
