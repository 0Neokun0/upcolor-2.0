import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Card,
    Divider,
    Grid,
    Typography,
} from '@mui/material'
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded'

const CompanyLinks = (props) => {
    return (
        <Card>
            {
                props.companyLinksTabs.map((companyElem) => {
                    return (
                        <Accordion
                            key={companyElem['companyLinksRow']}
                        >
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
                                        {companyElem['companyLinkIcon']}
                                    </Grid>

                                    <Divider
                                        orientation="vertical"
                                        flexItem
                                        sx={{
                                            mr: 2,
                                        }}
                                    />

                                    <Grid item>
                                        <Typography>
                                            {companyElem['companyLinksRow']}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Typography>
                                    {companyElem['companyLinksData']}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    )
                })
            }
        </Card>
    )
}

export default CompanyLinks