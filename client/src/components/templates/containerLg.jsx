import { Container } from "@mui/material"

const ContainerLg = (props) => {
    return (
        <Container
            size="lg"
            sx={{
                height: "calc(100vh - 64px)",
                p: 2,
            }}
        >
            {props["children"]}
        </Container>
    );
}

export default ContainerLg