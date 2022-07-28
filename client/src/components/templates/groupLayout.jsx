import { Outlet } from "react-router-dom"
import { Container, Grid } from "@mui/material"
import { GroupMenu } from "components/organisms";

const GroupLayout = (props) => {
    return (
        <Container>
            <Grid
                container
                sx={{
                    background: "white",
                }}
            >
                <Grid
                    item
                    xs={2}
                    sx={{
                        borderRight: 1,
                        borderColor: "rgba(0, 0, 0, 0.12)",
                    }}
                >
                    <GroupMenu menus={props.menus} />
                </Grid>

                <Grid
                    item
                    xs={10}
                >
                    <Outlet />
                </Grid>
            </Grid>
        </Container>
    );
}

export default GroupLayout;
