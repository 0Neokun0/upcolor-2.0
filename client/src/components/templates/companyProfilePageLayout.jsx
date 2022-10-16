import { Box, Card, Grid, Tab, Tabs, Typography } from '@mui/material'
import { CompanyPageTitle } from 'components/molecules'
import PropTypes from 'prop-types'
import { useState } from 'react'
import CompanyDetails from '../organisms/companyDetails'
import CompanyRecruitment from '../organisms/companyRecruitment'
import CompanySeminar from '../organisms/companyLinks'

import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded'
import ContactMailIcon from '@mui/icons-material/ContactMail'
import AutoStoriesIcon from '@mui/icons-material/AutoStories'

function TabPanel(props) {
    const { children, value, index, ...other } = props
        return (
            <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
            >
            {value === index && (
                <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
                </Box>
            )}
            </div>
        )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    }
}

const CompanyProfilePageLayout = (props) => {
    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

  return (
    <>
        <Box
            sx={{
            p: 2,
            }}
        >
            <Grid
                container
                direction="row"
                spacing={3}
            >
                <CompanyPageTitle
                    companyName={props.companyName}
                    companyOccupation={props.companyOccupation}
                />

                <Grid
                    item
                    xs={12}
                    sx={{ mt: 2 }}
                >
                <Card
                    sx={{
                    borderRadius: '10px',
                    boxShadow: 3,
                    }}
                >
                    <Box
                        sx={{
                        borderBottom: 1,
                        borderColor: 'divider',
                        }}
                    >
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            centered
                        >
                            <Tab
                                label="会社概要"
                                icon={<BusinessRoundedIcon />}
                                iconPosition="top"
                                {...a11yProps(0)}
                            />

                            <Tab
                                label="採用データ"
                                icon={<ContactMailIcon />}
                                iconPosition="top"
                                {...a11yProps(1)}
                            />

                            <Tab
                                label="説明会・セミナー"
                                icon={<AutoStoriesIcon />}
                                iconPosition="top"
                                {...a11yProps(2)}
                            />
                        </Tabs>
                    </Box>

                        <TabPanel value={value} index={0}>
                            <CompanyDetails
                                companyDetailsTabs={props.companyDetailsTabs}
                            />
                        </TabPanel>

                        <TabPanel value={value} index={1}>
                            <CompanyRecruitment
                                companyRecruitmentTabs={props.companyRecruitmentTabs}
                            />
                        </TabPanel>

                        <TabPanel value={value} index={2}>
                            <CompanySeminar
                                companyLinksTabs={props.companyLinksTabs}
                            />
                        </TabPanel>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    </>
  )
}

export default CompanyProfilePageLayout
