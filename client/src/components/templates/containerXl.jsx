import { Container } from "@mui/material"

const ContainerXl = (props) => {
    return (
        <Container
            maxWidth="xl"
            sx={{
                p: 2,
            }}
        >
            {props["children"]}
        </Container>
    );
}

export default ContainerXl