import { Box, Card,  Typography } from "@mui/material"

const TeacherNewsHeader = (props) => {
    return (
        <Card
            sx={{
                borderRadius: "15px",
                boxShadow: 3,
            }}
        >
            <Box
                sx={{
                    position: "relative",
                    "img": {
                        display: "block",
                    },
                }}
            >
                <Box
                    component="img"
                    src="https://wallpaperaccess.com/full/859076.jpg"
                    sx={{
                        width: "100%",
                        height: 100,
                        objectFit: "cover",
                    }}
                />

                <Typography
                    variant="h3"
                    sx={{
                        position: "absolute",
                        transform: "translate(-50%,-50%)",
                        top: "50%",
                        left: "50%",
                        backgroundColor: "white",
                        borderRadius: "10px",
                        border: 1,
                        px: 2,
                    }}
                >
                    教員ニュース
                </Typography>
            </Box>

            {/* <Box
                sx={{
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Avatar
                    alt={props["profile"]["user_name"]}
                    src={`${server.host}/images/icon/${props["enterClassNewsRoom"]["image_url"]}`}
                    sx={{
                        border: "2px solid lightgray",
                        borderColor: "divider",
                    }}
                />

                <Typography
                    sx={{
                        ml: 1,
                        fontWeight: "bold",
                    }}
                >
                    {props["enterClassNewsRoom"]["user_name"]}
                </Typography>
            </Box> */}
        </Card>
    )
}

export default TeacherNewsHeader