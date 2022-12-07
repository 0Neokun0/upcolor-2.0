import { Avatar, Button, Card, CardActionArea, Grid, Typography } from "@mui/material"

// import { server } from 'components/config'

const CompanyListProfileCard = (props) => {
    return (
        <Grid
            item
        >
            <Card
                variant="outlined"
                sx={{
                    bgcolor: "white",
                    width: 300,
                    height: 140,
                    m: 2,
                    overflow: "hidden",
                    borderRadius: "25px",
                    transition: "transform 0.3s, border 0.3s",
                    "&:hover": {
                        transform: "translateY(-2px)",
                    },
                }}
            >
                <CardActionArea
                    sx={{
                        p: 2,
                        borderRadius: 5,
                    }}
                    onClick={() =>
                        (window.location.href = "/company/" + props.company["company_id"])
                    }
                >
                    <Grid
                        container
                        direction="column"
                        justifyContent="space-evenly"
                        alignItems="center"
                    >
                        <Avatar
                            sx={{
                                border: "2px solid lightgray",
                                m: 1,
                                p: 1,
                            }}
                            variant="rounded"
                        />

                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: "bold",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            }}
                        >
                            {props.company["company_name"]}
                        </Typography>
                        {/* <Typography
                        variant="h5"
                        sx={{
                            fontWeight: "bold",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                        }}
                    >
                        {props.company["occupation_names"]}
                    </Typography> */}

                    </Grid>
                </CardActionArea>
            </Card>
        </Grid>
    )
}

export default CompanyListProfileCard