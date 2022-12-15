import { Container } from "@mui/material"

const TeamWorkLayout = (props) => {
    return (
        <Container
            disableGutters
            maxWidth="md"
            sx={{
                backgroundColor: "white",
                p: 2,
                borderRadius: 3,
            }}
        >
            {props.children}
        </Container>
    );
}

export default TeamWorkLayout
