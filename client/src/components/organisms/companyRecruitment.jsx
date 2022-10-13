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

const companyRecruitment = (props) => {
    return (
        <Card>
        {props.companyRecruitmentTabs.map((companyElem) => {
            return (
            <Accordion key={companyElem['companyRecruitmentRow']}>
                <AccordionSummary
                    sx={{
                        bgcolor: '#f5f5f5',
                    }}
                    expandIcon={<ExpandMoreRoundedIcon />}
                >
                <Typography>
                    {companyElem['companyRecruitmentRow']}
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
                            src={companyElem['companyRecruitmentImage']}
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
                            {companyElem['companyRecruitmentData']}
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

export default companyRecruitment
