import { Container } from "@mui/material"

const ContainerMd = (props) => {
    return (
        <Container
            maxWidth="md"
            sx={{
                p: 2,
            }}
        >
            {props["children"]}
        </Container>
    );
}

export default ContainerMd