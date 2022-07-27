import { Feed } from "components/organisms"
import { Container, Grid } from "@mui/material"

const HomeLayout = () => {
    return (
        <Container>
            <Grid
                container
                sx={{
                    background: "white",
                }}
            >
                <Grid
                    xs={3}
                >

                </Grid>

                <Grid
                    xs={6}
                    sx={{
                        borderLeft: 1,
                        borderRight: 1,
                        p: 2,
                        borderColor: "lightgray",
                    }}
                >
                    <Feed />
                </Grid>

                <Grid
                    xs={3}
                >

                </Grid>
            </Grid>
        </Container>
    );
}

export default HomeLayout;
