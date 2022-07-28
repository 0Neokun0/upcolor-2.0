import { GroupList } from "components/organisms"
import { Grid } from "@mui/material"

const GroupChatLayout = (props) => {
    return (
        <Grid
            container
        >
            <Grid
                item
                xs={4}
                sx={{
                    borderRight: 1,
                    borderColor: "lightgray",
                }}
            >
                <GroupList groups={props.groups} />
            </Grid>

            <Grid
                item
                xs={8}
            >
                a
            </Grid>
        </Grid>
    );
}

export default GroupChatLayout;
