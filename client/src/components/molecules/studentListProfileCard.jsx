import { Card, Grid, Avatar, Typography, CardActionArea } from "@mui/material"

import { server } from 'components/config'

const StudentListProfileCard = (props) => {
    return (
        <Grid
            item
        >
            <Card
                variant="outlined"
                sx={{
                    width: 420,
                    height: 200,
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
                        (window.location.href = "/profile/" + props.student["user_id"])
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
                                border: "2px solid lightgray",
                            }}
                            src={server.host + "/images/icon/" + props.student["image"]}
                        />

                        <Typography
                            variant="h4"
                            gutterBottom
                        >
                            {props.student["name"]}
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: 17,
                            }}
                            gutterBottom
                        >
                            {props.student["year_name"]}
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: 14,
                                mb: 1,
                            }}
                        >
                            {props.student["course_name"]}
                        </Typography>
                    </Grid>
                </CardActionArea>
            </Card>
        </Grid>
    )
}

export default StudentListProfileCard
