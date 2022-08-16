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
                    height: "calc(100vh - 64px)",
                    overflowY: "scroll",
                    borderRight: 1,
                    borderColor: "rgba(0, 0, 0, 0.12)",
                }}
            >
                <GroupList groups={props.groups} />
            </Grid>

            <Grid
                item
                xs={8}
                sx={{
                    height: "calc(100vh - 64px)",
                    overflowY: "scroll",
                }}
            >
                a
            </Grid>
        </Grid>
    );
}

export default GroupChatLayout;
