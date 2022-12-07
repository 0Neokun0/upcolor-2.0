import { Accordion, AccordionDetails, AccordionSummary, Divider, Grid, Typography } from "@mui/material"
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
                            {
                                props.title
                                    ?
                                    props.title
                                    :
                                    "情報無し"
                            }
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
                    {
                        props.link
                            ?
                            props.link
                            :
                            "情報無し"
                    }
                </Typography>

            </AccordionDetails>
        </Accordion>
    )
}

export default CompanyLinksTab
