import { Box, Card, Typography } from "@mui/material"
import { server } from "components/config"

const CompanyNewsHeader = (props) => {
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
                    src={server.host + "/images/icon/" + props.company["manager_image"]}
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
                    {props.company["name"]}

                </Typography>
            </Box>
        </Card>
    )
}

export default CompanyNewsHeader