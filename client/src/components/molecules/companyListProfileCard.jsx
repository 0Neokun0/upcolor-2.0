import { Avatar, Card, CardActionArea, Chip, Grid, Typography } from "@mui/material"
import { server } from 'components/config'

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
                    m: 2,
                    overflow: "hidden",
                    boxShadow: 2,
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
                                border: "1px solid gray",
                                m: 1,
                            }}
                            variant="rounded"
                            src={server.host + "/images/icon/" + props.company["manager_image"]}
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
                        <Chip
                            size="small"
                            sx={{
                                p: 1,
                                fontWeight: 600,
                            }}
                            label={"業種 : " + props.company["occupation_names"]}
                        />

                    </Grid>
                </CardActionArea>
            </Card>
        </Grid>
    )
}

export default CompanyListProfileCard