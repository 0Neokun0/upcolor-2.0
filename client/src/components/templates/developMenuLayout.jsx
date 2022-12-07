import { Box, Container, Hidden } from "@mui/material"

const DevelopMenuLayout = (props) => {
    const { menuList, developBox } = props
    return (
        <Container
            maxWidth="false"
            disableGutters
            sx={{
                minHeight: "calc(100vh - 64px)",
                py: 2,
                display: "flex",
                backgroundColor: "#FFF",
            }}
        >
            <Hidden
                lgDown
            >
                <Box
                    sx={{
                        width: "300px",
                        height: "100%",
                    }}
                >
                    {menuList}
                </Box>
            </Hidden>
            <Box
                sx={{
                    width: "calc(100% - 300px)",
                    "@media screen and (max-width:1200px)": {
                        width: "100%",
                    },
                }}
            >
                {developBox}
            </Box>
        </Container>
    )
}

export default DevelopMenuLayout
