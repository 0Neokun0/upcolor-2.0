import { Link } from "react-router-dom"
import { Avatar, Box, Card, CardActionArea, Typography } from "@mui/material"

const ClassNewsCard = (props) => {
    return (
        <Card
            variant="outlined"
            sx={{
                width: 325,
                mt: 2,
                borderRadius: "15px",
                transition: "transform 0.3s",
                "&:hover": {
                    transform: "translateY(-2px)",
                },
            }}
        >
            <CardActionArea
                component={Link}
                to={`./${props["classNewsRoom"]["class_id"]}`}
            >
                <Box
                    sx={{
                        position: "relative",
                        "img": {
                            display: "block",
                        }
                    }}
                >
                    <Box
                        component="img"
                        src="https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?cs=srgb&dl=pexels-pixabay-256395.jpg&fm=jpg"
                        sx={{
                            width: "100%",
                            height: "100px",
                            objectFit: "cover"
                        }}
                    />

                    <Typography
                        variant="h5"
                        sx={{
                            maxWidth: "50%",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            position: "absolute",
                            backgroundColor: "white",
                            borderRadius: "10px",
                            top: "0",
                            m: 1,
                            px: 1,
                        }}
                    >
                        {props["classNewsRoom"]["class_name"]}
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        p: 1,
                    }}
                >
                    <Avatar
                        alt={props["classNewsRoom"]["user_name"]}
                        // src={`${server.host}/images/icon/${props["profile"]["image"]}`}
                        sx={{
                            border: 1,
                            borderColor: "divider",
                        }}
                    />

                    <Typography
                        sx={{
                            ml: 1,
                            fontWeight: "bold",
                        }}
                    >
                        {props["classNewsRoom"]["user_name"]}
                    </Typography>
                </Box>
            </CardActionArea>
        </Card>

    );
}

export default ClassNewsCard