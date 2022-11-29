
import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, Grid, Stack, Typography } from '@mui/material'

import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded'
import CorporateFareIcon from "@mui/icons-material/CorporateFare"

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
                        {props.icon}
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
                        component="img"
                        alt="companyAriticleImage"
                        src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?cs=srgb&dl=pexels-pixabay-269077.jpg&fm=jpg"
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
                            {props.content}
                        </Typography>
                    </Box>
                </Stack>
            </AccordionDetails>
        </Accordion>

    )
}

export default CompanyDetailsTab