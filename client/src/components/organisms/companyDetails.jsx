import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  Divider,
  Grid,
  Stack,
  Typography,
} from '@mui/material'
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded'


const companyDetails = (props) => {
    return (

        <Card>
            {props.companyDetailsTabs.map((companyElem) => {
                return (
                    <Accordion key={companyElem['companyDetailsTabsRow']}>
                        <AccordionSummary
                            sx={{
                                bgcolor: '#f5f5f5',
                            }}
                            expandIcon={<ExpandMoreRoundedIcon />}

                        >
                            <Grid
                                container
                                direction="row"
                                alignItems="center"
                            >
                                <Grid
                                    item
                                    sx={{
                                        mr: 2,
                                    }}
                                >
                                    {companyElem['companyDetailsIcon']}
                                </Grid>

                                <Divider
                                    orientation="vertical"
                                    flexItem
                                    sx={{
                                        mr: 2,
                                    }}
                                />

                                <Grid
                                    item
                                >
                                    <Typography
                                        gutterBottom
                                        variant="h7"
                                        component="div"
                                        >
                                        {companyElem['companyDetailsTabsRow']}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </AccordionSummary>

                        <Divider />

                        <AccordionDetails
                            sx={{
                                p: 4,
                            }}
                        >
                            <Stack
                                direction="row"
                                spacing={3}
                                justifyContent="flex-start"
                            >
                                <Box
                                    component="img"
                                    alt="companyAriticleImage"
                                    src={companyElem['companyDetailsImage']}
                                    sx={{
                                        width: '150px',
                                        height: '120px',
                                    }}
                                />
                                <Box
                                    sx={{
                                        borderLeftStyle: 'inset',
                                        p: 4,
                                    }}
                                >
                                <Typography>
                                    {companyElem['companyDetailsData']}
                                </Typography>
                                </Box>
                            </Stack>
                        </AccordionDetails>
                    </Accordion>
                )
        })}
        </Card>
  )
}

export default companyDetails
