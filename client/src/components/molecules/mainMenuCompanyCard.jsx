import { Avatar, Box, Card, Chip, Divider, Typography } from "@mui/material"
import { server } from "components/config"

const MainMenuCompanyCard = (props) => {
    return (
        <Card
            sx={{
                p: 2,
                borderRadius: "15px",
                boxShadow: 5,
                mb: 2,
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Avatar
                    sx={{
                        border: "1px solid gray",
                    }}
                    variant="rounded"
                    src={
                        server.host +
                        "/images/icon/" +
                        props.company["manager_image"]
                    }
                />

                <Typography fontWeight="bold" textAlign={"center"} width="100%">
                    {props.company["company_name"]}
                </Typography>
            </Box>

            <Divider
                sx={{
                    my: 2,
                }}
            />
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: 2,
                }}
            >
                <Box
                    sx={{
                        p: 1,
                        fontWeight: 600,
                    }}
                >
                    本社 :
                </Box>
                <Chip
                    sx={{
                        p: 1,
                        fontWeight: 600,
                    }}
                    label={
                        props.company["address"]
                            ? props.company["address"]
                            : "情報無し"
                    }
                />
            </Box>
        </Card>
    )
}

export default MainMenuCompanyCard
