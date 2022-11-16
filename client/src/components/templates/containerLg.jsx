import { Container } from "@mui/material"

const ContainerLg = (props) => {
    return (
        <Container
            size="lg"
            sx={{
                p: 2,
            }}
        >
            {props["children"]}
        </Container>
    );
}

export default ContainerLg