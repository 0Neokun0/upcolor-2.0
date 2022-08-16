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
                    xs={1}
                    sx={{
                        borderRight: 1,
                        borderColor: "rgba(0, 0, 0, 0.12)",
                    }}
                >
                    <GroupMenu
                        menus={props.menus}
                    />
                </Grid>

                <Grid
                    item
                    xs={11}
                >
                    <Outlet
                        context={{
                            handleCreateSubmit: props.handleCreateSubmit 
                        }}
                    />
                </Grid>
            </Grid>
        </Container>
    );
}

export default GroupLayout;
