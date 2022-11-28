import { Avatar, Card, CardActionArea, Grid, Typography } from "@mui/material"

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
                    height: 130,
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
                        (window.location.href = "/company/" + props.value["company_id"])
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
                                m: 1,
                                p: 1,
                            }}
                        />

                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: "bold",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            }}
                        >
                            {props.value["company_name"]}
                        </Typography>
                    </Grid>
                </CardActionArea>
            </Card>
        </Grid>
    )
}

export default CompanyListProfileCard