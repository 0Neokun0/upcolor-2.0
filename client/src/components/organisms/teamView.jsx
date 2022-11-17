import { Grid } from "@mui/material"
import { TeamViewCard } from "components/molecules"

const TeamView = (props) => {
    return (
        <Grid
            container
            sx={{
                mx: "auto",
                display: "flex",
            }}
        >
            {
                props.teams
                &&
                props.teams.map((team, index) => {
                    return (
                        <TeamViewCard
                            key={index}
                            team={team}
                        />
                    )
                })
            }
        </Grid>
    );
}
export default TeamView