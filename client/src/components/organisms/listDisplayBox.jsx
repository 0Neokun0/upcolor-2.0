import { Box, Grid } from "@mui/material"

const ListDisplayBox = (props) => {
    return (
        <Box
            sx={{
                justifyItems: "center",
                width: "100%",
                minHeight: "80vh",
                maxHeight: "80vh",
                p: 2,
                overflow: "auto",
                "::-webkit-scrollbar": {
                    width: "5px",
                },
                "::-webkit-scrollbar-thumb": {
                    backgroundColor: "rgba(0, 0, 50, .5)",
                    borderRadius: "5px",
                },
                "::-webkit-scrollbar-track": {
                    boxShadow: 2,
                },

            }}
        >
            <Grid
                container
            >
                {props.children}
            </Grid>

        </Box>
    )
}

export default ListDisplayBox
