import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, Grid, Stack, Typography } from '@mui/material'
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded'

const CompanyDetailsTab = (props) => {
    return (
        <Accordion>
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
                        {
                            props.icon
                                ?
                                props.icon
                                :
                                "情報無し"
                        }
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
                            {props.title}
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
                        sx={{
                            width: '150px',
                            height: '120px',
                            borderRadius: 2,
                            border: "2px solid gray",
                        }}
                        component="img"
                        alt="companyAriticleImage"
                        src={props.imageSrc}

                    />
                    <Box
                        sx={{
                            borderLeftStyle: 'inset',
                            p: 4,
                        }}
                    >
                        <Typography>
                            {
                                props.content
                                    ?
                                    props.content
                                    :
                                    "情報無し"
                            }
                        </Typography>
                    </Box>
                </Stack>
            </AccordionDetails>
        </Accordion>

    )
}

export default CompanyDetailsTab