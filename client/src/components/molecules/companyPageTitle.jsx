import { Avatar, Box, Card, Chip, Grid, Stack, Typography } from '@mui/material'
import { server } from 'components/config'

const CompanyPageTitle = (props) => {
    return (
        <Grid
            item
            xs={12}
        >
            <Card
                sx={{
                    maxWidth: '100%',
                    p: 2,
                    borderRadius: '10px',
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Avatar
                        sx={{
                            width: 75,
                            height: 75,
                            mr: 2,
                            mb: 2,
                            border: "2px solid gray",
                        }}
                        variant="rounded"
                        src={server.host + "/images/icon/" + props.company["manager_image"]}
                    />
                    <Typography
                        gutterBottom
                        variant="h2"
                        component="div"
                    >
                        {props.company["company_name"]}
                    </Typography>
                </Box>
                <Stack
                    direction="row"
                    spacing={2}
                >
                    <Box
                    sx={{
                        p: 0.5,
                        fontWeight: 600,
                    }}
                >
                    業種 :
                </Box>
                    <Chip
                        sx={{
                            p: 1,
                            fontWeight: 600,
                        }}
                        label={
                            props.company["occupation_names"]
                                ? props.company["occupation_names"]
                                : "情報無し"
                        }
                    />
                </Stack>
            </Card>
        </Grid>
    )
}

export default CompanyPageTitle