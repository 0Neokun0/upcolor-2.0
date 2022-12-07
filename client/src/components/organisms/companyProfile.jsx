import { Box, Grid } from "@mui/material"

const CompanyProfile = (props) => {
    return (
        <Box
            sx={{
                p: 2,
                width: 1,
            }}
        >
            <Grid
                container
                direction="row"
                spacing={3}
            >
                {props["children"]}
            </Grid>
        </Box>
    )
}

export default CompanyProfile
