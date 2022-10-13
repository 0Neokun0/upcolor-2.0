import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  Divider,
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
                            <Typography>
                                {companyElem['companyDetailsTabsRow']}
                            </Typography>
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
