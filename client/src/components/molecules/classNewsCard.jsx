import { Link } from "react-router-dom"
import { Avatar, Box, Card, Typography } from "@mui/material"

const ClassNewsCard = (props) => {
    console.log(props)
    return (
        <Card
            variant="outlined"
            sx={{
                width: 325,
                mt: 2,
                p: 2,
                borderRadius: "25px",
                // transition: "transform 0.3s, border 0.3s",
                // "&:hover": {
                //     transform: "translateY(-2px)",
                // },
            }}>
            <Typography
                variant="h4"
                component={Link}
                to={`./${props["classNewsRoom"]["class_id"]}`}
                sx={{
                    color: "text.primary",
                    textOverflow: "ellipsis",
                    ":hover": {
                        textDecoration: "underline",
                    }
                }}
            >
                {props["classNewsRoom"]["class_name"]}
            </Typography>

            <Box
                component="img"
                src="https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?cs=srgb&dl=pexels-pixabay-256395.jpg&fm=jpg"
                sx={{
                    borderRadius: "15px",
                    width: "100%",
                    height: "130px",
                    objectFit: "cover"
                }}
            />

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Avatar>
                    ドウミ
                </Avatar>

                <Typography
                    variant="h6"
                    component={Link}
                    to={`./${props["classNewsRoom"]["class_id"]}`}
                    sx={{
                        ml: 2,
                        color: "text.primary",
                        textOverflow: "ellipsis",
                        ":hover": {
                            textDecoration: "underline",
                        }
                    }}
                >
                    {props["classNewsRoom"]["user_name"]}
                </Typography>
            </Box>
        </Card>

    );
}

export default ClassNewsCard