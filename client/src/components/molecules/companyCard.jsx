import { Avatar, Box, Card, Chip, Typography } from "@mui/material"
import { blue, grey } from "@mui/material/colors"

const CompanyCard = (props) => {
    return (
        <Card
            sx={{
                mx: "auto",
                p: 2,
                mb: 2,
                width: "80%",
                borderRadius: "25px",
                cursor: "pointer",
                "&:hover": {
                    backgroundColor: grey[200],
                },
            }}
        >
            <Box
                sx={{
                    textAlign: "center",
                }}
            >
                <Box
                    sx={{
                        backgroundColor: blue[200],
                        borderRadius: "10px",
                        p: 2,
                    }}
                >
                    <Avatar
                        src={props.image}
                        sx={{
                            border: "2px solid lightgray",
                            mx: "auto",
                            width: 45,
                            height: 45,
                        }}
                    />
                </Box>

                <Box>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: "bold",
                        }}
                    >
                        {props.name}
                    </Typography>

                    <Chip
                        label="業種"
                    />

                    <Typography
                        variant="subtitle1"
                        sx={{
                            color: grey[500],
                        }}
                    >
                        {props.recruite}
                    </Typography>
                </Box>
            </Box>
        </Card>
    )
}

export default CompanyCard
