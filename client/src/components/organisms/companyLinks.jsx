import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  Typography,
} from '@mui/material'
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded'

const companyLinks = (props) => {
    return (
        <Card>
            {props.companyLinksTabs.map((companyElem) => {
                return (
                    <Accordion key={companyElem['companyLinksRow']}>
                        <AccordionSummary
                            sx={{
                                bgcolor: '#f5f5f5',
                            }}
                            expandIcon={<ExpandMoreRoundedIcon />}
                        >
                        <Typography>
                            {companyElem['companyLinksRow']}
                        </Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Typography>
                                {companyElem['companyLinksData']}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                )
            })}
        </Card>
    )
}

export default companyLinks
