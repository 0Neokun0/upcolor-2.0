import { Feed, MainMenu, News } from "components/organisms"
import { Container, Grid } from "@mui/material"

const HomeLayout = (props) => {
    return (
        <Container>
            <Grid
                container
                sx={{
                    background: "white",
                    height: "100%",
                }}
            >
                <Grid
                    item
                    xs={3}
                >
                    <MainMenu menus={props.menus} />
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
                    sx={{
                        p: 2,
                        pt: 0,
                    }}
                >
                    <News news={props.news} />
                </Grid>
            </Grid>
        </Container>
    );
}

export default HomeLayout;
