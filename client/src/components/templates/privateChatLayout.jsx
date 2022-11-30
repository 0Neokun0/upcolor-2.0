import { Container, Stack } from "@mui/material"

const PrivateChatLayout = (props) => {
    const { list, chat } = props

    return (
        <Container
            maxWidth="false"
            disableGutters
            sx={{
                height: "calc(100vh - 64px)",
                py: 2,
                px: 4,
            }}
        >
            <Stack
                direction="row"
                spacing={2}
                sx={{
                    height: "100%",
                }}
            >
                {list}
                {chat}
            </Stack>
        </Container>
    )
}

export default PrivateChatLayout