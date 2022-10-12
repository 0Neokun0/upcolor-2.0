import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
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
                    bgcolor: '#f5f5f5'
                }}
                expandIcon={<ExpandMoreRoundedIcon />}>
                <Typography>
                    {companyElem['companyRecruitmentRow']}
                </Typography>
            </AccordionSummary>

            <AccordionDetails>
                <Typography>
                    {companyElem['companyRecruitmentData']}
                </Typography>
            </AccordionDetails>
          </Accordion>
        )
      })}
    </Card>
  )
}

export default companyRecruitment