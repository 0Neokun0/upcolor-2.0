import { Container } from "@mui/material"

const TeamWorkLayout = (props) => {
    return (
        <Container
            disableGutters
            maxWidth="md"
            sx={{
                backgroundColor: "white",
                p: 2,
            }}
        >
            {props["children"]}
        </Container>
    )
}

export default TeamWorkLayout
