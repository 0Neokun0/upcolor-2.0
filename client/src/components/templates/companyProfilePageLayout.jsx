import {
  Box,
  Card,
  Chip,
  Container,
  Grid,
  Stack,
  Tab,
  Tabs,
  Typography,
} from '@mui/material'
import { CompanyPageTitle } from 'components/molecules'
import PropTypes from 'prop-types'
import { useState } from 'react'
import CompanyDetails from '../organisms/companyDetails'
import CompanyRecruitment from '../organisms/companyRecruitment'
import CompanySeminar from '../organisms/companySeminar'

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
        <Grid container direction="row" spacing={3}>
          <CompanyPageTitle />

          <Grid item xs={12} sx={{ mt: 2 }}>
            <Card
              sx={{
                borderRadius: '10px',
              }}
            >
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: 'divider',
                }}
              >
                <Tabs value={value} onChange={handleChange} centered>
                  <Tab
				   label="会社概要" {...a11yProps(0)}
				   />

                  <Tab
				  label="採用データ" {...a11yProps(1)}
				  />

                  <Tab
				  label="説明会・セミナー" {...a11yProps(2)}
				  />
                </Tabs>
              </Box>

              <TabPanel
			  value={value}
			  index={0}
			  >
                <CompanyDetails companyDetailsTabs={props.companyDetailsTabs} />
              </TabPanel>

              <TabPanel
			  value={value}
			  index={1}>
                <CompanyRecruitment />
              </TabPanel>

              <TabPanel
			  value={value}
			  index={2}>
                <CompanySeminar />
              </TabPanel>

            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default CompanyProfilePageLayout
