import { Card, Grid, Avatar } from "@mui/material"
import { Link } from "react-router-dom"

const StudentListProfileCard = (props) => {
    return (
        <Grid
            item
            xs={12}
            sm={6}
            lg={4}
            xl={3}
        >
            <Card>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                >
                    <Avatar />
                </Grid>
            </Card>
            {/* <Link
                to={"/profile/" + props.student["user_id"]}
            >
                {props.student["user_id"] + props.student["name"] + props.student["course_name"] + props.student["year_name"] + props.student["mail"]}
            </Link> */}
        </Grid>
    )
}

export default StudentListProfileCard
