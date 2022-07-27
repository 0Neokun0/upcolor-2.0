import { Feed } from "components/organisms"
import { Container, Grid } from "@mui/material"

const HomeLayout = (props) => {
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
                    xs={3}
                >

                </Grid>

                <Grid
                    item
                    xs={6}
                    sx={{
                        borderLeft: 1,
                        borderRight: 1,
                        p: 2,
                        pt: 0,
                        borderColor: "lightgray",
                    }}
                >
                    <Feed posts={props.posts} />
                </Grid>

                <Grid
                    item
                    xs={3}
                >

                </Grid>
            </Grid>
        </Container>
    );
}

export default HomeLayout;
