import { Outlet } from "react-router-dom"
import { MainMenu, News, SendPost } from "components/organisms"
import { Container, Grid } from "@mui/material"

const HomeLayout = (props) => {
    return (
        <Container>
            <SendPost
                handleSubmit={props.handleSubmit}
                open={props.open}
                toggleModalOpen={props.toggleModalOpen}
                toggleModalClose={props.toggleModalClose}
            />

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
                    <MainMenu
                        menus={props.menus}
                    />
                </Grid>

                <Grid
                    item
                    xs={6}
                    sx={{
                        borderLeft: 1,
                        borderRight: 1,
                        p: 2,
                        pt: 0,
                        borderColor: "rgba(0, 0, 0, 0.12)",
                    }}
                >
                    <Outlet
                        context={{
                            "post": props.post,
                            "posts": props.posts,
                            "replys": props.replys,
                        }}
                    />
                </Grid>

                <Grid
                    item
                    xs={3}
                    sx={{
                        p: 2,
                        pt: 0,
                    }}
                >
                    <News
                        news={props.news}
                    />
                </Grid>
            </Grid>
        </Container>
    );
}

export default HomeLayout;
