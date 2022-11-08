import { Container } from "@mui/material"

const TeamWorkLayout = (props) => {
    return (
        <Container
            disableGutters
            maxWidth="lg"
            sx={{
                p: 2,
            }}
        >
            {props["children"]}
        </Container>
    );
}

export default TeamWorkLayout
