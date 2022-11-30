import { Card, Chip, Grid, Stack, Typography } from '@mui/material'

const CompanyPageTitle = (props) => {
    return (
        <Grid
            item
            xs={12}
            sx={{
                mt: 2,
            }}
        >
            <Card
                sx={{
                    maxWidth: '100%',
                    p: 2,
                    borderRadius: '10px',
                }}
            >
                <Typography
                    gutterBottom
                    variant="h2"
                    component="div"
                >
                    {props.company["company_name"]}
                </Typography>

                <Stack
                    direction="row"
                    spacing={2}
                >
                    <Chip
                        sx={{
                            p: 1,
                            fontWeight: 600,
                        }}
                        label={"業種" + " : " + props.company["occupation_names"]}
                    />
                </Stack>
            </Card>
        </Grid>
    )
}

export default CompanyPageTitle