import { Card, Grid, Avatar, Typography, Button } from "@mui/material"

import PersonSearchRoundedIcon from '@mui/icons-material/PersonSearchRounded';

const StudentListProfileCard = (props) => {
    return (
        <Grid
            item
        >
            <Card
                variant="outlined"
                sx={{
                    bgcolor: "white",
                    width: 420,
                    height: 200,
                    p: 2,
                    m: 2,
                    overflow: "hidden",
                    borderRadius: "25px",
                    transition: "transform 0.3s, border 0.3s",
                    "&:hover": {
                        transform: "translateY(-2px)",
                    },
                    "& > *": { minWidth: "clamp(0px, (360px - 100%) * 999,100%)" },
                }}>
                <Grid
                    container
                    direction="column"
                    justifyContent="space-evenly"
                    alignItems="center"
                >
                    <Avatar sx={{
                        m: 1,
                    }}
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

                    <Button
                        color="inherit"
                        sx={{
                            borderRadius: 3,
                        }}
                        startIcon={<PersonSearchRoundedIcon />}
                        href={"/profile/" + props.student["user_id"]}
                    >
                        プロフィール
                    </Button>
                </Grid>
            </Card>
        </Grid>
    )
}

export default StudentListProfileCard
