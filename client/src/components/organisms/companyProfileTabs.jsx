import { Box, Card, Grid } from "@mui/material";

const CompanyProfileTabs = (props) => {
    return (
        <Grid
            item
            xs={12}
            sx={{ mt: 2 }}
        >
            <Card
                sx={{
                    borderRadius: '10px',
                    boxShadow: 3,

                }}
            >
                <Box
                    sx={{
                        borderBottom: 1,
                        borderColor: 'divider',
                    }}
                >
                    {props["children"]}
                </Box>
            </Card>
        </Grid>
    )
}

export default CompanyProfileTabs