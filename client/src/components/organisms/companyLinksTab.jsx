import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, Grid, Typography } from "@mui/material"

import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded'



const CompanyLinksTab = (props) => {
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
                        <Typography>
                            {props.introduction}
                        </Typography>

            </AccordionDetails>
        </Accordion>
    )
}

export default CompanyLinksTab
