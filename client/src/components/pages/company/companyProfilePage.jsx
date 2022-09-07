import * as React from 'react'
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
import PropTypes from 'prop-types'
import CompanyDetails from './companyDetails'
import CompanyRecruitment from './companyRecruitment'
import CompanySeminar from './companySeminar'
import CompanyLinks from './companyLinks'
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
const CompanyProfilePage = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <Container maxWidth="100%" justifyContent="center">
      <Box sx={{ bgcolor: '#eeeeee', height: '100vh' }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sx={{ mt: 2 }}>
            <Card sx={{ maxWidth: '100%', p: 2 }}>
              <Typography gutterBottom variant="h2" component="div">
                企業名前
              </Typography>
              <Stack direction="row" spacing={2}>
                <Chip color="info" label="業種" />
                <Chip color="info" label="業種" />
                <Chip color="info" label="業種" />
              </Stack>
            </Card>
          </Grid>

          
          <Grid item xs={12} sx={{ mt: 2 }}>
            <Card sx={{ maxWidth: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} centered>
                  <Tab label="会社概要" {...a11yProps(0)} />
                  <Tab label="採用データ" {...a11yProps(1)} />
                  <Tab label="説明会・セミナー" {...a11yProps(2)} />
                  <Tab label="企業マイページ" {...a11yProps(3)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <CompanyDetails/>
              </TabPanel>
              <TabPanel value={value} index={1}>
              <CompanyRecruitment/>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <CompanySeminar/>
              </TabPanel>
              <TabPanel value={value} index={3}>
                <CompanyLinks/>
              </TabPanel>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default CompanyProfilePage
